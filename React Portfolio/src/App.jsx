// This file is the main component of the application. It uses the react-router-dom to navigate between the different pages of the application. The Header and Footer components are imported and used in this file. The AboutMe, Portfolio, Contact, and Resume pages are imported and used in this file. The Routes and Route components are used to navigate between the different pages of the application.
import './App.css'
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;