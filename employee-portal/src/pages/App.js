import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NotificationBell from "../components/NotificationBell"; // Import NotificationBell
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Attendance from "../components/Attendance";
import ForgotPassword from "./ForgotPassword";
import GeneralRequest from "../components/GeneralRequest";
import LeaveRequest from "../components/LeaveRequest";
import RequisitionHistory from "../components/RequisitionHistory";
import Payroll from "../components/Payroll";
import Settings from "../components/Settings";
import AssistBotHelp from "../components/AssistBotHelp";

import "./App.css";

const App = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/*"
          element={
            <div className={`app-container ${isMinimized ? "sidebar-minimized" : ""}`}>
              <Sidebar isMinimized={isMinimized} toggleSidebar={toggleSidebar} />
              <div className="top-bar">
                <NotificationBell /> {/* Add NotificationBell here */}
              </div>
              <div className="page-content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/requisition/general" element={<GeneralRequest />} />
                  <Route path="/requisition/leave" element={<LeaveRequest />} />
                  <Route path="/requisition/history" element={<RequisitionHistory />} />
                  <Route path="/payroll" element={<Payroll />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/assistbothelp" element={<AssistBotHelp />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;