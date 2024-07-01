import React from "react";
import Image from './Image';
import Category from './Category';
import Homeimage from './Homeimage';
import Product from './Product';
import Home from './Home';
import Collection from './Collection';
import Brand from './Brand';

const Homepage = () => {
    return (
        <>
            <Image />
            <Category />
            <Homeimage />
            <Product />
            <Home />
            <Collection />
            <Brand />

        </>
    );
}

export default Homepage;