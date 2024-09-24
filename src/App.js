// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QrCodeGenerator from './QrCodeGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrCodeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;

