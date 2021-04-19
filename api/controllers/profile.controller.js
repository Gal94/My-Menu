import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import Menu from '../models/Menu.schema.js';
import User from '../models/User.schema.js';
import Goal from '../models/Goal.schema.js';
import HttpError from '../util/httpError.js';

// * Fetch and return  all user info
export const getProfileInfo = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    try {
        const user = await User.findById(req.isAuth)
            .select('-password -weights')
            .exec();

        res.status(200).json({ user: user.toObject({ getters: true }) });
    } catch (err) {
        console.log(err);
    }
};

export const putProfileInfo = async (req, res, next) => {
    // * not authenticated
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }
    const { errors } = validationResult(req);
    const userInfo = req.body;
    // * Check if there are any validation errors
    if (errors.length > 0) {
        return next(new HttpError(`${errors[0].param} has ${errors[0].msg}`));
    }

    // * check if password was request to be changed
    if (userInfo.currentPassword && userInfo.newPassword) {
        // * check if current password match the stored password
        if (
            !(await bcrypt.compare(userInfo.currentPassword, req.user.password))
        ) {
            return next(new HttpError('Invalid password', 403));
        }

        // * hash the new password if > 6 and < 14
        if (
            userInfo.newPassword.length > 6 &&
            userInfo.newPassword.length < 14
        ) {
            req.user.password = await bcrypt.hash(userInfo.newPassword, 12);
        } else {
            return next(new HttpError('Invalid password length', 403));
        }
    }

    // * update the rest of the info
    const { firstName, lastName, email, age } = req.body;

    req.user.firstName = firstName;
    req.user.lastName = lastName;
    req.user.email = email;
    req.user.age = age;

    // * save changes
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

    // ? Could be meaningless code - instead of fetching check on req.user
    const fetchedUser = await User.findById(req.isAuth).exec();

    if (!fetchedUser) {
        return next(new HttpError('Failed to find user'), 404);
    }

    // * check if there are no goals set already
    if (!fetchedUser.goal) {
        const newGoal = new Goal({
            userId: req.isAuth,
            calories: 0,
            carbs: 0,
            proteins: 0,
            fats: 0,
            goalWeight: 0,
        });

        // * create a default goal - saves changes in a session
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

// * Updates the macro values for a user - returns updated macros
export const putMacros = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    //* in the case of validation errors
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        return next(new HttpError(`${errors[0].param} has ${errors[0].msg}`));
    }

    //* All was clear
    const { calories, fats, proteins, carbs } = req.body;
    try {
        // * update the goal saved in the db and return to user
        const updatedGoal = await Goal.findOneAndUpdate(
            { userId: req.isAuth },
            {
                calories,
                fats,
                proteins,
                carbs,
            },
            { new: true }
        );

        if (!updatedGoal) {
            return next(new HttpError('Failed to update your goal', 400));
        }

        return res.status(200).json({ goal: updatedGoal });
    } catch (err) {
        console.log(err);
        return next(new HttpError('Something went wrong', 500));
    }
};

//* Fetches the user menu and returns it
export const getMenu = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    try {
        // * Fetch the user's menu and return it
        const fetchedMenu = await Menu.find({ menuCreator: req.isAuth })
            .select('-menuCreator -_id -__v')
            .exec();

        // ! Couldn't find menu in the query - return 404
        if (!fetchedMenu) {
            return next(new HttpError('Failed to find menu', 404));
        }

        return res.status(200).json({ menu: fetchedMenu });
    } catch (err) {
        console.log(err);
        return next(new HttpError('Something went wrong', 500));
    }
};

// * Updates the menu for each new/removed entry - returns the new menu
export const putMenu = async (req, res, next) => {
    if (!req.isAuth) {
        return next(new HttpError('Not Authorized', 401));
    }

    // * Fetch the user's menu from the db, modify and return it
    try {
        const fetchedMenu = await Menu.findOneAndUpdate(
            { menuCreator: req.isAuth },
            { ...req.body },
            { new: true }
        )
            .select('-menuCreator -_id -__v')
            .exec();

        res.status(200).json({ menu: fetchedMenu });
        if (!fetchedMenu) {
            return next(new HttpError('Failed to find menu', 404));
        }
    } catch (err) {
        console.log(err);
        return next(new HttpError('Something went wrong', 500));
    }
};
