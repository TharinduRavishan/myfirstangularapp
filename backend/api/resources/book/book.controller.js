import Book from './book.model';
const SUCCESS = 'SUCCESS';

export default {
  // Create a user
  async createBook(req, res) {
    try {
      const book = await Book.create(req.body);
      return res.send({ message: SUCCESS, data: book });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  // Get all users
  async findBooks(req, res) {
    try {
      const books = await Book.find();
      return res.send({ message: SUCCESS, data: books });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
