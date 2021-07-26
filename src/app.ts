import express from 'express';
import helmet from 'helmet';
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

export { app }
