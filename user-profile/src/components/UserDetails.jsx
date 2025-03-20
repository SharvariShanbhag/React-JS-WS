import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [id]);

    if (!user) return <div className="spinner"></div>;

    return (
        <div className="user-details">
            <h2>User Details</h2>
            <div className="user-card">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User" className="user-img"/>
                <div className="user-info">
                    <h3>{user.name}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                    <p className="updated-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
