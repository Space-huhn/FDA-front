"use client";
import styled from "@emotion/styled";

export const FormContainerStyled = styled("div")(({theme: {breakpoints}}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: '410px',
  width: '100%',

  [breakpoints.down("sm")]: {
    justifyContent: "space-between",
    height: '100vh',
  },

  ".backLink": {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'inline-block',
  },

  ".top": {
    padding: "30px",
    textAlign: 'center',
    [breakpoints.down("sm")]: {
      marginTop: "auto",
    }
  },

  ".formWrapper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '30px 40px',
    background: "white",
    borderRadius: "1.5rem",
    maxWidth: "450px",
    width: "100%",

    [breakpoints.down("sm")]: {
      minWidth: "100vw",
      borderRadius: "1.5rem 1.5rem 0 0",
      padding: '30px 25px',
      marginTop: "auto",
      minHeight: "50vh",
    }
  },

  ".bottomFormNavigation": {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    gap: '30px'
  },

  ".formWrapper>div": {
    gap: '25px'
  }
}))