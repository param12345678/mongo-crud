import Product from '../models/Proudct';

export const create = async (req, body) => {
    try {

        const createdBy = req.decoded.userId
        const { name, description, price } = body;
        const product = new Product({ name, description, price, createdBy: createdBy });
        await product.save();
        return product;
    } catch (err) {
        throw err;
    }
};


export const _getProducts = async () => {
    try {
        const products = await Product.find()
        return products;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

export const _getProductById = async (productId) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            throw 'Product not found';
        }
        return product;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
};

export const _updateProduct = async (productId, updatedData) => {
    try {
        // Use findByIdAndUpdate to find the product by ID and update the fields
        const product = await Product.findByIdAndUpdate(
            productId,
            {
                $set: updatedData,
            },
            {
                new: true, // Return the modified document rather than the original
                runValidators: true, // Run validators to ensure the updated data is valid
            }
        );

        if (!product) {
            throw 'Product not found';
        }
        return product;
    } catch (err) {
        console.log("error: ", err);
        throw err;
    }
};

export const _deleteProduct = async (productId) => {
    try {
        const product = await Product.findByIdAndDelete(productId);

        if (!product) {
            throw 'Product not found';
        }
        return product;
    } catch (err) {
        console.log("error: ", err);
        throw err;
    }
};