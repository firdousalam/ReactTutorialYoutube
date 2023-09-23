import {useContext} from 'react';
import { NameConext } from '../../App';
function GrandChild(props) {
  
    const [auth, setAuth]  = useContext(NameConext);
 
  return (
            
                <div>
                   
                    <h3>
                        Reading data from GrandParents  <br />
                        {props.data}<br/>
                        {props.name}

                    </h3>

                
                         <div>Auth {auth ? "True" : "False" } {auth}</div>
                    <button onClick={()=>{ setAuth(prev=>{return !prev})}}>{auth ? 'Logout' : 'Login'} </button>


  
                   
                
                </div>
         
       
  )
}

export default GrandChild
