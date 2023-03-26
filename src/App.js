import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Design from './components/pages/Design';
import Development from './components/pages/Development';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />

      </Routes>
    </Router>
  );
}

export default App;
