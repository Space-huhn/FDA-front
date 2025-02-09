"use client";
import styled from "@emotion/styled";

export const PageStyled = styled("div")(() => ({
    marginTop: "60px",
    // background: "#fff",
    // display: 'flex',
    // flexDirection: "column",
    // gap: "30px",
    // alignItems: "center",
    // justifyContent: "center",
    // minHeight: "100vh",

    ".hiUser": {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },

    ".top": {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '18px',
        flexWrap: 'wrap',
        margin: '20px 0px'
    }
}))