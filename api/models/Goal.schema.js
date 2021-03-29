import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// One to One relationship, each user has 1 goal, each goal has 1 user.
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
    goalWeight: {
        type: Number,
    }
});

export default mongoose.model('Goal', goalSchema);
