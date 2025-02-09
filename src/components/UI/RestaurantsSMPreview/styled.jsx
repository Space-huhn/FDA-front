import styled from "@emotion/styled";

export const RestaurantsSMPreviewStyled = styled("div")(({theme: {palette}}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  borderBottom: `1px solid ${palette.colorCanvas.disableColor}`,
  padding: '15px 0',

  ".imgWrapper, .image": {
    width: '60px',
    height: '50px',
    borderRadius: '8px',
    overflow: 'hidden',
    background: palette.colorText.main,
  },

  ".restaurantShortInfo": {
    display: "flex",
    flexDirection: 'column',
    gap: "5px"

  }
}))