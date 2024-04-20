import express from 'express';
import { PORT } from './config.js';

const app = express();

// GET 
app.get('/', (req, res) => {
    console.log('req => ', req);
    return res.status(235).send('Welcome to MERN Stack');
});

app.listen(PORT, () => {
    console.log('Server listening on port:', PORT);
});