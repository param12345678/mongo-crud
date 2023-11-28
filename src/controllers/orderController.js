// src/controllers/userController.js
import { signUp, login, _getProfile, _forgotPassword, updateProfile } from '../services/userService';

export const createUser = async (req, res) => {
    /*
    #swagger.tags = ["User"]
    #swagger.description = 'Register'
    #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Register user',
    schema: { $ref: '#/definitions/Register' }
    }
    */
    try {
        const data = await signUp(req.body);
        res.status(201).send({ message: 'User created successfully', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const userLogin = async (req, res) => {
    try {
        const data = await login(req.body);
        res.status(200).send({ message: 'Login successful', data: data });
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
export const updateUserProfile = async (req, res) => {
    try {
        const data = await updateProfile(req.params.id, req.body);
        res.status(200).send({ message: 'Profile udpate success', data: data });
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
