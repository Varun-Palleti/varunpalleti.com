import React from "react";

const Boulder: React.FC = () => {
  return (
    <div className="boulder-container">
      <svg viewBox="0 0 1000 600" className="boulder">
        <defs>
          <linearGradient
            id="wall-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#b0b0b0" />
          </linearGradient>
        </defs>

        {/* Main wall shape */}
        <path d="M0,0 L1000,0 L900,600 L100,600 Z" fill="url(#wall-gradient)" />

        {/* Abstract shapes */}
        <polygon points="200,100 300,50 400,150 250,200" fill="#4a90e2" />
        <polygon points="600,200 750,150 800,300 650,350" fill="#50e3c2" />
        <polygon points="100,400 250,350 300,500 150,550" fill="#f5a623" />
        <polygon points="700,400 850,450 800,550 650,500" fill="#bd10e0" />

        {/* Climbing holds */}
        <circle cx="150" cy="150" r="20" fill="#ff5252" className="hold" />
        <circle cx="450" cy="250" r="20" fill="#ff5252" className="hold" />
        <circle cx="750" cy="150" r="20" fill="#ff5252" className="hold" />
        <circle cx="250" cy="400" r="20" fill="#ff5252" className="hold" />
        <circle cx="600" cy="450" r="20" fill="#ff5252" className="hold" />

        {/* Add more shapes and holds as needed */}
      </svg>
      <div className="hold-label about">About</div>
      <div className="hold-label projects">Projects</div>
      <div className="hold-label skills">Skills</div>
      <div className="hold-label contact">Contact</div>
    </div>
  );
};

export default Boulder;
