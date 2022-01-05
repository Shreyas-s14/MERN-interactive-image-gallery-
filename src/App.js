import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageGrid from "./components/ImageGrid";
import Title from "./components/Title";
import Uploadform from "./components/Upload";
import Cars from "./components/cars.js";
import Nature from "./components/nature";
import Space from "./components/space";
import Form from "./components/Form";
import Login from "./components/Login";


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}  />
          <Route path="/upload" element={<Uploadform/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/gallery/cars" element={<Cars/>} />
          <Route path="/gallery/nature" element={<Nature/>} />
          <Route path="/gallery/space" element={<Space/>} />
          <Route path="/sign-up" element={<Form/>} />
          <Route path="/log-in" element={<Login/>} />
          <Route path="/dash-board" element={<Dashboard/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
