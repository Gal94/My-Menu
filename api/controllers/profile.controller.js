import User from '../models/User.schema.js';
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
