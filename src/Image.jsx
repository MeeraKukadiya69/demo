import React from "react";
import Image2 from "./Image2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Image = () => {
    const demo = {
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,
            }
        }
    }
    return (
        <>
            <div className="image-block">
                <div className="image-inner-main">
                    <OwlCarousel className='owl-theme' loop={true} margin={10} dots={false}  {...demo}>

                        <Image2 path="image/i1.jpg" p1="Get" p2="Your Copy" p3="With" p4="20%" p5="Discount" p6="Sit with Luxury" />
                        <Image2 path="image/i2.jpg" p1="Up to" p2="30%" p3="Off" p4="Sale Going on" p5="Printed sofa" p6="Reflecting your image" />
                        <Image2 path="image/i3.jpg" p1="Get" p2="Mega Sale" p3=" offer"
                        p4="To Renovate your" p5="office" p6="Crafted with exellence" />
                    </OwlCarousel>
                </div>
            </div>

        </>
    );
}

export default Image;