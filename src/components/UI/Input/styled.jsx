"use client"
import styled from "@emotion/styled";

export const InputStyled = styled("div")(() => ({
   width: "100%",
   maxWidth: "370px",

   ".label": {
      fontSize: "13px",
      textTransform: "uppercase",
      color: "#32343E",
   },
   ".icon": {
      color: "#B4B9CA",
   },
   ".inputWrapper": {
      position: "relative",
   },
   ".showButton": {
      position: "absolute",
      right: "10px",
      zIndex: "10",
      top: "50%",
      transform: "translateY(-50%)",
   },
}))