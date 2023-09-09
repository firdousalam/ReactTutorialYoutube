import { useState } from "react";
function Login(){
    //let x ="my name";
    const [x,setX] = useState("my name")
    //document.getElementById("userId").value = x;
    let pageHeading = "Welcome To Login Page using JSX";
    const doLogin = ()=>{  // arrow function ecma 6 
        alert("Hi ")
    }
    const changeText =(e)=>{
        let currentValue = e.target.value;
        setX(currentValue);
    }
    const doSubmit =(e)=>{
        e.preventDefault()
        alert("Submitted");
    }
    return (
        <> 
          <div>
            {pageHeading}
          </div>
            <form  onSubmit={doSubmit}>
                <div> UserId : <input type="text" id="userid" value={x} name="userid" onChange={changeText}/></div>
                <div> Password : <input type="password" name="password" /></div>
                <div> <input type="button" value="Calling Function From Button" onClick={doLogin}/></div>

                <input type="submit" value="Submit"/>
                
            </form>
        </>
      )
    }
    export default Login