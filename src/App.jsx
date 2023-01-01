import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
