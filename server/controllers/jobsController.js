import db from "../database/db.js";

export const getAllJobs = (req, res) => {
    const { id } = req.params;
    try {
        const fetchQuery = 'SELECT * FROM jobs WHERE user_id = ?';
        db.query(fetchQuery, [id], (err, jobs) => {
            if (err) {
                console.log('Database Error:', err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (!jobs.length) {
                return res.status(400).json({ message: 'User has no saved jobs yet' });
            }

            return res.status(200).json({ jobs });
        })
    } catch (error) {
        console.log('Server error:', error)
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const getJobDetails = (req, res) => {
    const { id } = req.params;

    try {
        const fetchQuery = 'SELECT * FROM jobs WHERE jid = ?';
        db.query(fetchQuery, [id], (err, jobs) => {
            if (err) {
                console.log('Database error:', err);
                return res.status(500).json({ message: 'Database error' });
            }

            return res.status(200).json({ job: jobs[0] });
        })
    } catch (error) {
        console.log('Server error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}