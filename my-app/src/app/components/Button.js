"use client";

import React from 'react';

const Button = ({ value, onClick, className }) => {
  return (
    <span className={className} data-testid={`button-${value}`} onClick={() => onClick(value)}>
      {value}
    </span>
  );
};

export default Button;
