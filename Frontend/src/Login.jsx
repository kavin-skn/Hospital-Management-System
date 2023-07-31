import React, { useState } from "react";
import "./App.css";
// import { Register } from "./Register";
// import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "./reduxa/actions";
import {useDispatch} from 'react-redux';
import {login} from './redux/userslice.js';
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();
    const navigate = useNavigate();
    // const dispatch=useDispatch();
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(username+" "+password);
        // dispatch(login(username));
        // setUsername('');
        navigate("/");
    };
    dispatch(login({username}));
    return (
        <div><h1>PATIENT LOGIN</h1>
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username    </label>
        <br></br>
        <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="yourusername" id="username" name="username" required="true"
        /><br></br>
        <br></br>  <label htmlFor="passwordword">password </label>
        <br></br>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required="true"
                /><br></br>
                <br></br><button type="submit">Log In</button>
                
            </form>
            <br></br>

            <button className="link-btn"> Don't have an Account? <Link to="/register">Sign Up</Link></button>
            
        </div>
        
        </div>
        )
    }

export default Login;