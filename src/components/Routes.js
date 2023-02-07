import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import Read from './Read';
import Update from './Update';
import Login from './login';


const Rotas = () => {
  return (
    <Router>
        <Routes>
            
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
        </Routes>
    </Router>
  )
}

export default Rotas;