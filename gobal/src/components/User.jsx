import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Context';

const User = () => {
    const { user } = useContext(UserContext); // Destructure user from context

    return (
        <div className="container mx-auto p-6">
            <h1 className='text-2xl font-semibold font-mono'>User List</h1>
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {user.map((item) => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-gray-700">Email: {item.email}</p>
                        <p className="text-gray-700">Age: {item.age}</p>
                        <p className="text-gray-700">Address: {item.address}</p>
                        <Link 
                            to={`/user/${item.id}`} 
                            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;
