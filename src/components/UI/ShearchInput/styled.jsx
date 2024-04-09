"use client"

import styled from "@emotion/styled";

export const SearchInputStyled = styled("div")(() => ({
    ".label": {
        fontSize: "13px",
        textTransform: "uppercase",
        marginBottom: "8px"
    },
    ".icon": {
        color: "#B4B9CA",
    },
    ".searchButton": {
        position: "absolute",
        left: "10px",
        overflow: "hidden",
        borderRadius: "10px",
        width: "25px",
        height: "25px",
        top: "50%",
        transform: "translateY(-50%)",
    },
    ".searchButton .icon": {
        width: "32px",
        height: "32px",
        color: "#A0A5BA"
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
        background: "#fff"
    },
    ".inputWrapper": {
        position: "relative",
    },
    ".showButton": {
        position: "absolute",
        right: "10px",
        top: "12px",
        zIndex: "10"
    },
}))