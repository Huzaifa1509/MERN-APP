import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';
const API_URL_USERS = 'http://localhost:5000/api/users';

export const getProducts = async () => {
    return await axios.get(API_URL);
};

export const createProduct = async (productData) => {
    return await axios.post(API_URL, productData);
};

export const getProductById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const updateProduct = async (id, productData) => {
    return await axios.put(`${API_URL}/${id}`, productData);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};


// for usersF
export const getUsers = async () => {
    return await axios.get(API_URL_USERS);
};

export const createUser = async (userData) => {
    return await axios.post(API_URL_USERS, userData);
};

export const getUserById = async (id) => {
    return await axios.get(`${API_URL_USERS}/${id}`);
};

export const updateUser = async (id, userData) => {
    return await axios.put(`${API_URL_USERS}/${id}`, userData);
};

export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL_USERS}/${id}`);
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL_USERS}/login`, { email, password });
        return response.data;  // Return the response data (typically the token)
    } catch (error) {
        throw error;  // Rethrow error for handling in the component
    }
};