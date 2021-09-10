import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Godflix-admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF6wcmbb3V0Ig/profile-displayphoto-shrink_200_200/0/1623798983861?e=1636588800&v=beta&t=75jZWwLGU8E_6eme4ACL2UGEAEa6frXYqnzgUO4qz6Y" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
