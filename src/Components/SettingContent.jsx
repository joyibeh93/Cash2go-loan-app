import React from "react";
import Models from "./Models";
import Notifications2 from "./Notifications2";
import Security from "./Security";
import Activity from "./Activity";
import { useState } from "react";

const SettingContent = () => {
  const [setting, setSetting] = useState(false);
  const [markAllClicked, setMarkAllClicked] = useState(false);
  const [setModalOpen] = useState(false);

  const handleMarkAllClick = () => {
    setMarkAllClicked(!markAllClicked);
    //setClickAll(true);
  };

 return (
  <div className="messageContent">
    <div className="msg-top-bar">
      <div>
        <p className="msg-cnt-mb">
          Settings <span>&gt;</span>{" "}
          {setting === "model" ? "Model" : "Notification"}
        </p>
        <h1>Settings</h1>
      </div>
      {setting === "Model" ? (
        <div className="exit-new">
          <button className="markAll" >
            Manage
          </button>
          {markAllClicked ? (
            <button className="markRead" onClick={() => setModalOpen(true)}>
              Create new model
            </button>
          ) : (
            <button className="markRead" onClick={handleMarkAllClick}>
             Create new Model
           </button>
           )
        }
        </div>
      ) : (
        <div className="back-nav">
           <button className="markAll" >
            Turn ALL OFF
          </button>
          {markAllClicked ? (
            <button className="markRead" onClick={() => setModalOpen(true)}>
              Turn  ALL ON
            </button>
          ) : (
            <button className="markRead" onClick={handleMarkAllClick}>
             Turn ALL On
           </button>
           )
        }
      
        </div>
      )}
    </div>
    <div className="msg-nav">
      <div className="msg-section" onClick={() => setSetting("Model")}>
        <p>Model</p>
        <div
          className="msg-line"
          style={
            setting=== "Model"
              ? { backgroundColor: "#747a74" }
              : { backgroundColor: "#bac0ba" }
          }
        ></div>
      </div>
      <div className="msg-section" onClick={() => setSetting("notification")}>
        <p>Notification</p>
        <div
          className="msg-line"
          style={
            setting === "notification"
              ? { backgroundColor: "#747a74" }
              : { backgroundColor: "#bac0ba" }
          }
        ></div>
      </div>
      <div className="msg-section"onClick={() => setSetting("security")}>
        <p>Security & Privacy</p>
        <div className="msg-line"
       style={
        setting === "security"
          ? { backgroundColor: "#747a74" }
          : { backgroundColor: "#bac0ba" }
      } ></div>
      </div>
      <div className="msg-section" onClick={() => setSetting("activity")}>
        <p>Activity</p>
        <div
          className="msg-line add"
          style={
            setting === "activity"
              ? { backgroundColor: "#747a74" }
              : { backgroundColor: "#bac0ba" }
          }
        ></div>
    {setting === "Model" ? (
      <Models  />
    ) : setting === "notification" ? (
      <Notifications2 />
    ) : setting === "security" ? (
      <Security />
    ) : (
      <Activity/>
    )}
  </div>
  </div>
  </div>
);
};

export default SettingContent;
