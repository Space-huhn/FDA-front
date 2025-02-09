"use client"
import styled from "@emotion/styled";
import {AppBar} from "@mui/material";


export const HeaderStyled = styled(AppBar)(({theme: {palette}}) => ({
  position: 'fixed',
  boxShadow: 'none',
  maxWidth: '1440px',
  width: '100%',
  padding: '0 20px !important',
  left: '50%',
  transform: 'translateX(-50%)',
  margin: '0 auto',
  backgroundColor: palette.colorCanvas.main,

  ".active": {
    transform: "rotate(90deg)",
  },

  ".wrapper": {
    position: "relative",
    fontSize: "12px",
  },
  ".toolbar": {
    display: "flex",
    justifyContent: "space-between",
    background: '#fff',
    boxShadow: 'none'
  },

  ".list": {
    position: "absolute",
    flexDirection: "column",
    opacity: "0",
    transition: "all .3s ease-in 0s",
    display: "none",
    zIndex: '10'
  },

  ".visible.list": {
    opacity: "1",
    display: "block",
  },

  ".rotateAnimation": {
    transition: "all .3s ease-in 0s",
  },

  ".logo": {
    padding: '10px',
  },

  ".headerRight": {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },

  ".loginButton": {
    // color: themeClassic?.palette?.primary?.main,
    color: palette.primary.main,
    fontSize: '30px'
  },

  ".deliveryPlace": {
    display: "flex",
    flexDirection: "column",
  },

  ".select": {
    padding: '0',
    borderRadius: '8px',
    fontSize: '14px',
    outlineWidth: '1px',
    width: '100%',
    color: '#676767',
    appearance: 'none',
    position: 'relative',
    display: 'block',
    // background: 'url(components/icons/Drop-down-triangle.svg) no-repeat'
  },

  ".select::before": {
    content: '"10"',
    // transform: 'rotate(180deg)',
    // display: 'inline-block',
    // width: '10px',
    // height: '100%',
    // position: 'absolute',
    // right: '0',
    // top: '0',
    // color: '#000',
    // zIndex: '10'

    // background: 'url("@/components/icons/Drop-down-triangle") no-repeat'

  },

  ".arrow": {
    display: 'inline-block',
    position: 'absolute',
  },

  '.select:focus::before': {
    transform: 'rotate(90deg)',
    backgroundColor: "rgb(209 213 219)",
    color: 'yellow',
  },

  '.select:placeholder': {
    backgroundColor: 'rgb(209 213 219)',
    colo: '#a1a1aa',
    padding: '10px',
    borderRadius: '8px',
  },


  // ".dropdown"{
  //     borderRadius: 10px;
  //     display: inline - block;
  // }

  //         .label {
  //             font- weight: 700;
  // font - size: 14px;
  // color: #374151;
  // text - transform: capitalize;
  //     }

  ".container": {},


}))