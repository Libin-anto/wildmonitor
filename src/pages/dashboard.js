import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "../styles/dashboard.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Dashboard() {
  // Camera state
  const [cameraIP, setCameraIP] = useState("");
  const [cameraNumber, setCameraNumber] = useState("");
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    if (cameraIP && cameraNumber) {
      setConnected(true);
    } else {
      alert("Enter Camera IP and Number!");
    }
  };

  return (
    <>
      <div>
        <h2>Sanctuary Control Center</h2>

        {/* Cards */}
        <div className="cards">
          <div className="card blue">
            Active Cameras <h3>6</h3>
          </div>
          <div className="card green">
            Rangers On Duty <h3>12</h3>
          </div>
          <div className="card red">
            Conservation Alerts <h3>5</h3>
          </div>
          <div className="card orange">
            Protected Area <h3>2847 ha</h3>
          </div>
        </div>

        {/* Grid with Map + Camera same size */}
        <div className="dashboard-grid">
          {/* Map */}
          <div className="dashboard-box">
            <h3>Sanctuary Map</h3>
            <MapContainer
              center={[24.5, 77.0]}
              zoom={7}
              style={{ height: "250px", borderRadius: "12px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={[24.5, 77.0]}>
                <Popup>Main Gate</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Camera */}
          <div className="dashboard-box">
            <h3>Live Feed</h3>
            <div className="camera-box">
              {connected ? (
                <iframe
                  title="Camera Feed"
                  src={`http://${cameraIP}`}
                  style={{ width: "100%", height: "250px", border: "none" }}
                ></iframe>
              ) : (
                <p className="no-camera">No Camera Connected</p>
              )}
            </div>

            {/* Camera Config */}
            <div className="camera-config">
              <input
                type="text"
                placeholder="Camera IP"
                value={cameraIP}
                onChange={(e) => setCameraIP(e.target.value)}
              />
              <input
                type="text"
                placeholder="Camera Number"
                value={cameraNumber}
                onChange={(e) => setCameraNumber(e.target.value)}
              />
              <button onClick={handleConnect}>Connect Camera</button>
            </div>
          </div>
        </div>

        {/* Alerts Table */}
        <div className="alerts">
          <h3>Alerts</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Location</th>
                <th>Confidence</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unauthorized Person</td>
                <td>North Sector</td>
                <td>87%</td>
                <td>30 min ago</td>
                <td><span className="status high">HIGH</span></td>
              </tr>
              <tr>
                <td>Vehicle Seen</td>
                <td>East Patrol</td>
                <td>92%</td>
                <td>2 hrs ago</td>
                <td><span className="status critical">CRITICAL</span></td>
              </tr>
              <tr>
                <td>Elephant Herd</td>
                <td>South Ridge</td>
                <td>78%</td>
                <td>1 hr ago</td>
                <td><span className="status info">INFO</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
