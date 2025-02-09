import styled from "@emotion/styled";

export const QuantityCounterStyled = styled("div")(({theme: {palette}})=> ({
  background: palette.colorAccent.companyAccentDark,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '24px',

  ".displayQuantity": {
    color: palette.colorText.light,
  },

  "& button": {
    background: palette.colorText.dark,
    margin: '12px 14px',
    height: '24px',
    width: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))