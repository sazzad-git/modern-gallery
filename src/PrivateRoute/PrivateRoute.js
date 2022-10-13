import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();
    if(isLoading){
        return <div className='text-center'><Spinner className='text-center' animation="border" variant="danger" /></div>
    }

  if (user?.displayName) {
      return children;
  }

  return <Navigate to="/login" state={{ from: location }
  } replace />;
};

export default PrivateRoute;