"use client";
import styled from "@emotion/styled";

export const FormContainerStyled = styled("div")(({theme: {breakpoints}}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    gap: "50px",
    minHeight: "100vh",
    ".top": {
        padding: "30px",
        [breakpoints.down( "sm")]: {
            marginTop: "auto",
        }
    },
    ".formWrapper>div": {
        maxWidth: "330px",
        width: "100%",

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
        [breakpoints.down( "sm")]: {
            width: "100vw",
            maxWidth: "none",
            borderRadius: "1.5rem 1.5rem 0 0",
            marginTop: "auto",
            minHeight: "65vh",
        }
    }
}))