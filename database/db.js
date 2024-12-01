import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/job-portal';
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database', error.message);
    }
}

export default dbConnection;