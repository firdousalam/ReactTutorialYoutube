import {useState,React} from 'react'
import Child from './Child';
import {createContext} from 'react';
export const ParentContent = createContext()
const Parent = () => {
    const [user, setUser] = useState("Jesse Hall");
    const data = "Hello Everyone";
    return (
        <ParentContent.Provider value="Technophile Firdous">
            <div>
                <Child data={data} name="Technophile firdous" />
                
               
                
            </div>
        </ParentContent.Provider>
    );
}
 
export default Parent;