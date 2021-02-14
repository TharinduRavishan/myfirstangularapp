import express from 'express';
import bookController from './book.controller';

export const bookRouter = express.Router();

bookRouter.route('/').post(bookController.createBook);
bookRouter.route('/').put(bookController.updateBook);
bookRouter.route('/').delete(bookController.deleteBook);

bookRouter.route('/all').get(bookController.findBooks);
