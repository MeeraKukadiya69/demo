import React from "react";

const Block2 = (p) => {
    return (
        <>
            <div className="child-inner">
                <img src={p.path} alt="" />
                <div className="text">
                    <p>{p.p_name}</p>
                    <h3>{p.price}</h3>
                </div>
            </div>

        </>
    );
}

export default Block2;