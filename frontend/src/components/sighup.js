import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  function handleNameInput (event) {
     setName(event.target.value)
  }

  function handleEmailInput (event) {
    setEmail(event.target.value)
 }

 function handlePasswordInput (event) {
  setPassword(event.target.value)
}


function signup() {
  fetch('http://localhost:4000/user/sign-up', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: name,
          password: password,
          email: email
      })
  })
  .then(data => data.json())
  .then(response => window.localStorage.setItem('jwtToken', response.jwtToken))
}


    return (
        <form>
          <h3>Sign Up</h3>
  
          <div className="mb-3">
            <label>Name</label>
            <input
              value={name}
              onChange={handleNameInput}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>

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
            <button type="submit" className="btn btn-primary" onClick={signup}>
              Sign Up
            </button>
          </div>
          
        </form>
      )
}


export default SignUp;