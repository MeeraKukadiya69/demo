import React from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaCcVisa, FaCcPaypal, FaCcDiscover, FaCcAmex, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top-child">
                            <div className="footer-top-inner-child">
                                <span className="footer-top-text">
                                    <IoMdPaperPlane className="plane" />
                                    Enter your email & hit send to subscribe
                                </span>
                            </div>
                            <div className="footer-top-inner-child2">
                                <div className="footer-email">
                                    <input type="text" className="f-email" size="55px" placeholder="Youremail@domain.com" />
                                </div>
                                <div className="footer-btn">
                                    <input type="button" className="f-send" value="SEND" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        <div className="footer-middle-inner">
                            <div className="footer-child">
                                <div className="footer-heading">
                                    Contact
                                </div>
                                <ul className="footer-content">
                                    <li className="lable-contact">
                                        <div className="icon">
                                            <IoLocationSharp />
                                        </div>
                                        <span className="lable">
                                            Address<br />
                                        </span>
                                        Home Decor,<br />
                                        90 Street, Arizona<br />
                                        85002<br />
                                        United States
                                    </li>
                                    <li className="lable-contact">
                                        <div className="icon">
                                            <IoMail />
                                        </div>
                                        <span className="lable">
                                            Mail us<br />
                                        </span>
                                        <a href="#">homedecor@gmail.com</a>
                                    </li>
                                    <li className="lable-contact">
                                        <div className="icon">
                                            <IoIosCall />
                                        </div>
                                        <span className="lable">
                                            Phone<br />
                                        </span>
                                        <a href="#">(123) 456 789</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="footer-child">
                                <div className="footer-heading">
                                    Your account
                                </div>
                                <ul className="footer-content">
                                    <li><a href="#" className="f-link">Personal info</a></li>
                                    <li><a href="#" className="f-link">Order</a></li>
                                    <li><a href="#" className="f-link">Credit slips</a></li>
                                    <li><a href="#" className="f-link">Address</a></li>
                                </ul>
                            </div>
                            <div className="footer-child">
                                <div className="footer-heading">
                                    Products
                                </div>
                                <ul className="footer-content">
                                    <li><a href="#" className="f-link">Prices drop</a></li>
                                    <li><a href="#" className="f-link">New Product</a></li>
                                    <li><a href="#" className="f-link">Best Sales</a></li>
                                    <li><a href="#" className="f-link">Sitemap</a></li>
                                    <li><a href="#" className="f-link">Stores</a></li>
                                </ul>
                            </div>
                            <div className="footer-child">
                                <div className="footer-heading">
                                    Our company
                                </div>
                                <ul className="footer-content">
                                    <li><a href="#" className="f-link">Delivery</a></li>
                                    <li><a href="#" className="f-link">Legal Notice</a></li>
                                    <li><a href="#" className="f-link">T & C*</a></li>
                                    <li><a href="#" className="f-link">About Us</a></li>
                                    <li><a href="#" className="f-link">Secure Payment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <div className="footer-bottom-child">
                            <p className="copyright">
                                <a href="#">
                                    © 2024 - Home Decor™
                                </a>
                            </p>
                        </div>
                        <div className="footer-bottom-child2">
                            <div className="footer-payment-icon">
                                <a href="#">
                                    <FaCcVisa />
                                </a>
                            </div>
                            <div className="footer-payment-icon">
                                <a href="#">
                                    <FaCcPaypal />
                                </a>
                            </div>
                            <div className="footer-payment-icon">
                                <a href="#">
                                    <FaCcDiscover />
                                </a>
                            </div>
                            <div className="footer-payment-icon">
                                <a href="#">
                                    <FaCcAmex />
                                </a>
                            </div>
                            <div className="footer-payment-icon">
                                <a href="#">
                                    <FaCcMastercard />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;