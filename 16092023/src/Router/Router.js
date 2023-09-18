import { Outlet, createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import LandingPage from "../Components/Dashboard/LandingPage";
import UserList from "../Components/User/UserList";
import UserDetails from "../Components/User/UserDetails";
const router = createBrowserRouter([
  {
    path: "/", 
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
      { path: "userlist", element: <UserList /> },
      { path: "userdetails", element: <UserDetails /> }
    ]
  }
]);

export default router;