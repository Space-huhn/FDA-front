"use client";
import styled from "@emotion/styled";

export const LoginPageStyled = styled("div")(({theme: {palette}}) => ({
        background: palette.primary.main,
        display: 'flex',
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        minHeight: "100vh",
}))
