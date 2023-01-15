import React, {  useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <h3>Loading...</h3>
    }
    if(user && user.uid){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivetRoute;