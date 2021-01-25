import React, { createContext, useState, useContext } from 'react';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    const { user, setUser } = context;
    return { user, setUser };
}

export default UserProvider;