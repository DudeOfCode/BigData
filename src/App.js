import React from "react";
import "animate.css";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import DeepStorage from "./components/DeepStorage";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";

function Comingsoon() {
  <h1>
    This part of the site is currently not available. Do check back later! ;)
  </h1>
}

function App() {
  return (
    <div className="App">
      <div className="total">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Sign in" />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/DeepStorage" element={<DeepStorage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<Comingsoon />} />
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
