import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from './pages/Contact';
// import About from './pages/About';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
import Produktet from "./pages/Produktet";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Produktet />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
