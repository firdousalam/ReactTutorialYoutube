
import GrandChild from './GrandChild';
import React, { createContext, useContext } from "react";

const Context = createContext();
const Child = (props) => {
   
    return (
        <>
            <h2>
                Processions Parent Data <br />
                
            </h2>
            <GrandChild data={props.data} name={props.name}/>
        </>
    );
}
 
export default Child;