import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../stylesheets/signin.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

const Login = props => {
    const [ username , setUsername ] = useState('');
    const [ password , setPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = props;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username, password})
            };

            //Login endpoints pending
        fetch('http://localhost:3000', requestOptions)
          .then(data => {
            if (!data.ok) {
                alert('Your username or password is incorrect');
                //throw Error('Your username or password is incorrect')
                navigate('/signin')
            } else {
               navigate('/home', {state:{username: username}});
            }
        })
        .catch(err => console.log(err));
        console.log(username, password);
    }

        return (
            <form className='login' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>Username:</label>
                <input placeholder='Enter your username'type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}/>

                <label>Password:</label>
                <input placeholder='Enter your password' type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>

                <button>Log In</button>
            </form>
        )
}

export default Login;