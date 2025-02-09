import styled from "@emotion/styled";

export const RestaurantStyled = styled('div')(({theme: {palette}}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
  alignSelf: 'center',

  ".imgWrapper": {
    width: '100%',
    aspectRatio: '2.5',
    borderRadius: '15px',
    background: palette.colorText.main,
    overflow: 'hidden'
  },
}))