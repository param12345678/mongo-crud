import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', }],
    totalAmount: Number,
    customerName: String,
    // You can add more fields as needed
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
