import express from 'express';
import helmet from 'helmet';
import user from './routes/user/user';
import root from './routes/root';
import { errorLogger, errorResponder, failSafeErrorHandler } from './middlewares/error-handler';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', root);
app.use('/user', user);

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeErrorHandler);

export { app }
