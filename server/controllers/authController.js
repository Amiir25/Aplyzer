import db from "../database/db.js";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export const signUp = (req, res, next) => {
    const { username, email, password } = req.body;
    try {

        // Check if the user exists
        const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
        db.query(checkQuery, [username, email], async (err, user) => {
            if (err) {
                console.error('DB error', err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (user.length) return res.status(409).json({ message: 'Username or email already exists' });

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
                    return res.status(500).json({ message: 'Failed to create user' })
                }
                res.status(201).json({ message: 'User has been created succussfully' });
            });
        });
        
    } catch (err) {
        console.error('Server error', err);
        res.status(500).json({Error: 'Internal server error'});
    }
}

export const signIn = (req, res, next) => {
    const { email, password } = req.body;
    console.log("Sign in successfull", email, password);
    res.status(200).json({ message: 'Sign in successful' })
}