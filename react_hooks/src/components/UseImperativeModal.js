import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }));

  if (!isOpen) return null;

  return (
    <div style={{ background: "lightgray", padding: "20px" }}>
      <p>This is a modal</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
});

function UseImperativeModal() {
    const modalRef = useRef();

  return (
    <div>
      <h2>UseImperativeHandle Hook</h2>
        <button onClick={() => modalRef.current.open()}>Open Modal</button>
        <Modal ref={modalRef} />
    </div>
  )
}

export default UseImperativeModal