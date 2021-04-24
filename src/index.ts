import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import userManager from './userManager';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
    res.status(200).send('Hello there !!!');
});

app.use('/user', userManager);

app.listen(PORT, () => console.log(`app started at port ${PORT}`));
