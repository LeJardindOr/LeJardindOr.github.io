import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import BookingPage from "./components/Booking";
import ServicesPage from "./components/Services";
import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
