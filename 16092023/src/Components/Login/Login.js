import "./LoginDesign.css"
import Image from 'react-bootstrap/Image';
import logo from "../../logo.svg";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const baseURL = "https://jsonplaceholder.typicode.com/posts";


const Login=() =>{
     //let userId ="my name";
     const [userId,setuserId] = useState("");
     // let password = "";
      const [password,setPassword] = useState("");
      const navigate = useNavigate();
  
      const changeText =(e)=>{
          let currentValue = e.target.value;
          let formName = e.target.name;
          console.log(formName);
          if(formName === 'userid'){
              setuserId(currentValue);
  
              setuserId((prev)=>{
                  //previousValue it will contain current value before update
                  return currentValue
              })
          }
          if(formName === 'password'){
              setPassword(currentValue);
          }
  
          console.log("userId",userId)
          console.log("password",password)
          
      }
      const doSubmit =(e)=>{
          e.preventDefault()
          console.log("userId",userId)
          console.log("password",password)
          //alert("Submitted");
          axios.post(baseURL,{
            "userId" : userId,
            "password" : password
          }).then((response) => {
            alert("success");
            navigate('/');
         }).catch( (error) => {
             console.log(error);
         })
      }
    return( 
    <>
            
        <Container className="width80">
            <h2 className="text-center bg-info text-white padd1420">Login Form</h2>

            <form onSubmit={doSubmit} className='container borderForm' >
                <div className="imgcontainer">
                    <Image src={logo} roundedCircle className="avatar"/>
                </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                    
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember" onChange={changeText}/> Remember me
                </label>
            </div>

            <div className="container bgColorCng" >
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw"> <Link to="/registration"><Button variant="success" className="form-control " type="button"> Register</Button></Link>  </span>
            </div>
            </form>
        </Container>
    </>)
}
export default Login;