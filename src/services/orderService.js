import Order from '../models/Order';

export const create = async (req, body) => {
    try {
        const userId = req.decoded.userId
        const { totalAmount, productId } = body;
        const order = new Order({ totalAmount, userId, productId });
        await order.save();
        return order;
    } catch (err) {
        throw err;
    }
};


export const _getOrders = async () => {
    try {
        const orders = await Order.find()
        return orders;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

export const _getOrderById = async (orderId) => {
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            throw 'Order not found';
        }
        return order;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

export const _updateOrder = async (orderId, updatedData) => {
    try {
        // Use findByIdAndUpdate to find the product by ID and update the fields
        const order = await Order.findByIdAndUpdate(
            orderId,
            {
                $set: updatedData,
            },
            {
                new: true, // Return the modified document rather than the original
                runValidators: true, // Run validators to ensure the updated data is valid
            }
        );

        if (!order) {
            throw 'Order not found';
        }
        return order;
    } catch (err) {
        console.log("error: ", err);
        throw err;
    }
};

export const _deleteOrder = async (productId) => {
    try {
        const product = await Order.findByIdAndDelete(productId);

        if (!product) {
            throw 'Product not found';
        }
        return product;
    } catch (err) {
        console.log("error: ", err);
        throw err;
    }
};