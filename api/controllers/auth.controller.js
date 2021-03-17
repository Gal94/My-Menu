import bcrypt from 'bcrypt';
import User from '../models/User.schema';

export const postRegister = async (req, res, next) => {
    const { email, password, firstName, lastName, gender, age } = req.body;
};
