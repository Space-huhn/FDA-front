"use client";
import styled from "@emotion/styled";

export const CategoryStyled = styled('div')(({theme: {palette}}) => ({
  borderRadius: '50%',
  aspectRatio: '1/1',
  padding: '12px',
  userSelect: 'none',
  backgroundColor: palette.colorCanvas.dark,
  cursor: 'pointer',

  "&.active": {
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