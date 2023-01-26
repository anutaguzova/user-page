import React from "react";
import { useState } from "react";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false);

function handleEmailInput(event) {
  setEmail(event.target.value)
}

function handlePasswordInput(event) {
  setPassword(event.target.value)
}

function signin() {
  fetch('http://localhost:4000/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    })
    .then(data => {
      if (data.status === 401) {
        setError(true)
      } else {
        return data.json()
      }

    })
    .then(response => window.localStorage.setItem('jwtToken', response.jwtToken))
}


    return (
        <form>
          <h3>Sign In</h3>
  
          <div className="mb-3">
            <label>Email address</label>
            <input
              value={email} 
              onChange={handleEmailInput}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
  
          <div className="mb-3">
            <label>Password</label>
            <input
              value={password} 
              onChange={handlePasswordInput}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
  
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={signin}>
              Submit
            </button>
          </div>
          
        </form>
      )
}


export default Login;