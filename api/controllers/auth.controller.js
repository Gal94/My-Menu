import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.schema.js';
import HttpError from '../util/httpError.js';

export const postRegister = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if Email exists
        const foundUser = await User.findOne({ email: email }).exec();
        if (foundUser) {
            return next(new HttpError('Email is already registered', 400));
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = new User({
            ...req.body,
            password: hashedPassword,
        });

        await user.save();
        return res.status(200).json({
            message: 'Signed up successfully',
        });
    } catch (error) {
        return next(new HttpError(error, 500));
    }
};

export const postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const foundUser = await User.findOne({ email: email }).exec();
        if (!foundUser) {
            return next(new HttpError('Invalid Credentials', 403));
        }

        // match passwords
        const passwordsMatch = await bcrypt.compare(
            password,
            foundUser.password
        );
        if (!passwordsMatch) {
            return next(new HttpError('Invalid Credentials', 403));
        }

        // generate JWT and return response
        const token = jwt.sign({ _id: foundUser._id }, process.env.JWT_SECRET);

        res.status(200).json({
            token,
            user: {
                _id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email,
            },
        });
    } catch (err) {
        return next(new HttpError(err, 500));
    }
};
