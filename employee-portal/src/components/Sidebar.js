import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Employee Portal</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/requisition">Requisition</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
