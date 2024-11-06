require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/db');
const cors = require("cors");
const productController = require('./Controllers/productController');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from the frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow all CRUD methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
};

app.use(cors(corsOptions)); // Apply CORS globally


// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.post('/api/products', productController.createProduct);
app.get('/api/products', productController.getProducts);
app.get('/api/products/:id', productController.getProductById);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProduct);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
