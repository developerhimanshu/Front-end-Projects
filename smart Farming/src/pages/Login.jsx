import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Smart Farming</span>
                <span className="title">Sign in</span>
                <form >
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>Do you don't have an account?<Link to ="/community/register">Register</Link></p>
            </div>
        </div>
    )
}
export default Login;