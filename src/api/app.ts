import express from 'express';
import helmet from 'helmet';
import { routes } from './routes';
import { errorLogger, errorResponder, failSafeErrorHandler } from './middlewares/error-handler';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeErrorHandler);

export default app;
