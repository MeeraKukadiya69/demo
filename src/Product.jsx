import React from "react";
import Product2 from "./Product2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Product = () => {
    const demo = {
        responsive: {
            0: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    }
    return (
        <>
            <div className="product-main">
                <div className="container">
                    <div className="product-inner-main">
                        <div className="product-title">
                            <h1 className="p-title">
                                New Products
                            </h1>
                        </div>
                        <div className="product-child">
                            <div className="btnpre">
                                <GrFormPrevious className="previous" />
                            </div>
                            <OwlCarousel className='owl-theme' rewind margin={10} dots={false}
                                {...demo}>

                                <div class='item'>
                                    <Product2 path="image/p1.jpg" p_name="Eius Tempora" price="$370.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p2.jpg" p_name="Porro Quisquam" price="$319.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p3.jpg" p_name="Architecto Beatae" price="$359.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p4.jpg" p_name="Reprehenderit Beatae" price="$349.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p5.jpg" p_name="Undeiste Numquam" price="$399.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p6.jpg" p_name="Aperiam Dolore" price="$389.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p6.jpg" p_name="Numquam Eius" price="$279.00" />
                                </div>
                                <div class='item'>
                                    <Product2 path="image/p8.jpg" p_name="Modi Tempora" price="$349.00" />
                                </div>
                            </OwlCarousel>
                            <div className="btnnext">
                                <GrFormNext className="next" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Product;