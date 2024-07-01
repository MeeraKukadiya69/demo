import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Getapi = () => {
    var [data, sData] = useState([]);
    useEffect(() => {
        deletedata();
    }, []);

    const deletedata = () => {
        axios.get('http://localhost/rapi/view.php').then(function (abc) {
            sData(abc.data);
        })
    }

    const handleDelete = (p) => {
        var id = p.target.getAttribute('data');

        var a = new FormData();
        a.set("id", id);

        axios.post('http://localhost/rapi/delete.php', a).then(function (abc) {
            if (abc.data['status'] == 'yes') {
                // alert('yes');
                deletedata();
            }
            else {
                alert('no');
            }
        })
    }

    var navigate = useNavigate();
    const handleUpdate = (e) => {
        var id = e.target.getAttribute('data');
        navigate('/edit/' + id);
    }
    return (
        <>
            <p>{localStorage.getItem("email")}</p>
            <table border={1} >
                <tr>
                    <td>Id</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Action</td>
                </tr>
                {
                    data.map((a) => {
                        return (
                            <>
                                <tr>
                                    <td>{a.id}</td>
                                    <td>{a.email}</td>
                                    <td>{a.password}</td>
                                    <td>
                                        <button type="button" data={a.id} onClick={handleDelete}>Dlelete</button>
                                        <button type="button" data={a.id} onClick={handleUpdate}>Update</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    );
}

export default Getapi;