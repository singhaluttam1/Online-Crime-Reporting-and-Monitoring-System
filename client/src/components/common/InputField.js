// src/components/common/InputField.js
import React from 'react';

const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  className = 'form-control',
}) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
};

export default InputField;