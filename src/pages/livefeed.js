import React, { useState } from "react";
import "../styles/livefeed.css";

export default function LiveFeed() {
  const [cameraCount, setCameraCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleGenerate = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num) && num > 0) {
      setCameraCount(num);
    }
  };

  return (
    <div className="livefeed-container">
      <h2>Live Camera Feeds</h2>

      <div className="camera-input">
        <input
          type="number"
          placeholder="Enter number of cameras"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div className="camera-grid">
        {Array.from({ length: cameraCount }, (_, index) => (
          <div key={index} className="camera-card">
            <div className="camera-preview">
              <p>No Camera Connected</p>
            </div>
            <input type="text" placeholder="Camera IP" />
            <input type="text" placeholder={`Camera Number ${index + 1}`} />
            <button className="connect-btn">Connect Camera</button>
          </div>
        ))}
      </div>
    </div>
  );
}
