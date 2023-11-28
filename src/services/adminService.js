import User from '../models/User';
import Admin from '../models/Admin';
import bcrypt from 'bcrypt';
import { createToken } from '../middlewares/token';
import { sendPasswordResetEmail } from '../utils/emailService';
import Role from '../models/Role';

export const signUp = async (body) => {

    try {
        const { username, email, password } = body;
        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            throw 'USER_ALREADY_EXIST';
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        return user;
    } catch (err) {
        throw err;
    }
};
export const _createRole = async (body) => {

    try {
        const { name, slug, } = body;
        const role = new Role({ name, slug, });
        await role.save();
        return role;
    } catch (err) {
        throw err;
    }
};


export const login = async ({ email, password }) => {
    try {
        const user = await Admin.findOne({ email });
        if (!user) {
            throw ('Invalid email');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        const tData = { userId: user._id, email: user.email }

        if (!isPasswordValid) {
            throw ('Invalid password');
        }

        const token = createToken(tData);
        return { user, token };
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};
export const _forgotPassword = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw ('Invalid email');
        }

        const resetLink = 'http://your-website.com/reset-password/';
        // Send the password reset email
        await sendPasswordResetEmail(user, resetLink);
        return user;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

export const _getProfile = async (req) => {
    try {
        const id = req.decoded.userId
        const user = await User.findById(id);
        if (!user) {
            throw 'No user found'
        }
        return user;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

