import React from "react";
import Brand2 from "./Brand2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brand = () => {
    const demo2 = {
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            900:{
                items: 4,
            },
            1000: {
                items: 5
            }
        }
    }
    return (
        <>
            <div className="shop-main">
                <div className="container">
                    <div className="shop-inner-main">
                        <div className="product-title">
                            <h1 className="p-title">
                                Shop By Brand
                            </h1>
                        </div>
                        <div className="shop-child">
                            <div className="shop-inner-child">
                                <OwlCarousel className='owl-theme' margin={10} dots={false} autoplay={true} autoplayTimeout={4000} rewind={true} {...demo2}>
                                    <div class='item'>
                                        <Brand2 path="image/l1.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l2.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l3.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l4.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l5.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l1.jpg" />
                                    </div>
                                    <div class='item'>
                                        <Brand2 path="image/l2.jpg" />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brand;