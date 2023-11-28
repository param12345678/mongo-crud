import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({

    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', default: null, },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null,
    },
    totalAmount: Number,
    customerName: String,
    // You can add more fields as needed
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
