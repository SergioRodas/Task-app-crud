import { connect } from 'mongoose';
import { MONGODB_URI } from './config';


export const connectDB = async () => {
    try {
        const db = await connect(MONGODB_URI);
        console.log('DB is connected to', db.connection.host)
    } catch (error) {
        console.error(error);
    }

}