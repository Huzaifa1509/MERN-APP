import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api';  // Import API functions
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the users when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                toast.error('Failed to fetch users');
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // Function to delete a user
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            toast.success('User deleted successfully');
            setUsers(users.filter(user => user._id !== id)); // Remove the user from the list
        } catch (error) {
            toast.error('Failed to delete user');
            console.error('Error deleting user:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">User List</h2>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    <Link to={`/edituser/${user._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
