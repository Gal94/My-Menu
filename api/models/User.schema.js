import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email field is required',
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
        required: 'Password field is required',
    },
    gender: {
        required: false,
        type: String,
        default: 'Unspecified',
    },
    age: {
        required: false,
        type: Number,
    },
    joined: {
        type: Date,
        default: Date.now,
    },
    menus: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Menu',
        },
    ],
    weights: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Weight',
        },
    ],
    resetToken: String,
    resetTokenExpiration: Date,
});

export default mongoose.model('User', userSchema);
