import React from "react";

const Home = () => {
    return (
        <>
            <div className="home-main">
                <div className="container">
                    <div className="home-inner">
                        <div className="home-child">
                            <div className="child-inner">
                                    <a href="#">
                                        <img src="image/s1.jpg" alt="" />
                                    </a>
                                <div className="home-inner-text">
                                    <p className="h-text">Christmas sale on armchair</p>
                                    <p className="text">20% sale on selected items</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-middle-child">
                            <div className="child-inner">
                                    <a href="#">
                                        <img src="image/s2.jpg" alt="" />
                                    </a>
                                <div className="home-inner-text">
                                    <p className="h-text">Low cost designer dining</p>
                                    <p className="text">get the best deal today!</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-child">
                            <div className="child-inner">
                                    <a href="#">
                                        <img src="image/s3.jpg" alt="" />
                                    </a>
                                <div className="home-inner-text">
                                    <p className="h-text">Office space solutions</p>
                                    <p className="text">get expert opinioin for furniture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Home;