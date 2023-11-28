// src/routes/userRoutes.js
import express from 'express';
import { createUser, forgotPassword, getProfile, updateUserProfile, userLogin } from '../controllers/userController';
import validate from '../middlewares/validator';
import { signUpValidation, loginValidation } from '../middlewares/userValidator';
import { verifyToken } from '../middlewares/token';

const router = express.Router();

router.post('/signup', signUpValidation, validate, createUser);
router.post('/login', loginValidation, validate, userLogin);
router.get('/profile', verifyToken, getProfile);
router.post('/forgotpassword', forgotPassword);
router.put('/updateProfile/:id', updateUserProfile);
// router.get('/', getUsers);

export default router;
