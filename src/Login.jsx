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
             <div className="login-main">
                <div className="container">
                    <h2>LOG IN</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="input">
                            <table align="center">
                                <h5>EMAIL</h5>
                                <div className="tr">
                                    <input type="email" className="email" name="email" size="30" placeholder="your@email.com" ref={txtemail} />
                                </div>
                                <h5>PASSWORD</h5>
                                <div className="tr">
                                    <input type="password" className="password" name="password" size="30" placeholder="password" ref={txtpassword} />
                                </div>
                                <div className="tr">
                                    <input type="submit" value="LOG IN" name="submit" className="submit" />
                                </div>
                            </table>
                            <a href="#" className="forget-password">Forget Password?</a>
                            <h3 className="h3">OR CONTINUE WITH</h3>
                            <div className="icons">
                                <GrApple className="icon-1" /><FaFacebook className="icon-2" /><FcGoogle className="icon-3" /><GrAmazon className="icon-4" />
                            </div>
                            <div className="sign-up">
                                <h4 className="h4">Don't have an account yet? <a href="#">Sign up</a></h4>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
