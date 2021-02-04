import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model('Book', bookSchema);
