"use client";

import React from 'react';

const Display = ({ history, currentValue}) => {
  return (
    <div className="input">
      <div className="history">{history}</div>
      <div className="current">{currentValue}</div>
    </div>
  );
};

export default Display;
