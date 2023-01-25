import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Community from "./pages/Community";
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { AuthContextProvider } from "./context/AuthContext";

export default function Navigation(){
    return(       
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element ={<Home/>}/>  
                <Route path="/about" element ={<About/>}/>
               
                    <Route path="/community">
                        <Route index element ={<Community/>}/>
                        <Route path="login" element = {<Login/>}/>
                        <Route path = "register" element = {<Register/>} />
                    </Route>
            
                <Route path="/contact" element ={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}