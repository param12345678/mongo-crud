// src/services/userService.js
import User from '../models/User';
import bcrypt from 'bcrypt';
import { createToken } from '../middlewares/token';
import { sendPasswordResetEmail } from '../utils/emailService';
import Role from '../models/Role';

export const signUp = async (body) => {

    try {
        const { username, email, password, role } = body;
        const existingUser = await User.findOne({ email });
        // const existingUser = await User.findOne({ email }).populate('roleId');
        console.log("existingUser", existingUser)
        if (existingUser) {
            throw 'USER_ALREADY_EXIST';
        }
        const exitingRole = await Role.findOne({ name: role.toLowerCase() });
        if (!exitingRole) {
            throw 'NO Role exists';
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, roleId: exitingRole._id });
        await user.save();
        return user;
    } catch (err) {
        throw err;
    }
};


export const login = async ({ email, password }) => {
    try {

        const user = await User.findOne({ email })
            .populate({
                path: 'roleId',
                select: 'name', // Specify the fields you want to select
            });
        if (!user) {
            throw ('Invalid email');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        const tData = { userId: user._id, email: user.email, role: user.roleId.name }

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

export const updateProfile = async (userId, updatedData) => {
    try {
        console.log("userId: ", userId);
        // Use findByIdAndUpdate to find the user by ID and update the fields
        const user = await User.findByIdAndUpdate(
            userId,
            {
                $set: updatedData,
            },
            {
                new: true, // Return the modified document rather than the original
                runValidators: true, // Run validators to ensure the updated data is valid
                upsert: true,
            }
        );

        if (!user) {
            throw 'USER_NOT_FOUND';
        }
        return user;
    } catch (err) {
        throw err;
    }
};



