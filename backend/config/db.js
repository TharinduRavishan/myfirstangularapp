import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default {

    connect() {
        mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
    }
}