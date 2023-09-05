import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Career from './Components/Career/Career';
import ContactUs from './Components/ContactUs/ContactUs';
import Dashboard from './Components/Dashboard/Dashboard';
import NoPage from './Components/NoPage/NoPage';
import LoginSignup from './Components/LoginSignup/LoginSignup';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import App from './App';
function AppRoot() {
  return (
    <>
   
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Menu />}>
          <Route index element={<App />} />
          <Route path="career" element={<Career />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="loginSignup" element={<LoginSignup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoot />);