import db from "../database/db.js";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export const signUp = (req, res) => {
    const { username, email, password } = req.body;
    try {

        // Check if the user exists
        const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
        db.query(checkQuery, [username, email], async (err, users) => {
            if (err) {
                console.error('DB error', err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (users.length) return res.status(409).json({ message: 'Username or email already exists' });

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Unique user Id
            const userId = uuidv4();

            // Insert new user
            const insertQuery = 'INSERT INTO users (uid, username, email, password) VALUES (?, ?, ?, ?)';
            const values = [userId, username, email, hashedPassword];
            db.query(insertQuery, values, (err) => {
                if (err) {
                    console.error("Insert error:", err);
                    return res.status(500).json({ message: 'Failed to create user' });
                }
                res.status(201).json({ message: 'User has been created succussfully' });
            });
        });
        
    } catch (err) {
        console.error('Server error', err);
        res.status(500).json({Error: 'Internal server error'});
    }
}

// Sign In
export const signIn = (req, res) => {
    const { email, password } = req.body;
    
    // Check if the user exists
    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkQuery, email, async (err, users) => {
        if (err) {
            console.error('DB error', err);
            return res.status(500).json({message: 'Database Error'});
        }

        if (!users.length) return res.status(409).json({ message: 'Email not found' });

        const user = users[0];

        // Check password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return res.status(401).json({ message: 'Incorrect password' });

        // jwt payload
        const payload = {
            id: user.uid,
            email: user.email,
            username: user.username,
        }

        // jwt access & refresh tokens
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        // Store refresh token in DB
        const tokenQuery = `
            INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)
            ON DUPLICATE KEY UPDATE token = VALUES(token)
        `;
        db.query(tokenQuery, [user.uid, refreshToken]);

        // Send refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/auth/refresh',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ user, accessToken });
    })
}

// Refresh token
export const refreshToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });

    // Verify refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });

        // Check in DB that refresh token matches
        const checkTokenQuery = 'SELECT * FROM refresh_tokens WHERE uid = ? AND token = ?';
        db.query(checkTokenQuery, [user.id, refreshToken], (err, users) => {
            if (err || !users.length) {
                return res.status(403).json({ message: 'Invalid refresh token in DB' })
            }

            // Issue new access token
            const newAccessToken = jwt.sign(
                { id: user.id, email: user.email, username: user.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10m' }
            );

            return res.json({ accessToken: newAccessToken });
            
        })
    })
}