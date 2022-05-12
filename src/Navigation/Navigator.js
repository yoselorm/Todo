import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import NavBar from './NavBar';
const Navigator = (props) => {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home userData={props.userData} />} />
                    <Route path='/signup' element={<SignUp addUser={props.addUser} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigator;
