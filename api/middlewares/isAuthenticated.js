import jwt from 'jsonwebtoken';
import User from '../models/User.schema.js';

export const isAuthenticated = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    // Not Authorized
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }

    // Parse the token
    const token = authHeader.split(' ')[1];

    // Verify token
    let match;
    try {
        match = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        req.isAuth = false;
        return next();
    }

    // Token cannot be verified
    if (!match) {
        req.isAuth = false;
        return next();
    }

    req.isAuth = match._id;
    req.user = await User.findById(match._id);
    return next();
};
