import React from "react";
import Subpage2 from "./Subpage2";
// import Men2 from "./Men2";
// import Subpage from "./Subpage";
// import List from "./List";
import Product2 from "./Product2";
import { TiThLarge } from "react-icons/ti";
import { IoCaretDownSharp } from "react-icons/io5";
import { FaList, FaAngleDown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";

const Shop = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="inner-main">
                        <div className="options">
                            <div className="option-inner">
                                <Subpage2 name="Home" /><RxSlash className="slash"/>
                                <Subpage2 name="Shop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="block-main">
                <div className="container">
                    <div className="block-inner-main">
                        <div className="block-child">
                            <div className="block-inner-child1">
                                <div className="block-text">
                                    <p className="m">Shop</p>
                                    <ul className="inner">
                                        <li className="p">
                                            <Link to="/fashion">Fashion</Link>
                                            <GoPlus className="plus1" />

                                        </li>
                                        <li className="p">
                                            <Link to="/jewellery">Jewellery</Link>
                                            <GoPlus className="plus2" />
                                        </li>
                                        <li className="p">
                                            <Link to="/furniture">Furniture</Link>

                                            <GoPlus className="plus2" />
                                        </li>
                                        <li className="p">
                                            <Link to="/autoparts">Autoparts</Link>

                                            <GoPlus className="plus" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="block-text">
                                    <p className="m">Filter By</p>
                                    <ul className="inner">
                                        <li className="p">
                                            <Link to="/fashion">Categories</Link>
                                            <FaAngleDown className="d1" />
                                        </li>
                                        <li className="p">
                                            <Link to="/jewellery">Brands</Link>
                                            <FaAngleDown className="d2" />
                                        </li>
                                        <li className="p">
                                            <Link to="/furniture">Price</Link>
                                            <FaAngleDown className="d3" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="block-img">
                                    <img src="image/advertising.jpg" alt="" />
                                </div>
                            </div>
                            <div className="block-inner-child2">
                                <div className="block-child-content">
                                    <div className="block-inner-child-content">
                                        <div className="block-image">
                                            <img src="image/Men.png" alt="" />
                                        </div>
                                        <div className="block-description">
                                            <h2>
                                                Shop
                                            </h2>
                                            <p className="des">
                                                Ut enim ad minim veniam. quis nosturd exercitation ullamco laboris nisi ut aliquip ex ea commodo conssequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-inner-main">
                                    <div className="">
                                        <div className="product-list">
                                            <div className="product-inner-list1">
                                                <div className="product-mode">
                                                    <span className="grid">
                                                        <TiThLarge className="large" />
                                                    </span>
                                                    <span className="list">
                                                        <FaList />
                                                    </span>
                                                </div>
                                                <div className="product-text">
                                                    <p>There are 16 products.</p>
                                                </div>
                                            </div>
                                            <div className="product-inner-list2">
                                                <div className="sort">
                                                    <div className="sort-inner">
                                                        <span>Sort by:</span>
                                                    </div>
                                                    <div className="sort-drop-down">
                                                        <button className="btn">Relevence
                                                            <IoCaretDownSharp className="sort-down" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-men-inner">
                                    <div className="product-men-child">
                                        <Product2 path="image/p4.jpg" p_name="Perspiciate Unde" price="$99.00" />
                                        <Product2 path="image/p7.jpg" p_name="Omnis Iste" price="$199.00" />
                                        <Product2 path="image/p9.jpg" p_name="Accusantium Dolore" price="$299.00" />
                                        <Product2 path="image/p5.jpg" p_name="Rem Aperiam" price="$249.00" />
                                        <Product2 path="image/p11.jpg" p_name="Adipsci Velit" price="$289.00" />
                                        <Product2 path="image/p6.jpg" p_name="Numquam Eius" price="$279.00" />
                                        <Product2 path="image/p8.jpg" p_name="Modi Tempora" price="$349.00" />
                                        <Product2 path="image/p10.jpg" p_name="Dolore Magnam" price="$399.00" />
                                        <Product2 path="image/p1.jpg" p_name="Voluptas Nulla" price="$389.00" />
                                        <Product2 path="image/p12.jpg" p_name="Iura Reprehenderit" price="$379.00" />
                                        <Product2 path="image/p2.jpg" p_name="Porro Quisquam" price="$319.00" />
                                        <Product2 path="image/p3.jpg" p_name="Architecto Beatae" price="$359.00" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Shop;