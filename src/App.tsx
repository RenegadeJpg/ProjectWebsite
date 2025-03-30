import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Baboons from "./ProjectsPage/Baboon/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-primary-lighter/20">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/baboons" element={<Baboons />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
