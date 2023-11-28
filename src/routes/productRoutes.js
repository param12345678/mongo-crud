// src/routes/userRoutes.js
import express from 'express';
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/productController';
import { adminToken } from '../middlewares/token';



const router = express.Router();
router.post('/create', adminToken, createProduct);
router.get('/', adminToken, getProducts);
router.get('/:id', adminToken, getProductById);
router.put('/update/:id', adminToken, updateProductById);
router.delete('/:id', adminToken, deleteProductById);



export default router;
