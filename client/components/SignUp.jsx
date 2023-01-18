import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      // const { username, password } = props;

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({username, password})
          };

          //Signup endpoints pending
      fetch('/api/users/register', requestOptions)
        .then(data => {
            console.log("success", username, password)
             navigate('/', {state:{username: username}});
      })
      .catch(err => console.log(err));
      console.log(username, password);
  }
    return (
        <form className="h-screen w-screen flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            <h3 className="mb-5">Signup</h3>

                <input 
                type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="Username" name="" id=""
                />
                <input 
                type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" name="" id=""/>

            <br/>
            <p> OR</p>
            <br/>
            <button className='mb-2'>Sign Up</button>
            <button>Sign Up With Github</button>
        </form>
    )
};

export default Signup;