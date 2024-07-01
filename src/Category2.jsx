import React from "react";

const Category2 = (p) => {
    return (
        <>
            <div className="category-child">
                <a href="#">
                    <img src={p.path} alt="" className="c-img"/>
                </a>
                <p className="c-text">{p.text}</p>
            </div>
        </>
    );
}

export default Category2;