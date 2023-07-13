import React, { useState } from "react";
import "./App.css";
import { Register } from "./Register";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div><h1>PATIENT LOGIN</h1>
        <div className="auth-form-container">
        <h2>Login</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email    </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required="true"
                /><br></br>
              <br></br>  <label htmlFor="password">Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required="true"
                /><br></br>
                <br></br><button type="submit">Log In</button>
                
            </form>
            <br></br>

            <button className="link-btn"> Don't have an Account? <Link to="/register">Sign Up</Link></button>
            
        </div>
        
        </div>
        )
    }