import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
