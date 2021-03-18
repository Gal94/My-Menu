import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weightSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    weight: {
        type: Number,
        required: 'Weight field is required',
    },
});

export default mongoose.model('Weight', weightSchema);
