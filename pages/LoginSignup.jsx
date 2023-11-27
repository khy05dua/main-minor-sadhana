import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../pages/CSS/LoginSignup.css'

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email, password, name
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/", { state: { id: email } });
            }
        } catch (error) {
            alert("An error occurred. Please check your details.");
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <h1>Signup</h1>
            <form action="POST" className="signup-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                </div>
                <div className='loginsignup-agree'>
                   
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                <button type="submit" onClick={submit}>Submit</button>
            </form>
            <div className="or-separator">
                <p>OR</p>
            </div>
            <Link to="/login" className="login-link">Login Page</Link>
        </div>
    );
}

export default Login;
