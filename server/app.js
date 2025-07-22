import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { db } from './databse/db.js';

dotenv.config();
import jobsRouter from './routes/jobs.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/jobs', jobsRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`);
});