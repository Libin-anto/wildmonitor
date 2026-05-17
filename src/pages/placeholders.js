import React from "react";
import "../styles/dashboard.css"; // Reuse existing styles where possible

export const AnalyticsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontSize: '1.8em', color: '#232946', marginBottom: '20px' }}>Analytics Overview</h2>
    <div className="cards" style={{ width: '100%' }}>
      <div className="card blue">
        Animal Sightings <h3>1,248</h3>
      </div>
      <div className="card green">
        Poaching Activity <h3>-14%</h3>
      </div>
      <div className="card orange">
        Drone Coverage <h3>85%</h3>
      </div>
    </div>
    <div style={{ marginTop: '30px', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
      [ Interactive Activity Chart Placeholder ]
    </div>
  </div>
);

export const AlertsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontSize: '1.8em', color: '#232946', marginBottom: '20px' }}>Recent Alerts</h2>
    <div className="alerts" style={{ width: '100%', height: 'auto', padding: '25px' }}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Zone</th>
            <th>Time</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Motion Detected</td>
            <td>Sector Alpha</td>
            <td>10 mins ago</td>
            <td><span className="status high">HIGH</span></td>
            <td><button style={{ padding: '5px 10px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Review</button></td>
          </tr>
          <tr>
            <td>Camera Offline</td>
            <td>Sector Bravo</td>
            <td>1 hour ago</td>
            <td><span className="status critical">CRITICAL</span></td>
            <td><button style={{ padding: '5px 10px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Dispatch</button></td>
          </tr>
          <tr>
            <td>Low Battery (Drone)</td>
            <td>Sector Charlie</td>
            <td>3 hours ago</td>
            <td><span className="status info">INFO</span></td>
            <td><button style={{ padding: '5px 10px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Acknowledge</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const TeamPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontSize: '1.8em', color: '#232946', marginBottom: '20px' }}>Ranger Team</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {[
        { name: "John Doe", role: "Head Ranger", zone: "Alpha", status: "Active" },
        { name: "Jane Smith", role: "Drone Operator", zone: "Bravo", status: "Active" },
        { name: "Michael Chang", role: "Veterinarian", zone: "HQ", status: "On Leave" },
        { name: "Sarah Connor", role: "Field Ranger", zone: "Charlie", status: "Active" }
      ].map((member, i) => (
        <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#3e8efd', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', fontWeight: 'bold' }}>
            {member.name.charAt(0)}
          </div>
          <h3 style={{ margin: 0, color: '#232946' }}>{member.name}</h3>
          <p style={{ margin: 0, color: '#718096', fontSize: '0.9em' }}>{member.role}</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85em' }}>
            <span>Zone: {member.zone}</span>
            <span style={{ color: member.status === 'Active' ? '#48bb78' : '#a0aec0', fontWeight: 'bold' }}>{member.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ReportsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontSize: '1.8em', color: '#232946', marginBottom: '20px' }}>Monthly Reports</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {['May 2026 - Sanctuary Health Report', 'April 2026 - Drone Operations', 'March 2026 - Ranger Patrol Logs'].map((report, i) => (
        <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ padding: '10px', background: '#ebf8ff', color: '#3182ce', borderRadius: '8px' }}>📄</div>
            <span style={{ fontWeight: '600', color: '#2d3748' }}>{report}</span>
          </div>
          <button style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #3182ce', color: '#3182ce', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Download PDF</button>
        </div>
      ))}
    </div>
  </div>
);

export const SettingsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontSize: '1.8em', color: '#232946', marginBottom: '20px' }}>System Settings</h2>
    <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
        <div>
          <h4 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Push Notifications</h4>
          <p style={{ margin: 0, fontSize: '0.85em', color: '#718096' }}>Receive alerts on your mobile device</p>
        </div>
        <input type="checkbox" defaultChecked style={{ transform: 'scale(1.5)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
        <div>
          <h4 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Dark Mode</h4>
          <p style={{ margin: 0, fontSize: '0.85em', color: '#718096' }}>Toggle application theme</p>
        </div>
        <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Automated Drones</h4>
          <p style={{ margin: 0, fontSize: '0.85em', color: '#718096' }}>Allow drones to self-dispatch on high priority alerts</p>
        </div>
        <input type="checkbox" defaultChecked style={{ transform: 'scale(1.5)' }} />
      </div>
      <button style={{ marginTop: '10px', padding: '12px', background: '#3e8efd', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Save Settings</button>
    </div>
  </div>
);
