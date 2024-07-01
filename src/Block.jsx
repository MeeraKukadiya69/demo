import React from "react";
import Block2 from "./Block2";


const Block = () => {
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className="inner-main">
                        <div className="child">
                            
                           <Block2 p_name="product1" price="$100" path="image/1.png"/>
                           <Block2 p_name="product2" price="$200" path="image/2.jpg"/>
                           <Block2 p_name="product3" price="$150" path="image/3.jpg"/>
                           <Block2 p_name="product4" price="$180" path="image/4.jpg"/>
                           <Block2 p_name="product5" price="$230" path="image/5.jpg"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Block;