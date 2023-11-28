import express from 'express'
const router = express.Router();


import user from './userRoutes';
import admin from './adminRoutes';
import product from './productRoutes';
import order from './orderRoutes';


router.use('/user', user);
router.use('/admin', admin);
router.use('/product', product);
router.use('/order', order);


module.exports = router