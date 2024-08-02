import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import DataUpload from './DataUpload';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/data-upload">Upload de Dados</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-upload" element={<DataUpload />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
