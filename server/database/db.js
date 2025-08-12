import mysql from 'mysql2';
import util from 'util';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Convert db.query into a Promise-based function
db.query = util.promisify(db.query).bind(db);

db.query('SELECT 1', (err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Database connected (via pool)');
  }
});

export default db;