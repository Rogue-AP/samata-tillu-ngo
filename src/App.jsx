import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
