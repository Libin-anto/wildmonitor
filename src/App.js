import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";   
import LiveFeed from "./pages/livefeed";    
import LocationPage from "./pages/locationpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/livefeed" element={<LiveFeed />} />  
        <Route path="/map" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}
export default App;
