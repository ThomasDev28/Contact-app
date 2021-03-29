import React from "react";
import "./Contact.css";
const name = "Thomas";
const myLogo =
  "https://cdn.pixabay.com/photo/2017/02/01/09/55/boy-2029277_960_720.png";
const myDispo = "online";
function TheContact() {
  return (
    <div className="Contact">
      <img className="avatar" src={myLogo} />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">{myDispo}</p>
        </div>
      </div>
    </div>
  );
}

export default TheContact;