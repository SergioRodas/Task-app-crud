import { schema, model } from 'mongoose';

const noteSchema = new schema ({
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

export default model('Note', noteSchema);