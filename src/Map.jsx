import React from "react";

const Map = () => {
    // var a = [10,20,30,40,50];

    var json = [{ name: "admin1", Email: "admin@gmail.com" },
    { name: "admin2", Email: "admin@gmail.com" },
    { name: "admin3", Email: "admin@gmail.com" },
    { name: "admin4", Email: "admin@gmail.com" },
    { name: "admin5", Email: "admin@gmail.com" },
    { name: "admin6", Email: "admin@gmail.com" },
    { name: "admin7", Email: "admin@gmail.com" },
    { name: "admin8", Email: "admin@gmail.com" },
    ]

    return (
        <>
            {json.map((p) => (
                <>
                    <p>{p.name}<br />
                        {p.Email}
                    </p><br />
                </>
            ))}
        </>
    );
}

export default Map;