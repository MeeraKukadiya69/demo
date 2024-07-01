import axios from "axios";
import React, { useRef } from "react";

const Insertapi = () => {
    var txtemail = useRef();
    var txtpassword = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        var email = (txtemail.current.value);
        var password = (txtpassword.current.value);

        var a = new FormData();
        a.set("email", email);
        a.set("password", password);

        axios.post('http://localhost/rapi/insert.php', a).then(function (abc) {
            if (abc.data['status'] == 'yes') {
                alert('yes');
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

export default Insertapi;