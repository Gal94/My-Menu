import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/*
    mg:
        sodium, potassium, cholesterol
*/

const menuSchema = new Schema({
    menuName: {
        required: 'Menu Name field is required',
        type: String,
    },
    menuCreator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    breakfast: [{}],
    lunch: [{}],
    dinner: [{}],
    snacks: [{}],
    totalSugars: {
        default: 0,
        type: Number,
    },
    totalFibers: {
        default: 0,
        type: Number,
    },
    totalSodium: {
        default: 0,
        type: Number,
    },
    totalPotassium: {
        default: 0,
        type: Number,
    },
    totalSaturatedFat: {
        default: 0,
        type: Number,
    },
    totalCalories: {
        default: 0,
        type: Number,
    },
    totalCholesterol: {
        default: 0,
        type: Number,
    },
    totalProtein: {
        default: 0,
        type: Number,
    },
    totalCarbs: {
        default: 0,
        type: Number,
    },
});

export default mongoose.model('Menu', menuSchema);
