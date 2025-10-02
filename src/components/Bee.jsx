import React from "react";

export default function Bee({ className, style }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={`bee absolute w-12 h-12 ${className}`}
      style={style}
    >
      {/* Body */}
      <ellipse cx="32" cy="40" rx="14" ry="10" fill="gold" stroke="black" strokeWidth="2" />
      
      {/* Stripes */}
      <rect x="24" y="34" width="4" height="12" fill="black" />
      <rect x="32" y="34" width="4" height="12" fill="black" />
      <rect x="40" y="34" width="4" height="12" fill="black" />

      {/* Wings */}
      <ellipse
        className="wing"
        cx="24"
        cy="28"
        rx="6"
        ry="12"
        fill="skyblue"
        opacity="0.6"
      />
      <ellipse
        className="wing"
        cx="40"
        cy="28"
        rx="6"
        ry="12"
        fill="skyblue"
        opacity="0.6"
      />

      {/* Head */}
      <circle cx="20" cy="40" r="6" fill="black" />
    </svg>
  );
}
