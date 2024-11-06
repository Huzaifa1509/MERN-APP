import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import AddProduct from './Pages/AddProduct';
import ProductList from './Pages/ProductList';
import UpdateProduct from './Pages/UpdateProduct'; // Import UpdateProduct

function App() {
    return (
        <Router>
            <Nav />
            <div style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
