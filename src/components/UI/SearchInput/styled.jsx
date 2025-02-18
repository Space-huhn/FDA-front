"use client"

import styled from "@emotion/styled";

export const SearchInputStyled = styled("div")(({theme: {palette}}) => ({
  position: 'relative',
  background: palette.colorCanvas.dark,
  borderRadius: '10px',
  overflow: 'hidden',

  ".searchButton": {
    position: "absolute",
    padding: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    background: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    "span": {
      display: 'block',
      width: '30px',
      height: '30px',
      borderRadius: '15px',
      overflow: 'hidden'
    },

    ".icon": {
      width: "45px",
      height: "32px",
      fill: palette.colorText.main,
      opacity: '0.4',
    },
  },

  ".input": {
    padding: '12px 30px 12px 55px',
    background: 'inherit',
    minWidth: '320px',
    borderRadius: '8px',
    fontSize: '16px',
    lineHeight: '24px',
    color: palette.colorText.dark,
  },

  ".input:placeholder": {
    color: palette.colorText.main,
  },

  ".input:focus": {
    outline: '1px solid #fff',
  },

  ".clearButton": {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",

    ".icon": {
      fill: palette.colorText.main,
      opacity: '0.4',
      width: '25px',
      height: '25px',
    }
  },

  ".showButton": {
    position: "absolute",
    right: "10px",
    top: "12px",
    zIndex: "10"
  },
}))