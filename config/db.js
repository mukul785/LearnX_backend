import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('Attempting MongoDB connection...');
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority'
        });
        
        console.log('MongoDB Connected:', conn.connection.host);
    } catch (err) {
        console.error('MongoDB connection error:', {
            message: err.message,
            code: err.code,
            reason: err.reason
        });
        process.exit(1);
    }
};

export default connectDB;