import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { authRouter } from './routes/auth.routes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    console.log('here');
    res.send('success');
});

// Log only errors
// app.use(
//     morgan('combined', {
//         skip: (req, res) => {
//             return res.statusCode < 400;
//         },
//     })
// );

app.use((err, req, res, next) => {
    // Delete the file if is in the request
    if (req.file) {
        fs.unlink(req.file.path, () => {
            //Failed to delete file
        });
    }
    if (res.headerSent) {
        return next(error);
    }

    res.status(err.errorCode || 500);
    res.json({
        message: err.message || 'An unknown error has occurred.',
    });
});

// Connect to mongoose and boot up server
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFineAndModify: true,
    })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is listening on port 5000');
        });
    });
