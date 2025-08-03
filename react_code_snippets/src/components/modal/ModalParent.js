import React, { useState } from 'react';
import Modal from './Modal';

function ModalParent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a simple modal popup!</p>
      </Modal>
      <hr />
    </div>
  );
}

export default ModalParent;
