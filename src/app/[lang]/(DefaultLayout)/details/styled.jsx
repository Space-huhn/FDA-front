"use client";
import styled from "@emotion/styled";

export const DetailsStyled = styled("div")(({theme: {palette, breakpoints}}) => ({
    [breakpoints.down("md")]: {
      marginBottom: '180px',
    },

  ".productSize": {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '15px',
    flexWrap: 'wrap',
  },

  ".ingredients": {
    ".ingredientsList": {
      marginTop: '20px',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    }
  },
}))