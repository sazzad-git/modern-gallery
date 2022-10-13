import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {user, signInUsingGoogle} = useAuth();

    const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
    return (
        <div className='text-center mt-5'>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary mt-1">Google Sign In</button>
        </div>
    );
};

export default Login;