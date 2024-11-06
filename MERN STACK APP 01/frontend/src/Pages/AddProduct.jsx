import React, { useState } from 'react';
import { createProduct } from '../api';

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        stock: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
        console.log(productData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(productData);
            alert('Product added successfully!');
            setProductData({ name: '', description: '', price: '', stock: '' });
        } catch (error) {
            alert('Failed to add product');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={productData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={productData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={productData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="number" name="stock" value={productData.stock} onChange={handleChange} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
