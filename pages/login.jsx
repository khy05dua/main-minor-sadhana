import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../pages/CSS/LoginSignup.css'

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                email, password
            });

            if (response.data === "exist") {
                history("/", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form action="POST" className="login-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                </div>
                <button type="submit" onClick={submit}>Submit</button>
            </form>
            <div className="or-separator">
                <p>OR</p>
            </div>
            <Link to="/signup" className="signup-link">Signup Page</Link>
        </div>
    );
}

export default Login;
