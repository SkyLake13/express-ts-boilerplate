import express from 'express';
import { comment } from './comment';
import { root } from './root';
import { user } from './user';


const routes = express.Router();
routes.use('/', root);
routes.use('/user', user);
routes.use('/comment', comment);

export { routes }