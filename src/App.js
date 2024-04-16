import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
function App() {
  return (
    <>
      <Navbar />
      {/* <Form5 /> */}
      {/* <Form7 /> */}
      <PageForm />
      {/* <Form8 /> */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
