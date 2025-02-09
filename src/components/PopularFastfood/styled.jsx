import styled from "@emotion/styled";

export const PopularFastFoodStyled = styled("div")(({theme: {breakpoints}}) => ({
  margin: '50px -15px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '15px',

  [breakpoints.down('xs')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}))