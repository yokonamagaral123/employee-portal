import React, { useState } from "react";
import "./Profile.css";
import profileImage from "../assets/profile.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-main">
      <div className="profile-banner">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>Arvin Joseph Geguna</h2>
          <p>Philippine School of Business and Administration</p>
        </div>
      </div>

      <div className="profile-details">
        <h3>My Info:</h3>
        <ul>
          <li><strong>Campus Branch:</strong> Makati</li>
          <li><strong>Job Title/Position:</strong> HR Associate</li>
          <li><strong>Department:</strong> Human Resources</li>
          <li><strong>Employee ID:</strong> 001234</li>
          <li><strong>Employment Type:</strong> Full-Time</li>
          <li><strong>Location:</strong> Metro Manila</li>
          <li><strong>Birth Date:</strong> January 15, 2003</li>
        </ul>

        <h3>Contact:</h3>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            ) : (
              info.email || "arvin@example.com"
            )}
          </li>
          <li>
            <strong>Contact Number:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="contact"
                value={info.contact}
                onChange={handleChange}
              />
            ) : (
              info.contact || "+63 900 123 4567"
            )}
          </li>
        </ul>

        <button className="edit-button" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
