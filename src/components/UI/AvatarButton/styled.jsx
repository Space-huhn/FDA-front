import styled from "@emotion/styled";
import {Avatar} from "@mui/material";

export const AvatarIcon = styled(Avatar)(({theme: {palette}}) => ({
  backgroundColor: palette.secondary.main,
  color: palette.primary.main,
  '.userName': {
    padding: '30px',
    margin: '30px',
    display: 'inline-block',
  }
}))