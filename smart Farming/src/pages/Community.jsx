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
        return <Navigate to="/community/login" />;
      }
  
      return children
    };
  
    return (
        <Routes>
            <Route
              path='community/home'
              element={
                <ProtectedRoute>
                  <CommunityHome />
                </ProtectedRoute>
              }
            />
            <Route path="/community/login" element={<Login />} />
            <Route path="/community/register" element={<Register />} />  
        </Routes>
    );
}
export default Community;