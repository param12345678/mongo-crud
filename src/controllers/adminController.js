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
