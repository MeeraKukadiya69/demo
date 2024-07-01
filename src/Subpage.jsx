import React from "react";
import Subpage2 from "./Subpage2";

const Subpage = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="inner-main">
                        <div className="options">
                            <div className="option-inner">
                                <Subpage2 name="Home"/><RxSlash className="slash"/>
                                <Subpage2 name="Shop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Subpage;