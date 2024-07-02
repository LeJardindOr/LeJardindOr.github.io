import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import MenuPage from "./components/Menu";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import ReservePage from "./components/Reserve";
import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Reserve" element={<ReservePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
