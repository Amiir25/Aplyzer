import db from "../database/db.js";

export const userDashboard = (req, res, next) => {
    const { id } = req.params;
    const fetchQuery = 'SELECT * FROM users WHERE uid = ?';

    db.query(fetchQuery, id, (err, users) => {
        if (err) {
            console.error('DB error', err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (!users.length) return res.status(409).json({ message: 'User not found, Try again' });
        return res.status(200).json({ user: users[0] });
    });
}

// User profile
export const userProfile = (req, res, next) => {

}