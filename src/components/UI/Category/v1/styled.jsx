"use client";
import styled from "@emotion/styled";

export const CategoryStyled = styled('div')(({theme: {palette}}) => ({
  display: "flex",
  alignItems: "center",
  gap: '15px',
  padding: '8px 35px 8px 8px',
  borderRadius: '40px',
  background: palette.colorCanvas.main,
  boxShadow: '5px 8px 12px 0 #efe6e1',
  userSelect: 'none',
  flex: '0 0 auto',

  ".imgWrapper, .image": {
    width: '44px',
    height: '44px',
    display: 'inline-block',
    background: palette.colorText.main,
    borderRadius: '50%',
    overflow: 'hidden',
  },

  "&.active": {
    background: palette.colorAccent.companyAccentLight,
  }
}))