// src/components/common/Toast.js
import React from 'react';

const Toast = ({ message, type = 'success', show = true }) => {
  if (!show) return null;

  return (
    <div className={`alert alert-${type} position-fixed top-0 end-0 m-3`} role="alert" style={{ zIndex: 9999 }}>
      {message}
    </div>
  );
};

export default Toast;