import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Context';

const UserDetails = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const { user } = useContext(UserContext); // Access the user context
    const navigate = useNavigate(); // Hook for navigation

    // Find the current user based on the ID from the URL
    const currentUser = user.find((item) => item.id === parseInt(id));

    return (
        <div className="container mx-auto p-6">
            <button
                onClick={() => navigate(-1)} // Go back to the previous page
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Back
            </button>
            {currentUser ? (
                <>
                    <h2 className='text-2xl font-semibold'>User Details</h2>
                    <p className='mt-2'>Name: {currentUser.name}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Address: {currentUser.address}</p>
                </>
            ) : (
                <p className='text-red-500'>User not found.</p>
            )}
        </div>
    );
}

export default UserDetails;
