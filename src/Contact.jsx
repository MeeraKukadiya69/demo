import React from "react";
import Product2 from "./Product2";
import { Link } from "react-router-dom";
import Subpage2 from "./Subpage2";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { RxSlash } from "react-icons/rx";

const Contact = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="inner-main">
                        <div className="options">
                            <div className="option-inner">
                                <Subpage2 name="Home" /><RxSlash className="slash" />
                                <Subpage2 name="Conatct us" />
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
                                    <p className="title"> Store information</p>
                                    <p className="discription">
                                        <IoLocationSharp className="loc" />
                                        <p className="des">
                                            Etrend Home Decor<br />
                                            90 Street, Arizona<br />
                                            85002<br />
                                            United States</p>
                                    </p>
                                    <hr className="hr" />
                                    <p className="discription">
                                        <IoIosCall className="loc" />
                                        <p className="des">
                                            Call us:
                                            <p className="phone">(123) 456 789</p>
                                        </p>
                                    </p>
                                    <hr className="hr" />
                                    <p className="discription">
                                        <IoMail className="loc" />
                                        <p className="des">
                                            Email us:
                                            <p className="phone">sales@domaim.com</p>
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="block-inner-child3">
                                <div className="block-text">
                                    <p className="title"> Contact Us</p>
                                    <div className="form">
                                        <form method="post">
                                            <table border={0} cellSpacing={25} align="center">
                                                <tr>
                                                    <td id="td">
                                                        <label For="Subject">Subject</label>
                                                    </td>
                                                    <td >
                                                        <select name="subject" id="td2">
                                                            <option value="1">Customer Service</option>
                                                            <option value="2">Webmaster</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="td">
                                                        <label For="email">Email address</label>
                                                    </td>
                                                    <td>
                                                        <input type="email" placeholder="your@domain.com" name="email" id="td2" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="td">
                                                        <label For="attechment">Attechment</label>
                                                    </td>
                                                    <td>
                                                        <input type="file" name="attechment" id="td2" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="td">
                                                        <label For="message">Message</label>
                                                    </td>
                                                    <td>
                                                        <textarea name="message" id="td2" cols="70" rows="1" placeholder="How can I help?"></textarea>
                                                    </td>
                                                </tr>
                                            </table>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;