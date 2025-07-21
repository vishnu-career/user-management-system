// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import CandidateForm from './components/CandidateForm';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<CandidateList />} />
          <Route path="/add" element={<CandidateForm />} />
          <Route path="/edit/:id" element={<CandidateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
