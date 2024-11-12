require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/db');
const cors = require("cors");
const productController = require('./Controllers/productController');
const userController = require('./Controllers/userController');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type"], 
};

app.use(cors(corsOptions));


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

// user routes
app.post('/api/users', userController.createUser);
app.get('/api/users', userController.getUsers);
app.get('/api/users/:id', userController.getUserById);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);
app.post('/api/users/login', userController.loginUser);
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
