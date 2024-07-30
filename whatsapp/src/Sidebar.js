import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from "@mui/material";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h1>I'm a Sidebar</h1>
      <div className="sidebar__header">
        <Avatar src="https://stockcake.com/i/modern-office-interior_1158879_803137"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
