import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: Number,
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: null,
    },
});

const User = mongoose.model('User', userSchema);

export default User;
