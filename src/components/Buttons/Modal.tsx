import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal">
        {children}
        <button onClick={onClose} type="button">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default Modal;
