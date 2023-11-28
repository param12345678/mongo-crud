// src/routes/userRoutes.js
import express from 'express';
import validate from '../middlewares/validator';
import { loginValidation } from '../middlewares/userValidator';
import { adminLogin, createRole } from '../controllers/adminController';


const router = express.Router();

router.post('/login', loginValidation, validate, adminLogin);
router.post('/role', createRole);


export default router;
