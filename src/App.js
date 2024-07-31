import React from 'react'

import {BrowserRouter , Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Registration from './pages/Registration';
import ServicesPage from './pages/ServicesPage';
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

