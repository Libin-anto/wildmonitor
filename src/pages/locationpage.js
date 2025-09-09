// pages/LocationPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/locationpage.css";

export default function LocationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    zooName: "",
    location: "",
    uniqueId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Save details in localStorage (temporary, later backend DB)
    localStorage.setItem("zooDetails", JSON.stringify(formData));

    // ✅ Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="location-container">
      <h2>Enter Zoo / Sanctuary Details</h2>
      <form className="location-form" onSubmit={handleSubmit}>
        <label>
          Zoo / Sanctuary Name:
          <input
            type="text"
            name="zooName"
            value={formData.zooName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Unique ID:
          <input
            type="text"
            name="uniqueId"
            value={formData.uniqueId}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Continue to Dashboard</button>
      </form>
    </div>
  );
}
