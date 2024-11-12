import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../api';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        role: '',
        password: '',
        status: ''
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserById(id);
                setUserData(response.data);
            } catch (error) {
                toast.error('Failed to fetch user details');
            }
        };
        fetchUser();
    }, [id]);

    const [password, setPassword] = useState(""); // Get user ID from URL params

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Regex to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex to validate name format (allows only letters, spaces, and hyphens)
    const nameRegex = /^[a-zA-Z\s-]+$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Name validation
        if (userData.name && !nameRegex.test(userData.name)) {
            return toast.error('Invalid name. Only letters, spaces, and hyphens are allowed.');
        }

        // Email validation
        if (userData.email && !emailRegex.test(userData.email)) {
            return toast.error('Invalid email format.');
        }

        // Password validation: minimum 8 characters, with at least one letter and one number
        if (userData.password && (userData.password.length < 8 || !/\d/.test(userData.password) || !/[a-zA-Z]/.test(userData.password))) {
            return toast.error('Password must be at least 8 characters long and contain both letters and numbers.');
        }

        try {
            await updateUser(id, userData);  // Call the API to update user data
            toast.success('User updated successfully!');
            navigate('/users');  // Redirect back to user list
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error('Email or username is already in use');
            } else {
                toast.error('Failed to update user');
            }
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Edit User</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={userData.role}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter role"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"  // Use text type to allow showing errors
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter password (leave empty if unchanged)"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="status">Status:</label>
                    <select
                        name="status"
                        value={userData.status}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
