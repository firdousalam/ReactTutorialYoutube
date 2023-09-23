import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import React,{useState} from 'react';
import Cookies from 'js-cookie';
export const NameConext = React.createContext()
function App() {
const [auth, setAuth] = useState(false);

//localStorage.setItem('dataKey', JSON.stringify(auth));
//Cookies.set('name', 'Technophile Firdous', { expires: 7 });
/*
 // Method to set data in cookies which will expire in 7 days
 const SetCookie = () => {
  Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
    expires: 7,
  });
};

// Method to get data from cookies
const GetCookie = () => {
  alert(Cookies.get("token"));
};

// Method to remove data from cookies
const RemoveCookie = () => {
  Cookies.remove("token");
};*/
  return (
    <NameConext.Provider value={[auth,setAuth]}>
      <main>
        <RouterProvider router={router} />
      </main>
    </NameConext.Provider>
  );
}

export default App;