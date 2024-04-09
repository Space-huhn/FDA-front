"use client";
import styled from "@emotion/styled";

export const LoginFormStyled = styled("div")(({theme: {breakpoints}}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    gap: "50px",
    minHeight: "100vh",

    ".top": {
        [breakpoints.down( "sm")]: {
            marginTop: "auto",
        }
    },

    ".formWrapper": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        [breakpoints.down( "sm")]: {
            width: "100vw",
            borderRadius: "1.5rem 1.5rem 0 0",
            marginTop: "auto",
            minHeight: "65vh",
        }
    },
}))