import React from "react";
import "./PopUp.scss";

export function PopUp({ header, show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="modal-box">
      <div className="content">
        <span className="icon-delete" onClick={() => onClose()}></span>
        <div className="header-box">{header}</div>
        <div className="content-box">{children}</div>
      </div>
    </div>
  );
}
