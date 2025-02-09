"use client";
import styled from "@emotion/styled";

export const CategoryStyled = styled('div')(({theme: {palette}}) => ({
  "&.active div::before": {
    background: palette.colorAccent.companyAccentLight,
  },

  ".title": {
    alignSelf: 'start',
  },

  ".starting": {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
}))