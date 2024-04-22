import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBUrl } from './config.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

// json middleware
app.use(express.json());

// GET 
app.get('/', (req, res) => {
    console.log('req => ', req);
    return res.status(235).send({
        message: 'Welcome to MERN Stack'
    });
});

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBUrl)
    .then( () => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log('Server listening on port:', PORT);
        });
    })
    .catch( error => {
        console.log(error);
    })
