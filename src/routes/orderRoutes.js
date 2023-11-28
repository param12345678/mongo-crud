// src/routes/userRoutes.js
import express from 'express';
import validate from '../middlewares/validator';
import { loginValidation } from '../middlewares/userValidator';
import { adminLogin } from '../controllers/adminController';
import { verifyToken } from '../middlewares/token';
import { createOrder, deleteOrderById, getOrderById, getOrders, updateOrderById } from '../controllers/orderController';


const router = express.Router();

router.post('/create', verifyToken, createOrder);
router.get('/', verifyToken, getOrders,);
router.get('/:id', verifyToken, getOrderById,);
router.put('/update/:id', verifyToken, updateOrderById);
router.delete('/:id', verifyToken, deleteOrderById);

// router.get('/', adminToken, getProducts);
// router.get('/:id', adminToken, getProductById);


export default router;
