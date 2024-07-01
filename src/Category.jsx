import React from "react";
import Category2 from "./Category2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const Category = () => {
    const demo2 = {
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            991: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    }
    return (
        <>
            <div className="category-main">
                <div className="container">
                    <div className="product-title">
                        <h1 className="p-title">
                            Shop By Category
                        </h1>
                    </div>
                    <div className="category-inner-main">
                        <div className="btnpre">
                            <GrFormPrevious className="previous" />
                        </div>
                        <div className="category-inner">
                            <OwlCarousel className='owl-theme' margin={10} dots={false} autoplay={false}    {...demo2}>

                                <div class='item'>
                                    <Category2 path="image/1.png" text="Shop" />
                                </div>
                                <div class='item'>
                                    <Category2 path="image/2.png" text="Electronics" />
                                </div>
                                <div class='item'>
                                    <Category2 path="image/3.png" text="Sports & Books" />
                                </div>
                                <div class='item'>
                                    <Category2 path="image/4.png" text="Fashion" />
                                </div>
                                <div class='item'>
                                    <Category2 path="image/5.png" text="Furniture" />
                                </div>
                                <div class='item'>
                                    <Category2 path="image/5.png" text="Autoparts" />
                                </div>
                            </OwlCarousel>

                        </div>
                        <div className="btnnext">
                            <GrFormNext className="next" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Category;