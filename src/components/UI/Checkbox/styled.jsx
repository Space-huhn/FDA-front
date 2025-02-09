"use client";
import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";

export const CustomCheckboxStyled = styled(FormControlLabel)(({theme: {palette}}) => ({
  ".checkbox": {
    color: `${palette.colorAccent.companyAccentMain} !important`,
  },
}))