import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Auth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    }, [navigate]);
    return <WrappedComponent {...props} />;
  };
}

export default Auth