// src/components/common/Button.js
import React from 'react';

const Button = ({
  label,
  onClick,
  type = 'button',
  className = 'btn btn-primary',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;