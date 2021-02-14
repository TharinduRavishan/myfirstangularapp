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

    // Delete user by Id
    async deleteBook(req, res) {
      try {
        const deletedBook = await Book.findByIdAndRemove(req.query.id);
        if (deletedBook) {
          return res.send({ message: SUCCESS });
        } else {
          return res.send({ message: FAILED });
        }
      } catch (error) {
        return res.status(500).send(error);
      }
    },

      // Update book
  async updateBook(req, res) {
    try {
      const book = {
        name: req.body.name,
        price: req.body.price,
      };
      const updatedBook = await Book.findOneAndUpdate(
        { _id: req.body._id },
        book,
        { new: true }
      );
      if (updatedBook) {
        return res.send({ message: SUCCESS, data: updatedBook });
      } else {
        return res.send({ message: FAILED });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
