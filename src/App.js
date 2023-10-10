import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" component={Main}/>
      
      <Route  path="/Header" component={Header}/>
      
      <Route path="/Footer" component={Footer}/>
      
      </Routes>
    </Router>
  );
}

export default App;
