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

        // sign jwt
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10m' });

        return res.status(200).json({ user, token });
    })
}