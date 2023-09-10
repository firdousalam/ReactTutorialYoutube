import { useState } from "react";
function Login(){
    //let x ="my name";
    const [userId,setuserId] = useState("my name");
    const [password,setPassword] = useState("")

   
    //document.getElementById("userId").value = x;
    let pageHeading = "Welcome To Login Page using JSX";
    const doLogin = ()=>{  // arrow function ecma 6 
        alert("Hi ")
    }
    const changeText =(e)=>{
        let currentValue = e.target.value;
        let formName = e.target.name;
        console.log(formName);
        if(formName === 'userid'){
            setuserId(currentValue);
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
    }
    return (
        <> 
          <div>
            {pageHeading}
          </div>
            <form  onSubmit={doSubmit}>
                <div> UserId : <input type="text" id="userid" value={userId} name="userid" onChange={changeText}/></div>
                <div> Password : <input type="password" name="password"  onChange={changeText} /></div>
                <div> <input type="button" value="Calling Function From Button" onClick={doLogin}/></div>

                <input type="submit" value="Submit"/>
                
            </form>
        </>
      )
    }
    export default Login