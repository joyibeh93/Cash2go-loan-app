import React from "react";
import Models from "./Models";
import Notifications2 from "./Notifications2";
import Security from "./Security";
import Activity from "./Activity";
import { useState } from "react";

const SettingContent = () => {
  const [setting, setSetting] = useState(false);
  const [markAllClicked, setMarkAllClicked] = useState(false);
 const [modalOpen, setModalOpen] = useState(false);

  const handleMarkAllClick = () => {
    setMarkAllClicked(!markAllClicked);
  };


  return (
    <div className="messageContent" >
         <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Settings <span>&gt;</span>{" "}
            {setting === "models" ? "Models" : "Notification"  }
             </p>
          <h1>Settings</h1>
        </div>
        {setting === "Model" ? (
          <div className="exit-new">
            <button className="markAll">Manage</button>
            {markAllClicked ? (
              <button className="markRead" onClick={() => setModalOpen(true)}>
                Create New Model
              </button>
            ) : (
              <button className="markRead" onClick={handleMarkAllClick}>
                Create New Model
              </button>
            )}
          </div>
            


       ) : (
          <div className="back-nav"> 
            <div className="settings-button">
          <button className="markAll">Manage</button>
          <button className="markRead">Create new Model</button>
          </div>
          </div>
        )} 


      </div>
    
      <div className="">
        <div className="msg-nav">
          <div className="msg-section" onClick={() => setSetting("models")}>
            <p>Models</p>
            <div
              className="msg-line"
              style={
                setting === "models"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }></div>
          </div>
        </div>
        <div className="msg-section" onClick={() => setSetting("notification2")}>
          <p>Notifications</p>
          <div
            className="msg-line"
            style={
              setting === "models"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
        </div>
        <div className="msg-section" onClick={() => setSetting("security")}>
          <p>Security & Privacy</p>
          <div
            className="msg-line add"
            style={
              setting === "security&privacy"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
        </div>
        <div className="msg-section" onClick={() => setSetting("activity")}>
          <p>Activity</p>
          <div
            className="msg-line"
            style={
              setting === "activity"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
        </div>
        {setting === "models" ? (
          <Models />
        ) : setting === "notifications2" ? (
          <Notifications2 />
        ) : setting === "security" ? (
          <Security />
        ) : (
          <Activity />
        )}
      </div>
    </div>
  );
};

export default SettingContent;
