import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
const LandingPage = ()=>{
    return (
        <>
            <Menu />
            <Outlet />
           
        </>
    )
}
export default LandingPage;
