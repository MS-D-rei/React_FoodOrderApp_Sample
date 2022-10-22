import { StyledModalOverlayDiv } from "@/components/UI/Modal/ModalStyle";
import React from "react";

function ModalOverlay(props: { children: React.ReactNode }) {
  return (
    <StyledModalOverlayDiv>
      {props.children}
    </StyledModalOverlayDiv>
  )
}

export default ModalOverlay;