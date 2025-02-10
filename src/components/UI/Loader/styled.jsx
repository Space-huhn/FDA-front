"use client"
import styled from "@emotion/styled";
import {hidden} from "next/dist/lib/picocolors";

export const StyledLoader = styled('div')(() => ({
  // position: 'relative',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
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


  // ".logo": {
  //   position: "absolute",
  //   top: '160px',
  //   left: '170px',
  //
  //   'svg': {
  //     width: '150px',
  //   }
  // },

  ".container .loaderOne": {
    display: 'flex',
    alignSelf: 'flex-start',
    transform: 'scale(5)'
  },

  ".container .loaderTwo": {
    display: 'flex',
    alignSelf: 'flex-end',
    transform: 'scale(9)'
  },

  '.logo': {
    position: 'absolute',
    zIndex: '50',
    transform: 'scale(1.3)'
  }
}))