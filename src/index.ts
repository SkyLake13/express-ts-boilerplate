import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
dotenv.config();

import user from './routes/user';

const PORT = 3000;

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/user', user);

//Root endpoint
app.get('/', (_req, res) => {
    res.status(200).send('Hello there !!!');
});

app.listen(PORT, () => console.log(`app started at port ${PORT}`));
