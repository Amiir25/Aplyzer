import mysql from 'mysql2';
import db from "../database/db.js";

export const signUp = (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(email);
    res.status(200).json({message: 'Sign Up successful'});
}

export const signIn = (req, res, next) => {
    const { email, password } = req.body;
    console.log("Sign in successfull", email, password);
    res.status(200).json({ message: 'Sign in successful' })
}