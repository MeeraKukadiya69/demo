import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    var txtemail = useRef();
    var txtpassword = useRef();
    var navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        var email = (txtemail.current.value);
        var password = (txtpassword.current.value);

        var a = new FormData();
        a.set("email", email);
        a.set("password", password);

        axios.post('http://localhost/reactapi/login.php', a).then(function (abc) {
            if (abc.data['status'] == 'yes') {
                // alert('yes');
                localStorage.setItem("email",email);
                navigate('/');
            }
            else {
                alert('Wrong email or password!');
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
                        <td colspan="2"><input type="submit" value="Login" name="submit" /></td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default Login;