import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <HashRouter>
          <Route path="/" element={<HomePage />} />
          <p>Test</p>
        </HashRouter>
      </Routes>
    </div>
  );
}

export default App;
