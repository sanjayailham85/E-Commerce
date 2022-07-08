import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import AllDevices from '../pages/AllDevices'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import DevicesDetails from '../pages/DevicesDetails'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/devices" element={<AllDevices/>}/>
        <Route path="/devices/:id" element={<DevicesDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    );
};

export default Routers;

