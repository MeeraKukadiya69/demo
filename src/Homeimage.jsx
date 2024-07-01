import React from "react";

const Homeimage = () => {
    return (
        <>
            <div className="home-image-main">
                <div className="container">
                    <div className="home-image-inner-main">
                        <div className="home-image-inner">
                            <div className="home-image-child1">
                                <div className="home-image-small">
                                    <div className="child-inner">
                                        <a href="#">
                                            <img src="image/h1.jpg" alt="" />
                                        </a>
                                        <div className="home-text">
                                            <p className="h-text">Sofa & armchair on sale</p>
                                            <p className="text">20% off on selected items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-image-large">
                                    <div className="child-inner">
                                        <a href="#">
                                            <img src="image/h2.jpg" alt="" />
                                        </a>
                                        <div className="home-text">
                                            <p className="h-text">Flat sale on office furniture</p>
                                            <p className="text">Get the best deal today!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-image-child2">
                                <div className="home-image-large">
                                    <div className="child-inner">
                                        <a href="#">
                                            <img src="image/h3.jpg" alt="" />
                                        </a>
                                        <div className="home-text">
                                            <p className="h-text">Bedroom furnitures</p>
                                            <p className="text">30% off on selected items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-image-small">
                                    <div className="child-inner">
                                        <a href="#">
                                            <img src="image/h4.jpg" alt="" />
                                        </a>
                                        <div className="home-text">
                                            <p className="h-text">Home office Solutions</p>
                                            <p className="text">Upto 50% off today!</p>
                                        </div>
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


export default Homeimage;