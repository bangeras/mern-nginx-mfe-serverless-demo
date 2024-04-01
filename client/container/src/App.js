import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import Header from './Header';
import PassportLogin from './PassportLogin';
import Home from './Home';

const App = () => {
    const user = false;
    return (
        <div>
            <BrowserRouter basename='/'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    
                    <Route exact path="/header" element={<Header />} />

                    <Route exact path="/dashboard" element={<Dashboard />} />

                    <Route path="/login" element={<PassportLogin/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App