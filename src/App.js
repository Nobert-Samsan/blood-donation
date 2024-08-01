import React from 'react'
import  { useState } from "react";
import {BrowserRouter , Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Registration from './pages/Registration';
import ServicesPage from './pages/ServicesPage';
import About from "./pages/About";
import { donors } from "./data/donors";
import Search from './components/Search'; 
import DonorList from "./components/DonorList";
import DonorDetails from "./components/DonorDetails";
import Login from './pages/Login';
import SignUp from './pages/SignUp ';

const App = () => {
  const [filteredDonors, setFilteredDonors] = useState(donors);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const handleSearch = (query) => {
    if (query) {
      setFilteredDonors(
        donors.filter((d) =>
          d.bloodGroup.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredDonors(donors);
    }
  };

  const handleSelectDonor = (donor) => {
    setSelectedDonor(donor);
  };

  const handleCloseDetails = () => {
    setSelectedDonor(null);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Search onSearch={handleSearch} />
        <DonorList donors={filteredDonors} onSelectDonor={handleSelectDonor} />
        {selectedDonor && (
          <DonorDetails donor={selectedDonor} onClose={handleCloseDetails} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App

