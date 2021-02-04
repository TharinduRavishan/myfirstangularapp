import express from 'express';
import { userRouter } from './resources/user';
import { bookRouter } from './resources/book';

export const restRouter = express.Router();

restRouter.use('/user', userRouter);
restRouter.use('/book', bookRouter);
