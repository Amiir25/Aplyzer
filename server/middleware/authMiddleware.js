import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
     // Get the token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // header format: "Bearer <token>"
    if (!token) return res.status(401).json({ message: 'No token provided' });

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status().json({ message: 'Invalid or expired token' });

        // Save payload to request object
        req.user = user;
        next();
    })
}

export default authenticateToken;