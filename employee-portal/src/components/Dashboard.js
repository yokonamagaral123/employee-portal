import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Dashboard</header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <h3>Menu</h3>
          <ul>
            <li>Profile</li>
            <li>Attendance</li>
            <li>Requisition</li>
            <li>Payroll</li>
          </ul>
        </aside>
        <main className="dashboard-main">
          <h2>Welcome to the Employee Portal</h2>
          <p>This is your main dashboard content.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
