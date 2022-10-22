import Backdrop from "@/components/UI/Modal/Backdrop";
import ModalOverlay from "@/components/UI/Modal/ModalOverlay";
import React from "react";
import ReactDOM from "react-dom";
import { StyledBackdrop, StyledModalOverlayDiv } from "./ModalStyle";


function Modal(props: { children: React.ReactNode }) {
  const portalElement = document.getElementById('overlays') as HTMLDivElement

  return (
    <>
    {ReactDOM.createPortal(<StyledBackdrop />, portalElement)}
    {ReactDOM.createPortal(<StyledModalOverlayDiv>{props.children}</StyledModalOverlayDiv>, portalElement)}
    </>
  )
}

export default Modal;