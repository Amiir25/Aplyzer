import db from "../database/db.js";

export const userDashboard = (req, res, next) => {
    const { id } = req.params;

    const userQuery = 'SELECT username FROM users WHERE uid = ?';
    const allJobsQuery = 'SELECT * FROM jobs WHERE user_id  = ?';
    const recentJobsQuery = 'SELECT * FROM jobs WHERE user_id = ? AND applied_date >= CURDATE() - INTERVAL 3 DAY';

    db.query(userQuery, id, (err, usernames) => {
        if (err) {
            console.error('DB error', err);
            return res.status(500).json({ message: 'Database error' });
        }

            db.query(allJobsQuery, id, (err, jobs) => {
                if (err) {
                    console.error('DB error', err);
                    return res.status(500).json({ message: 'Database error' });
                }

                db.query(recentJobsQuery, id, (err, recentJobs) => {
                    if (err) {
                        console.error('DB error', err);
                        return res.status(500).json({ message: 'Database error' });
                    }
                    
                    if (!usernames.length) return res.status(409).json({ message: 'User not found, Try again' });
                    return res.status(200).json({
                        username: usernames[0].username,
                        jobs: jobs,
                        recentJobs: recentJobs
                    });
                })
            });
    })
}

// User profile
export const userProfile = (req, res, next) => {

}