import { Schema, model } from 'mongoose';

const schema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
    }
}, {
    timestamp: true,
    versionKey: false
});

export default model('Note', schema);