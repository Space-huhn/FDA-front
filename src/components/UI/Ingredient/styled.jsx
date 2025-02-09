import styled from "@emotion/styled";


export const IngredientStyled = styled("div")(({theme: {palette}}) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '5px',

  ".ingredientIcons": {
    width: '50px',
    height: '50px',
    padding: '13px',
    borderRadius: '25px',
    background: '#FFEBE4',
  }
}))