

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Providers from "./Components/Providers";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import RechargeBanner from "./Components/RechargeBanner";
import MainDashboard from "./Components/MainDashboard";
import RechargeView from "./Components/RechargeView";

function App() {
  return (
    <Router>
      <Routes>
  
        <Route
          path="/"
          element={
            <div className="bg-base-200 min-h-screen flex flex-col">
              <Navbar />
              <Hero />
              <RechargeBanner />
              <Providers />
              <About />
              <FAQ />
              <Footer />
             
            </div>
          }
        />

        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/RechargeView" element={<RechargeView />} />

      </Routes>
    </Router>
  );
}

export default App;
