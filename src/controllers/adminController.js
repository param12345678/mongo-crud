// src/controllers/userController.js
import { _createRole, login, _getProfile, _forgotPassword } from '../services/adminService';



export const adminLogin = async (req, res) => {
    try {
        const data = await login(req.body);
        res.status(200).send({ message: 'Login successful', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const createRole = async (req, res) => {
    try {
        const data = await _createRole(req.body);
        res.status(200).send({ message: 'Role create successful', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const data = await _forgotPassword(req.body);
        res.status(200).send({ message: 'Link sent to your email udpate password .', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const getProfile = async (req, res) => {
    try {
        const data = await _getProfile(req);
        res.status(200).send({ message: 'get profile success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

// export const forgotPassword = async (req, res, next) => {
//     try {
//         const { email } = req.body;
//         const result = await forgotPassword(email);
//         res.status(200).json({ message: result });
//     } catch (error) {
//         next(error);
//     }
// };
