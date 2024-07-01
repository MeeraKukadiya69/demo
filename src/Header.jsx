import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GiShoppingBag } from "react-icons/gi";
import { FaShippingFast, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

const Header = () => {
    return (
        <>
            <div class="header-top">
                <div class="container">
                    <div class="header-child">
                        <div class="header-inner-child1">
                            <div class="header-child-content1">
                                <a href="#">
                                    <span>ENG
                                        <IoIosArrowDown className="arrowdown" />
                                    </span>
                                </a>
                                <RxDividerVertical className="pipe" />
                            </div>
                            <div class="header-child-content2">
                                <a href="#">
                                    <span>USD $
                                        <IoIosArrowDown className="arrowdown" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="header-inner-child2">
                            <div class="header-child-content1">
                            <Link to="/login">SIGN IN</Link>
                                <RxDividerVertical className="pipe" />
                            </div>
                            <div class="header-child-content2">
                                <a href="#">    
                                    <span>CREATE AN ACCOUNT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-middle">
                <div class="container">
                    <div class="header-middle-inner">
                        <div class="logo">
                            <div class="logo-image">
                                <a href="#">
                                    <img src="image/l.png" alt="" />
                                </a>
                            </div>
                        </div>
                        
                        <div class="cart">
                            <div class="cart-logo">
                                <a href="#">
                                    <GiShoppingBag className="bag" />

                                    <span class="cart-text">
                                        My Cart - 0 Item(s)
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="service-block">
                            <div class="service-main">
                                <div class="service-inner">
                                    <div class="service-icon">
                                        <FaShippingFast className="shipping" />
                                    </div>
                                    <div class="service-content">
                                        <p>Free shipping order over $1000</p>
                                    </div>
                                </div>
                                <div class="service-inner">
                                    <div class="service-icon">
                                        <LiaPhoneVolumeSolid className="phone" />
                                    </div>
                                    <div class="service-content">
                                        <p>We Support 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="header-inner">
                        <ul class="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                                <GoChevronDown className="down" />
                                <ul class="mega-menu">
                                    <li>
                                        <h3>Fashion</h3>
                                        <ul>
                                            <li>
                                                <Link to="/men">Men</Link>
                                            </li>
                                            <li>
                                                <Link to="/women">Women</Link>
                                            </li>
                                            <li>
                                                <a href="#">Kids</a>
                                            </li>
                                            <li>
                                                <a href="#">Accessories</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Jewellery</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Ring</a>
                                            </li>
                                            <li>
                                                <a href="#">Bracelet</a>
                                            </li>
                                            <li>
                                                <a href="#">Neckles</a>
                                            </li>
                                            <li>
                                                <a href="#">Wedding Bands</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Furniture</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Living Room</a>
                                            </li>
                                            <li>
                                                <a href="#">Kitchen</a>
                                            </li>
                                            <li>
                                                <a href="#">Office</a>
                                            </li>
                                            <li>
                                                <a href="#">Home Decor</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Autoparts</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Engine parts</a>
                                            </li>
                                            <li>
                                                <a href="#">Exhaust parts</a>
                                            </li>
                                            <li>
                                                <a href="#">Brake parts</a>
                                            </li>
                                            <li>
                                                <a href="#">Body parts</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/electronics">Electronics</Link>
                                <GoChevronDown className="down2" />
                                <ul class="mega-menu-2">
                                    <li>
                                        <h3>Mobile</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Apple</a>
                                            </li>
                                            <li>
                                                <a href="#">Samsung</a>
                                            </li>
                                            <li>
                                                <a href="#">Onepluse</a>
                                            </li>
                                            <li>
                                                <a href="#">Vivo</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Cameras</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Dslr</a>
                                            </li>
                                            <li>
                                                <a href="#">Lences</a>
                                            </li>
                                            <li>
                                                <a href="#">Tripods</a>
                                            </li>
                                            <li>
                                                <a href="#">Batteries</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/sports">Sports & books</Link>
                                <GoChevronDown className="down3" />
                                <ul class="mega-menu-3">
                                    <li>
                                        <h3>Sports</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Football</a>
                                            </li>
                                            <li>
                                                <a href="#">vollyball</a>
                                            </li>
                                            <li>
                                                <a href="#">Cricket</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Books</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Literature</a>
                                            </li>
                                            <li>
                                                <a href="#">philosophy</a>
                                            </li>
                                            <li>
                                                <a href="#">Academics</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/sale">Sale</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <FaSearch className="searc" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;