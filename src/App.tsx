import React from 'react';
import './App.css';
//import Main from './components/Main';
import Navbar from './components/Navbar';

import { BrowserRouter } from "react-router-dom";

const App:React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>

    </>
  );
}

export default App;
