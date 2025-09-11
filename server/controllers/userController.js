import db from "../database/db.js";

export const userDashboard = async (req, res) => {
    const { id } = req.params;

    try {
        // Run multiple queries in parallel
        const [user, jobs, recentJobs] = await Promise.all([
            db.query('SELECT username FROM users WHERE uid = ?', [id]),
            db.query('SELECT * FROM jobs WHERE user_id  = ?', [id]),
            db.query('SELECT * FROM jobs WHERE user_id = ? AND applied_date >= CURDATE() - INTERVAL 3 DAY', [id])
        ]);

        if (!user.length) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.status(200).json({
            user: req.user,
            username: user[0].username,
            jobs,
            recentJobs
        });
    
    } catch (err) {
        console.error('DB error', err);
        return res.status(500).json({ message: 'Database error' });
    }
}

// User profile
export const userProfile = (req, res) => {
    // const { id } = req.params;
    // const fetchQuery = 'SELECT * FROM users WHERE uid = ?';

    // db.query(fetchQuery, [id], (err, users) => {
    //     if (err) {
    //         console.log('DB error while fetching user profile:', err);
    //         return res.status(500).json({ message: 'DB error while fetching user profile.' });
    //     }

    //     console.log('User in userProfile:', users[0]);
    //     return res.status(200).json({ user: users[0] });
    // })
}