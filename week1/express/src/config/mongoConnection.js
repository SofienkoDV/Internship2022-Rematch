import mongoose from 'mongoose';

const URL = 'mongodb+srv://Admin:Den055037@cluster0.e5xbnau.mongodb.net/blog?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error', error);
    }
}

export default connect;
