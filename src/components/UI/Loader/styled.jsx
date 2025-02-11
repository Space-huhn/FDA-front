"use client"
import styled from "@emotion/styled";

export const StyledLoader = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  backgroundColor: '#fff',
  zIndex: 1200,
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  ".container": {
    display: "flex",
    position: 'absolute',
    top: '0',
    left: '0',
    minWidth: '100%',
    minHeight: '100%',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ".container .loaderOne": {
    display: 'flex',
    alignSelf: 'flex-start',
    transform: 'scale(5)',
  },

  ".container .loaderTwo": {
    display: 'flex',
    alignSelf: 'flex-end',
    transform: 'scale(9)'
  },

  ["@media (min-width: 769px)"]: {
    ".container .loaderTwo, .container .loaderOne": {
      display: 'none',
    },
  },

  '.logo': {
    position: 'absolute',
    zIndex: '50',
    transform: 'scale(1.3)'
  },
}))

