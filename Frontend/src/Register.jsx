import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contactNo, setContactNo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const integ = {
            email: email,
            password: password,
            name: name,
            age: age,
            contactNo: contactNo,
        };

        try {
            await axios.post('http://127.0.0.1:8080/api/register', integ);
            toast.success('Registered Successfully!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000, // 3 seconds
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Patient Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Patient name</label><br />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                    required
                /><br /><br />

                <label htmlFor="email">Email</label><br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    required
                /><br /><br />

                <label htmlFor="contactNo">Contact Number</label><br />
                <input
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    type="text"
                    placeholder="Contact Number"
                    id="contactNo"
                    name="contactNo"
                    required
                /><br /><br />

                <label htmlFor="password">Password</label><br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                    required
                /><br /><br />

                <label htmlFor="age">Age</label><br />
                <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="text"
                    placeholder="Age"
                    id="age"
                    name="age"
                /><br /><br />

                <button type="submit">Submit</button><br /><br />
                <button className="link-btn">Already have an account <Link to="/login">Login</Link></button>
            </form>
            <ToastContainer />
        </div>
    );
};
