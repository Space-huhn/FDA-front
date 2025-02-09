"use client"
import styled from "@emotion/styled";

export const StyledLoader = styled('div')(() => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "base",
  position: "relative",

  ".logo": {
    position: "absolute",
    top: '160px',
    left: '170px',

    'svg': {
      width: '150px',
    }
  },

  ".loader": {
    position: "absolute",
    top: "0",
    left: "0",
  }
}))