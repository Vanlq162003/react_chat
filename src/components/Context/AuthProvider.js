import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';




export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;

                setUser({ displayName, email, uid, photoURL, });
                setIsLoading(false);
                
                // Nếu đã xác thực thành công, điều hướng đến trang /home
                navigate('/home');
                
            }else {
                setIsLoading(false);
                navigate('/');
              }
        });
       

        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
