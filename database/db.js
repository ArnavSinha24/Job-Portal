import mongoose from 'mongoose'

const dbConnection = async (DB_URI) => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message)
    }
}

export default dbConnection;