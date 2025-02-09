import styled from "@emotion/styled";

export const AddToCartStyled = styled("div")(({theme: {palette}}) => ({
  background: palette.colorCanvas.dark,
  padding: '20px 25px',
  borderRadius: '24px',
  marginTop: 'auto',

  ".flexWrapAddToCart": {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '50px',
    marginBottom: '35px',
  },
}))