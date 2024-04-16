import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CustomInputField from './components/FormDisplay';
import FormDisplay from './components/FormDisplay';
import FormExample from './components/FormDisplay';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import fields from './formDetails';
import PageForm from './components/PageForm';
import Form5 from './components/Form5';
import Form7 from './components/Form7';
import Form8 from './components/Form8';

import Dashboard from './components/Dashboard';
import FeePayment from './components/FeePayment';
import Registration from './components/Registration';
import Downloads from './components/Downloads';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Dashboard/></>
    },
    {
      path:"/dashboard",
      element:<><Navbar/><Dashboard/></>
    },
    {
      path:"/feepayment",
      element:<><Navbar/><Registration /></>
    },
    {
      path:"/registration",
      element:<><Navbar/><Registration /></>
    },
    {
      path:"/downloads",
      element:<><Navbar/><Downloads /></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
);

}

export default App;
