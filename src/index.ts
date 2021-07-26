import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

dotenv.config();

import user from './routes/user';
import root from './routes/root';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', root);
app.use('/user', user);

const port = (process.env as any).PORT;

app.listen(port, () => console.log(`app started at port ${port}`));
