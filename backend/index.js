import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBUrl } from './config.js';

const app = express();

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

// GET 
app.get('/', (req, res) => {
    console.log('req => ', req);
    return res.status(235).send('Welcome to MERN Stack');
});
