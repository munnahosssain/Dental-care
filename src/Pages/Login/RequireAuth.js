import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" replace state={{ path: location.pathname }} />
    }
    return children;
};

export default RequireAuth;