import React, { useState } from 'react';
import { createUser } from '../../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        role: '',
        password: ''
    });

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
        if (userData.password.length < 8 || !/\d/.test(userData.password) || !/[a-zA-Z]/.test(userData.password)) {
            return toast.error('Password must be at least 8 characters long and contain both letters and numbers.');
        }

        try {
            await createUser({ ...userData, status: 'active' });  // Always set status to 'active'
            toast.success('User created successfully!');
            navigate('/users');  // Redirect to user list
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error('Email or username is already in use');
            } else {
                toast.error('Failed to create user');
            }
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Add User</h2>
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
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
