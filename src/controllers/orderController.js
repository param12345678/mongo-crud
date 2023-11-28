// src/controllers/userController.js
import { create, _getOrders, _getOrderById, _updateOrder, _deleteOrder } from '../services/orderService';

export const createOrder = async (req, res) => {
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
        res.status(201).send({ message: 'Order created successfully', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

export const getOrders = async (req, res) => {
    try {
        const data = await _getOrders(req.body);
        res.status(200).send({ message: 'Get Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const getOrderById = async (req, res) => {
    try {
        const data = await _getOrderById(req.params.id);
        res.status(200).send({ message: 'Get Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const updateOrderById = async (req, res) => {
    try {
        const data = await _updateOrder(req.params.id, req.body);
        res.status(200).send({ message: 'Update Proudcts success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};
export const deleteOrderById = async (req, res) => {
    try {
        const data = await _deleteOrder(req.params.id);
        res.status(200).send({ message: 'Order delete success', data: data });
    } catch (error) {
        res.status(400).send({ error, });
    }
};

