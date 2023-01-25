import CommunityHome from './CommunityHome';
import Login from './Login';
import React from 'react'
import Register from './Register';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Community = () =>{
    const { currentUser } = React.useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
        return <Navigate to="/login" />;
      }
  
      return children
    };
  
    return (
      <BrowserRouter>
        <Routes>
          
            <Route
              index
              element={
                <ProtectedRoute>
                  <CommunityHome />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    );
}
export default Community;