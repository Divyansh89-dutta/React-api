import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const Context = (props) => {
    const [user, setUser] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            address: '123 Main St',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            address: '456 Elm St',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            age: 35,
            address: '789 Oak St',
        }
    ]);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Context;
