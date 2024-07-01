import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    var txtemail = useRef();
    var txtpassword = useRef();
    var { id } = useParams();
    var navigate = useNavigate();

    useEffect(() => {
        var a = new FormData();
        a.set("id", id);

        axios.post('http://localhost/rapi/viewupdate.php', a).then(function (abc) {
            txtemail.current.value = abc.data.user.email;
            txtpassword.current.value = abc.data.user.password;
        })
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        var email = (txtemail.current.value);
        var password = (txtpassword.current.value);

        var a = new FormData();
        a.set("email", email);
        a.set("password", password);
        a.set("id", id);

        axios.post('http://localhost/rapi/update.php', a).then(function (abc) {
            if (abc.data['status'] == 'yes') {
                navigate('/view');
            }
            else {
                alert('no');
            }
        })
    }
    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table border={1} cellPadding={4} cellSpacing={0}>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="email" ref={txtemail} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" ref={txtpassword} /></td>
                    </tr>
                    <tr align="center">
                        <td colspan="2"><input type="submit" value="Submit" name="submit" /></td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default Edit;