"use client"
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const HeaderStyled = styled(AppBar)(() => ({
    ".wrapper": {
    position: "relative",
    fontSize: "12px",
    },
    ".toolbar": {
        display: "flex",
        justifyContent: "space-between",
    },
    ".list": {
        position: "absolute",
        flexDirection: "column",
        opacity: "0",
        transition: "all .3s ease-in 0s",
        display: "none",
    },
    ".visible.list": {
        opacity: "1",
        display: "block",
    },
    ".rotateAnimation": {
        transition: "all .3s ease-in 0s",
    },
    ".logo": {
        width: "75px",
    }
}))