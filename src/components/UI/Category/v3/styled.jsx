"use client";
import styled from "@emotion/styled";

export const CategoryStyled = styled('div')(({theme: {palette}}) => ({
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  gap: '15px',
  borderRadius: '40px',
  userSelect: 'none',
  flex: '0 0 auto',
  position: 'relative',
  perspective: '150px',

  ".categoryCart": {
    borderRadius: '25px',
    background: palette.colorCanvas.main,
    boxShadow: '5px 8px 12px 0 #efe6e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  "&.active .categoryCart": {
    background: palette.colorAccent.companyAccentLight,
  },

  ".imgWrapper, .image": {
    width: '96px',
    height: '80px',
    display: 'inline-block',
    background: palette.colorText.main,
    borderRadius: '15px',
    overflow: 'hidden',
    margin: '20px 13px'
  },
}))