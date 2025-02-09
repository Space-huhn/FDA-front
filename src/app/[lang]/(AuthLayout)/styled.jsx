"use client";
import styled from "@emotion/styled";

export const LoginPageStyled = styled("div")(({theme: {palette, breakpoints}}) => ({
  background: palette.colorCanvasInverted.main,
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [breakpoints.down("sm")]: {
    justifyContent: "space-between",
    height: '100vh',
  },

  ".formContainerStyled": {
    maxWidth: "410px",
    width: "100%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: " center",
    // minHeight: '100vh',
  },

  ".backLink": {
    position: 'absolute',
    top: '15px',
    left: '0',
    display: 'inline-block',
  },

  ".top": {
    padding: "30px",
    [breakpoints.down("sm")]: {
      marginTop: "auto",
    }
  },

  ".formWrapper>div": {
    gap: '25px',
    width: '100%',
    maxWidth: '330px',
  },

  ".rememberMe, .singIn": {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '15px',
    flexWrap: 'wrap',

    ".uppercase": {
      textTransform: 'uppercase'
    },
  },

  ".formWrapper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '30px 40px',
    background: "white",
    borderRadius: "1.5rem",
    width: "100%",

    [breakpoints.down("sm")]: {
      minWidth: "100vw",
      borderRadius: "1.5rem 1.5rem 0 0",
      padding: '30px 25px',
      marginTop: "auto",
      minHeight: "50vh",
    }
  },
}))