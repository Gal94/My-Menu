import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    calories: {
        type: Number,
        required: 'Calories field is required',
    },
    carbs: {
        type: Number,
        required: 'Carbs field is required',
    },
    proteins: {
        type: Number,
        required: 'Proteins field is required',
    },
    fats: {
        type: Number,
        required: 'Fats field is required',
    },
});

export default mongoose.model('Goal', goalSchema);
