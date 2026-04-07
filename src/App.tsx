import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import DetailPage from './pages/DetailPage';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}