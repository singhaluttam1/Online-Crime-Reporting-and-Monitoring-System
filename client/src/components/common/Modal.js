// src/components/common/Modal.js
import React from 'react';
import './Modal.css'; // optional for fade-in styling

const Modal = ({ title, show, onClose, onConfirm, children }) => {
  if (!show) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
          )}
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            {onConfirm && (
              <button className="btn btn-primary" onClick={onConfirm}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;