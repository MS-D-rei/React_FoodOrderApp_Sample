import React from 'react';
import ReactDOM from 'react-dom';
import { StyledBackdropDiv, StyledModalOverlayDiv } from './ModalStyle';

interface ModalProps {
  onHideCart: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

function Modal({ onHideCart, children }: ModalProps) {
  const portalElement = document.getElementById('overlays') as HTMLDivElement;

  return (
    <>
      {ReactDOM.createPortal(
        <StyledBackdropDiv onClick={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <StyledModalOverlayDiv>{children}</StyledModalOverlayDiv>,
        portalElement
      )}
    </>
  );
}

export default Modal;
