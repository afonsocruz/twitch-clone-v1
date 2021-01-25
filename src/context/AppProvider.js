import { createContext, useState, useEffect } from 'react';
import firebase from 'firebase';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(firebase.auth().currentUser);
    
    useEffect(() => {
        const unsubscribe = firebase.auth()
            .onAuthStateChanged((user) => setUserAuth(user))
        return () => {
            unsubscribe()
        };
    }, [])

    const value = { userAuth };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;