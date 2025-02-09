"use client";
import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const CustomLinkStyled = styled(Link)(({theme: {palette}}) => ({
  color: palette.secondary.main,
  display: 'inline-block',
  fontSize: '14px',
  "&.hover": {
    color: palette.secondary.contrastText,
  }
}))