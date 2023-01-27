import { signOut } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { auth } from '../utils/firebase';
const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="navbar">
            <span className="logo-nav">Smart Farming</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick = {()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar;