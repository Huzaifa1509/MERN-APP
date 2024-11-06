const Product = require('../Models/Product');

// Create a product
const createProduct = async (req, res) => {
    try {
        const { name } = req.body;
        
        // Check if the product already exists
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(409).json({ message: "Product already exists" });
        }
        
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        
        // Check if another product with the same name exists
        const existingProduct = await Product.findOne({ name, _id: { $ne: id } });
        if (existingProduct) {
            return res.status(409).json({ message: "Product name already in use by another product" });
        }

        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
