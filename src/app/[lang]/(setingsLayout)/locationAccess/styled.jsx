"use client";
import styled from "@emotion/styled";

export const AccessLocationStyled = styled("div")(({theme: {breakpoints}}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',

  ".default-default": {
    color: 'rgba(0,0,0,0.3)',
  },

  '.bottomFormNavigation': {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    gap: '30px'
  },

  ".controlElements": {
    maxWidth: '450px',
    width: '100%',
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    flexDirection: 'column'
  }
}))