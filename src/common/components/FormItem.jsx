import React from "react";
import "./FormItem.scss";

export function FormItem({ label, name, error, children }) {
  return (
    <div className="form-item">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className={"controller-box" + (error ? " error" : "")}>
        {children}
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
}
