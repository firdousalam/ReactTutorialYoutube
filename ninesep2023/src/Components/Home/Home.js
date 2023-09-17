import axios from 'axios';
import url from '../../Constant/url';
import { useState , useEffect} from 'react';
 

  function App(){
    const [userData, setUserData] = useState(null);
    
    let data = " This is From Jsx"

    //new write else it will go on infinite loog
    useEffect(()=>{
      // all the Logic http 
   })


    useEffect(function(){

    },[])
    // it will run only once similar ot Constructor or NGInit of Angular or Onload
    useEffect(()=>{
       // all the Logic
       return // logic when we get out from this components
    },[]) 

    // it will fire On Load and On Change of The given userData Variable/state
    useEffect(()=>{
      // all the Logic
   },[userData]) // [stateProperty name]



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


