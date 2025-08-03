import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className === 'modal-overlay') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={styles.overlay}>
      <div className="modal-content" style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>×</button>
        {children}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    minWidth: '300px'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '18px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
  }
};

export default Modal;
