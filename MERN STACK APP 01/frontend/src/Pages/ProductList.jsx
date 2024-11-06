import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await deleteProduct(id);
                fetchProducts(); // Refresh the list after deletion
            } catch (error) {
                console.error("Error deleting product", error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Product List</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>Price:</strong> Rs.{product.price}</p>
                                <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="btn btn-danger w-100 mt-2"
                                >
                                    Delete
                                </button>
                                <Link to={`/edit/${product._id}`} className="btn btn-warning w-100 mt-2">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
