import styled from "@emotion/styled";
import CustomSelect from "@/components/UI/CustomSelect/index";
// import { FormControlLabel } from "@mui/material";

export const MapStyled = styled('div')(({theme: {palette, breakpoints}}) => ({
  height: '40vh',
  width: '45vw',
  maxWidth: '650px',
  borderRadius: '20px',
  margin: '0 auto',
  marginBottom: '50px',
  overflow: 'hidden',

  [breakpoints.down("sm")]: {
    borderRadius: '5vw',
    width: '100%',
  },

  ".mapContainer": {
    width: '100%',
    height: '100%',

  },
}))