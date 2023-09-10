import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function  RegistrationReact(){
   /* const registration =  {
        "email" : '',
        "password" : '',
        "mobile" : ''
    }

     registration.email = "curentEmail"
     
     registration["email"] = "curentEmail"

     to update Dynamically with dynamic key i.e formName will be dynamic
     registration[formName] = "curentEmail"
    */
   
    
    const [registration,setRegistration] = useState({
        "email" : '',
        "password" : '',
        "mobile" : '',
        "city" :''
    })
    const [errorMessage,setErrorMessage] = useState()
    //let errorMessage = "";
    /*
    const [errorMessage,setErrorMessage] = useState({
        "email" : 'Please Enter EmailId',
        "password" : 'Please Enter Your Password',
        "mobile" : '',
        "city" :''
    })
    */
   // const [errorMessage,setErrorMessage] = useState("")

    const onSubmit= (e) =>{
        e.preventDefault();
    //    setErrorMessage("");
        /*
        if(registration.email == ''){
            document.getElementById("error").innerHTML = "Please enter email id";
            retur false
        }
         if(registration.email == ''){
            document.getElementById("error").innerHTML = "Please enter email id";
            retur false
        } if(registration.email == ''){
            document.getElementById("error").innerHTML = "Please enter email id";
            retur false
        }

        */
       // dynamically check if any field are blank or not
       
       if(registration.email ===''){
        setErrorMessage("Please enter email id");
       }
       
       console.log(registration);
    }
    const changeText =(e)=>{
        let currentValue = e.target.value;
        let formName = e.target.name;
        setRegistration(
            prev => {
                const cloneState = {...prev};
                if(cloneState.hasOwnProperty(formName)){
                    cloneState[formName] = currentValue; // updation your clone object
                }
                return cloneState;
            }
        );
    }
    return (
        <>
             <div className='container'>
                <h2>Registration Using React using React-Bootstrap</h2>
                <div className="error" style={{color : 'red'}}>{errorMessage}</div>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" placeholder="Enter email"  onChange={changeText}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password"  onChange={changeText}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" name = "mobile" placeholder="Enter Mobile"  onChange={changeText}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="select City" name="city" onChange={changeText}>
                            <option>Select City</option>
                            <option value="1">Delhi</option>
                            <option value="2">Mumbai</option>
                            <option value="3">Kolkata</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default RegistrationReact;