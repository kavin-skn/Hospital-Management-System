import React, { useState } from "react";
import "./register.css";
import { Login } from "./Login";
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <h2>Patient Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Patient name</label><br></br>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" required="true"
            /><br></br>
           <br></br> <label htmlFor="email">Email</label><br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"         required="true"
            /><br></br>
           <br></br> <label htmlFor="contactNo">Contact Number</label><br></br>
    <input
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
        type="text"
        placeholder="Contact Number"
        id="contactNo"
        name="contactNo"
        required="true"
    /><br></br>
           <br></br> <label htmlFor="password">Password</label><br></br>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"  required="true"
            /><br></br>
            <br></br><label htmlFor="confirmPassword">Confirm Password</label><br></br>
    <input
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        type="password"
        placeholder="********"
        id="confirmPassword"
        name="confirmPassword"
        required="true"

    /><br></br>
          <br></br>  <label htmlFor="age">Age</label><br></br>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Age" id="age" name="age"/><br></br>
            <br></br><button type="submit">Submit</button><br></br>
            <br></br>
            <button className="link-btn">Already have an account  <Link to="/login">Login</Link></button>
            </form>
        </div>
    )
}
