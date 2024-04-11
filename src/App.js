import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomInputField from './components/FormDisplay';
import FormDisplay from './components/FormDisplay';
import FormExample from './components/FormDisplay';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import fields from './formDetails';
import PageForm from './components/PageForm';

function App() {
  return (
    <>
      <Navbar />
      <PageForm />
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
