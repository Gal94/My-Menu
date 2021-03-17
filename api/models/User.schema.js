import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        required: [true, 'Email field is required'],
        type: mongoose.Types.String,
    },
    firstName: {
        required: [true, 'First Name field is required'],
        type: mongoose.Types.String,
    },
    lastName: {
        required: [true, 'Last Name field is required'],
        type: mongoose.Types.String,
    },
    password: {
        required: [true, 'Password field is required'],
        type: mongoose.Types.String,
    },
    gender: {
        required: false,
        type: mongoose.Types.String,
        default: 'Unspecified',
    },
    age: {
        required: false,
        type: Date,
    },
    menus: [
        {
            type: mongoose.Types.ObjectId,
            required: false,
            ref: 'Painting',
        },
    ],
    weights: [
        {
            type: mongoose.Types.ObjectId,
            required: false,
            ref: 'Post',
        },
    ],
    resetToken: mongoose.Types.String,
    resetTokenExpiration: Date,
});

export default mongoose.model('User', userSchema);
