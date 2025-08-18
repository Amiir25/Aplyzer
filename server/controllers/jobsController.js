import db from "../database/db.js";
import { v4 as uuidv4 } from "uuid";

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

export const addNewJob = (req, res) => {
    const {
        user_id,
        company_name,
        location,
        job_title,
        job_description,
        required_skills,
        exp_level,
        job_type,
        work_mode,
        applied_date,
        deadline,
        status,
        favorite,
        more_info
    } = req.body;

    const jid = uuidv4();

    const insertQuery = `INSERT INTO jobs (
    jid, user_id, company_name, location, job_title, job_description,
    required_skills, exp_level, job_type, work_mode, applied_date, deadline,
    status, favorite, more_info
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        insertQuery,
        [
            jid, user_id, company_name, location, job_title, job_description,
            required_skills, exp_level, job_type, work_mode, applied_date, deadline,
            status, favorite, more_info
        ],
        (err) => {
            if (err) {
                console.error("DB error", err);
                return res.status(500).json({ message: "Database error" });
            }

            return res.status(201).json({ message: 'Job added successfully', jid });
        }
    )
}