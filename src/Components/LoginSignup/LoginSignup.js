import React, { useState } from "react";
//import axios from "axios";
//import ReactDOM from "react-dom";
import "./LoginSignup.css"
function LoginSignup() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  /////////////////////////////////////////
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  //////////////////////////////////////////////////
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
      console.log(inputs)
      console.log(inputs.password)
      
        const data = new FormData(event.target);
        // Access FormData fields with `data.get(fieldName)`
        // For example, converting to upper case
        data.set('username', data.get('username').toUpperCase()); 
        console.log(data.get('username').toUpperCase(),"tttttttttttt");
 
      // Find user login info
      const userData = database.find((user) => user.username === inputs.username);
  
      // Compare user info
      if (userData) {
        if (userData.password !== inputs.password) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    /*
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    
     let url = "vvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
    axios.post(url, data, config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
    });

    */



    };
    const changeHandler = (e) => {
        setInputs(prev => {
            const cloneState = {...prev};
            cloneState[e.target.name] = e.target.value;
            return cloneState;
        });
    }
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
           
            <label>Username </label>
            <input type="text" onChange={changeHandler} name="username" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password"  onChange={changeHandler} name="password" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    );
  }
  
  export default LoginSignup;