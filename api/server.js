import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { authRouter } from './routes/auth.routes.js';

const app = express();
dotenv.config();
app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log(process.env.MONGO_URI);
// Log only errors
app.use(
    morgan('combined', {
        skip: (req, res) => {
            return res.statusCode < 400;
        },
    })
);

// Connect to mongoose and boot up server
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFineAndModify: true,
    })
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server is listening on port 5000');
        });
    });
