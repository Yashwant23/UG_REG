import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CustomInputField from './components/Pages/Regestration Componets/FormDisplay';
import FormDisplay from './components/Pages/Regestration Componets/FormDisplay';
import FormExample from './components/Pages/Regestration Componets/FormDisplay';
import LoginPage from './components/Pages/LoginPage';
import Navbar from './components/Navbar';
import fields from './formDetails';
import PageForm from './components/Pages/Regestration Componets/PageForm';
import Dashboard from './components/Pages/Dashboard';
import FeePayment from './components/Pages/FeePayment';
import Registration from './components/Pages/Regestration Componets/Registration';
import Downloads from './components/Downloads';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><LoginPage /></>
      // element:<><Navbar/><Dashboard/></>
    },
    {
      path: "/dashboard",
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: "/feepayment",
      element: <><Navbar /><Registration /></>
    },
    {
      path: "/registration",
      element: <><Navbar /><Registration /></>
    },
    {
      path: "/downloads",
      element: <><Navbar /><Downloads /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App;
