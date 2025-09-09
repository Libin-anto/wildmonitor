// Sidebar.js
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box, Tooltip, Divider, IconButton } from "@mui/material";
import {
  Dashboard,
  Videocam,
  Map,
  Timeline,
  Warning,
  Group,
  Report,
  Settings,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";   // 🔹 Import for navigation
import "../styles/sidebar.css";

// Sidebar menu items with routes
const sidebarItems = [
  { label: "Dashboard", icon: <Dashboard />, route: "/dashboard" },
  { label: "Live Feeds", icon: <Videocam />, route: "/livefeed" },
  { label: "Interactive Map", icon: <Map />, route: "/map" },
  { label: "Analytics", icon: <Timeline />, route: "/analytics" },
  { label: "Alerts", icon: <Warning />, route: "/alerts", badge: "!" },
  { label: "Team", icon: <Group />, route: "/team" },
  { label: "Reports", icon: <Report />, route: "/reports" },
  { label: "Settings", icon: <Settings />, route: "/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();  // 🔹 navigation hook

  return (
    <Drawer
      variant="permanent"
      className={open ? "sidebar-root open" : "sidebar-root"}
    >
      <Box className="sidebar-header">
        <IconButton onClick={() => setOpen(!open)} size="small">
          {open ? <ChevronLeft /> : <Menu />}
        </IconButton>
        {open && (
          <Typography className="sidebar-title" variant="h6">
            WildMonitor
          </Typography>
        )}
      </Box>
      <Divider />
      <List className="sidebar-list">
        {sidebarItems.map(({ label, icon, badge, route }) => (
          <Tooltip key={label} title={!open ? label : ""} placement="right" arrow>
            <ListItem
              button
              className="sidebar-item"
              onClick={() => navigate(route)}   // 🔹 Navigate on click
            >
              <ListItemIcon className="sidebar-icon">{icon}</ListItemIcon>
              {open && (
                <ListItemText
                  primary={label}
                  classes={{ primary: "sidebar-label" }}
                />
              )}
              {badge && <span className="sidebar-badge">{badge}</span>}
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Box className="sidebar-profile">
        <Avatar className="sidebar-avatar" />
        {open && (
          <Box>
            <Typography className="sidebar-username">Admin (You)</Typography>
            <Typography className="sidebar-role">Administrator</Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
