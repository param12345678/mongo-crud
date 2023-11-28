import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    slug: String
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);

export default Role;