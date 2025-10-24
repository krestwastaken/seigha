// components/ParrotBadge.jsx
import React from "react";
import "./ParrotBadge.css"; // we'll style it here

const ParrotBadge = () => {
  return (
    <div className="container">
      <div className="circle">
        <svg
          className="parrot"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9v3.29c0 .69-.28 1.35-.73 1.84l-1.47 1.53c-.29.3-.29.77 0 1.06l1.47 1.53c.45.49.73 1.15.73 1.84V21c0 .55.45 1 1 1h8c3.87 0 7-3.13 7-7V9c0-3.87-3.13-7-7-7h-2z" />
        </svg>
        <div className="badge">B</div>
      </div>
      <div className="arc outer"></div>
      <div className="arc inner"></div>
    </div>
  );
};

export default ParrotBadge;
