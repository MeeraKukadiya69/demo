import React from "react";

const Product2 = (p) => {
    return (
        <>
            <div className="product-child-main1">
                
                <div className="product-inner-child">
                    <div className="new">
                        <p className="t1">New</p>
                    </div>
                    <div className="new">
                        <p className="t2">On sale!</p>
                    </div>
                    <div className="product-image">
                        <a href="">
                            <img src={p.path} alt="" />
                        </a>
                        <div className="hover">
                            <a href="#">Quick view</a>
                        </div>
                    </div>
                    <div className="product-text">
                        <a href="#" className="description">{p.p_name}</a>
                        <p className="price">{p.price}</p>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product2;