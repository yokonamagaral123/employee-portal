import React, { useEffect, useState } from "react";
import "./RequisitionHistory.css";

const RequisitionHistory = () => {
  const [requisitions, setRequisitions] = useState([]);

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/requisitions/all");
        const data = await response.json();
        if (response.ok) {
          setRequisitions(data.requisitions);
        } else {
          console.error("Failed to fetch requisitions:", data.message);
        }
      } catch (err) {
        console.error("Error fetching requisitions:", err);
      }
    };

    fetchRequisitions();
  }, []);

  return (
    <>
      {/* Requisition History Banner */}
      <div className="requisition-history-banner">
        <h1 className="requisition-history-banner-title">REQUISITION HISTORY</h1>
      </div>

      {/* Requisition History Content */}
      <div className="content">
        <h1>Requisition History</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Department/Leave Type</th>
              <th>Purpose</th>
              <th>Reason</th>
              <th>Date Requested</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.length > 0 ? (
              requisitions.map((req, index) => (
                <tr key={index}>
                  <td>{req.type}</td>
                  <td>{req.department || req.leaveType}</td>
                  <td>{req.purpose}</td>
                  <td>{req.reason}</td>
                  <td>{new Date(req.dateRequested).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No requisitions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequisitionHistory;