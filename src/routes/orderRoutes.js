// src/routes/userRoutes.js
import express from 'express';
import validate from '../middlewares/validator';
import { loginValidation } from '../middlewares/userValidator';
import { adminLogin } from '../controllers/adminController';


const router = express.Router();

router.post('/login', loginValidation, validate, adminLogin);


export default router;
