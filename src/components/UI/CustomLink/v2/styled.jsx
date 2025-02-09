"use client";
import styled from "@emotion/styled";
import {Link} from "@mui/material";

export const CustomLinkStyled = styled(Link)(({theme: {palette}}) => ({
  color: palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: "6px 16px",
  fontSize: '14px',
  cursor: 'pointer',
  "div": {

    maxWidth: '250px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  "&.hover": {
    color: palette.secondary.contrastText,
  }
}))