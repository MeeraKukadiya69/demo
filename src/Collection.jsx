import React from "react";
import Product2 from "./Product2";

const Collection = () => {
    return (
        <>
            <div className="feature-main">
                <div className="container">
                    <div className="feature-inner-main">
                        <div className="product-title">
                            <h1 className="p-title">
                                Featured Collection
                            </h1>
                        </div>
                        <div className="product-inner">
                            <div className="product-child">
                                <Product2 path="image/p4.jpg" p_name="Prespiciatis Unde" price="$99.00" />
                                <Product2 path="image/p7.jpg" p_name="Omnis lste" price="$199.00" />
                                <Product2 path="image/p1.jpg" p_name="Eius Tempora" price="$370.00" />
                                <Product2 path="image/p9.jpg" p_name="Accusantium Dolore" price="$299.00" />
                                <Product2 path="image/p5.jpg" p_name="Rem Aperiam" price="$249.00" />
                                <Product2 path="image/p11.jpg" p_name="Adipisci Velit" price="$289.00" />
                                <Product2 path="image/p6.jpg" p_name="Numquam Eius" price="$279.00" />
                                <Product2 path="image/p8.jpg" p_name="Modi Tempora" price="$349.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Collection;