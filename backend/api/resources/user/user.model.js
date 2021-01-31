import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  school: {
    type: String,
  },
});

export default mongoose.model('User', userSchema);
