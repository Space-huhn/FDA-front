'use client';
import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const BoxStyled = styled(Box)(({theme: {palette}}) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 40px)',
  justifyContent: 'center',

  '.boxContainer': {
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
  },

  ".image": {
    //   borderRadius: '12px',
    //   height: '100%',
    //   width: '100%',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   maxHeight: '300px',
    //   maxWidth: '240px',
    //   minHeight: '100%',
    //   minWidth: '100%',
    // paddingBottom: '75%',
    // overflow: 'hidden'
  },

  ".dotsContainer": {
    flexDirection: 'column',
    gap: '25px',
  },

  ".paper": {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },

  ".MuiMobileStepper-dots": {
    order: '-1',
    height: '5px'
  },

  ".MuiMobileStepper-dot": {
    background: palette.colorAccent.companyAccentLight,
    opacity: '0.3',
    marginBottom: '50px'
  },

  ".MuiMobileStepper-dotActive": {
    background: palette.colorAccent.companyAccentMain,
    opacity: '1'
  },
}))