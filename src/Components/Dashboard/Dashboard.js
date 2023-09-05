import { useState } from "react"
import { Button } from "react-bootstrap";
import Career from "../Career/Career";
function Dashboard() {
    // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState("");
        const updateCount = ()=>{
            setCount("Data Got Update In Parent ")
        }
    return (
        <>
           <div className="container-fluid">
                <h1> Dashboard </h1>
                <Career />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>You clicked {count} times</p>
                <Button onClick={() => updateCount()}>
                    Click me
                </Button>
            </div>
        </>
    )
}
export default  Dashboard