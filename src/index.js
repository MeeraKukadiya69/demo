import React from 'react';
import ReactDOM from 'react-dom/client';
// import Insertapi from './Insertapi';
import Getapi from './Getapi';
import Edit from './Edit';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Login from './Login';

import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import Contact from './Contact';
import Electronics from './Electronic';
import Shop from './Shop';
import Sports from './Sports';
import Men2 from './Men2';
import Sale from './Sale';
import Women from './Women';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Getapi />} /> */}
                <Route path="/" element={<Homepage />} />
                {/* <Route path="edit/:id" element={<Edit />} /> */}
                {/* <Login/> */}
                <Route path="/login" element={<Login />} />
                <Route path="shop" element={<Shop />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="sports" element={<Sports />} />
                <Route path="sale" element={<Sale />} />
                <Route path="contact" element={<Contact />} />
                <Route path="men" element={< Men2 />} />
                <Route path="women" element={<Women />} />
            </Routes>
            <Footer />
        </BrowserRouter>


        {/* <Insertapi /> */}

    </>
);


