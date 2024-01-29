import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<div> 404 Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
