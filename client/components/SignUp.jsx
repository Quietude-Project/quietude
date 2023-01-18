import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const { username, password } = props;

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({username, password})
          };

          //Signup endpoints pending
      fetch('/api/users/register', requestOptions)
        .then(data => {
          if (!data.ok) {
              alert('Your username or password is incorrect');
              //throw Error('Your username or password is incorrect')
              navigate('/signup')
          } else {
             navigate('/home', {state:{username: username}});
          }
      })
      .catch(err => console.log(err));
      console.log(username, password);
  }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

                <input 
                type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="Username" name="" id=""
                />
                <input 
                type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" name="" id=""/>

            <br/>
            <p> OR</p>
            <br/>
            <button>Sign Up</button>
            <button>Sign Up With Github</button>
        </form>
    )
};

export default Signup;