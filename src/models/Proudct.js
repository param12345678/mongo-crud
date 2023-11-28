import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null,
    },

    // You can add more fields as needed
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
