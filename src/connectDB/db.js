// src/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DBURL);

        console.log('Connected to MongoDB',);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with a failure code
    }
};

export default connectDB;
