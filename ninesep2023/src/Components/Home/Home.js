import axios from 'axios';
import url from '../../Constant/url';
import { useState , useEffect} from 'react';
 

  function App(){
    const [userData, setUserData] = useState(null);
    
    let data = " This is From Jsx"
    useEffect(()=>{
      axios.get(url.getDemoUrl, {
      })
      .then(function (response) {
        console.log(response);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    },[])
   

    return (
        <>
        <div>
           This Is My Home Page
           <div></div> 
           
        </div>
    
       
        </>
    )
  }

  export default App


