import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";   
import LiveFeed from "./pages/livefeed";    
import LocationPage from "./pages/locationpage";
import { AnalyticsPage, AlertsPage, TeamPage, ReportsPage, SettingsPage } from "./pages/placeholders";
import "./styles/dashboard.css"; // Ensure CSS is available for Layout

// Layout component that contains the Sidebar and the main content area
const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content" style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* All routes inside DashboardLayout will have the Sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/livefeed" element={<LiveFeed />} />  
          <Route path="/map" element={<LocationPage />} />
          
          {/* Mock routes from sidebar */}
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
