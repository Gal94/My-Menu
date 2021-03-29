import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../models/User.schema.js';
import Goal from '../models/Goal.schema.js';
import HttpError from '../util/httpError.js';

// Fetch and return  all user info
export const getProfileInfo = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    try {
        const user = await User.findById(req.isAuth)
            .select('-password -weights')
            .exec();

        if (user.menus.length > 0) {
            await user.populate('menus').exec();
        }

        res.status(200).json({ user: user.toObject({ getters: true }) });
    } catch (err) {
        console.log(err);
    }
};

export const putProfileInfo = async (req, res, next) => {
    // not authenticated
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }
    const { errors } = validationResult(req);
    const userInfo = req.body;
    // Check if there are any validation errors
    if (errors.length > 0) {
        return next(new HttpError(`${errors[0].param} has ${errors[0].msg}`));
    }

    // check if password was request to be changed
    if (userInfo.currentPassword && userInfo.newPassword) {
        // check if current password match the stored password
        if (
            !(await bcrypt.compare(userInfo.currentPassword, req.user.password))
        ) {
            return next(new HttpError('Invalid password', 403));
        }

        // hash the new password if > 6 and < 14
        if (
            userInfo.newPassword.length > 6 &&
            userInfo.newPassword.length < 14
        ) {
            req.user.password = await bcrypt.hash(userInfo.newPassword, 12);
        } else {
            return next(new HttpError('Invalid password length', 403));
        }
    }

    // update the rest of the info
    const { firstName, lastName, email, age } = req.body;

    req.user.firstName = firstName;
    req.user.lastName = lastName;
    req.user.email = email;
    req.user.age = age;

    // save changes
    await req.user.save();

    const updatedUser = await User.findById(req.isAuth)
        .select('-password -weights')
        .exec();

    return res.status(201).json({
        user: updatedUser.toObject({ getters: true }),
    });
};

export const getMacros = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    const fetchedUser = await User.findById(req.isAuth).exec();
    // check if there are no goals set already

    if (!fetchedUser.goal) {
        const newGoal = new Goal({
            userId: req.isAuth,
            calories: 0,
            carbs: 0,
            proteins: 0,
            fats: 0,
            goalWeight: 0,
        });

        // create a default goal - saves changes in a session
        try {
            const session = await mongoose.startSession();
            session.startTransaction();
            const goalObj = await newGoal.save({ session: session });
            fetchedUser.goal = goalObj._id;
            await fetchedUser.save({ session: session });
            await session.commitTransaction();
        } catch (err) {
            return next(new HttpError('Something went wrong', 500));
        }
    }

    const goalToReturn = await Goal.findOne({ userId: req.isAuth });

    return res.status(201).json({ goal: goalToReturn });
};
