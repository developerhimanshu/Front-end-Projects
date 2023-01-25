import { signOut } from 'firebase/auth';
import React from 'react';

import { auth } from '../utils/firebase';
const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo-nav">Smart Farming</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CbwDcWn1kGCGngSeafTlNJIlZwIbTipg60eo-_yAeA&s" alt="" />
                <span>John</span>
                <button onClick = {()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar;