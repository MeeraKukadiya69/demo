import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const Image2 = (p) => {
    return (
        <>
            <div className="image-item">
                <div className="btnpre">
                    <GrFormPrevious className="previous" />
                </div>
                <a href="#">
                    <img src={p.path} alt="" />
                    <div className="image-description">
                        <h2 display-1></h2>
                        <div className="image-content">
                            <p className="discount">
                                {p.p1}
                                <span> {p.p2} </span>
                                {p.p3} <br />
                                <span> {p.p4} </span><br />
                                {p.p5} <br />
                            </p>
                            <p>{p.p6}</p>
                            <a href="#" className="button">SHOP NOW</a>
                        </div>
                    </div>
                </a>
                <div className="btnnext">
                    <GrFormNext className="next" />
                </div>
            </div>
        </>
    );
}

export default Image2;