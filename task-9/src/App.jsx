import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter  } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Career from "./components/Career"
import Contact from "./components/Contact"



function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Home></Home>
        <Career></Career>
        <About></About>
        <Contact></Contact>
    </BrowserRouter>
  );
}

export default App
