// src/controllers/userController.js
import { create, _getProducts, _getProfile, _forgotPassword, updateProfile, _getProductById, _updateProduct, _deleteProduct } from '../services/productService';

export const createProduct = async (req, res) => {
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
        const data = await create(req, req.body);
        res.status(201).send({ message: 'Product created successfully', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const getProducts = async (req, res) => {
    try {
        const data = await _getProducts(req.body);
        res.status(200).send({ message: 'Get Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const getProductById = async (req, res) => {
    try {
        const data = await _getProductById(req.params.id);
        res.status(200).send({ message: 'Get Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const updateProductById = async (req, res) => {
    try {
        const data = await _updateProduct(req.params.id, req.body);
        res.status(200).send({ message: 'Update Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const deleteProductById = async (req, res) => {
    try {
        const data = await _deleteProduct(req.params.id);
        res.status(200).send({ message: 'Proudcts delete success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

