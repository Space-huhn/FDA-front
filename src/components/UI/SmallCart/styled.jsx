import styled from "@emotion/styled";

export const SmallCartStyled = styled("div")(({theme: {palette, breakpoints}}) => ({
  display: "flex",
  flexDirection: 'column',
  gap: '5px',
  padding: '12px',
  borderRadius: '40px',
  margin: '15px 0 0',
  userSelect: 'none',
  flex: '0 0 auto',
  width: '150px',
  minHeight: '150px',
  position: 'relative',
  perspective: '150px',

  ".flex": {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  "&::before": {
    content: "''",
    transform: 'rotateX(5deg)',
    background: palette.colorCanvas.main,
    boxShadow: '5px 8px 12px 0 #efe6e1',
    borderRadius: '25px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: '-1',
    width: '150px',
    // minHeight: '150px',
    height: '100%',
  },

  "&.active::before": {
    background: palette.colorAccent.companyAccentLight,
  },

  "div:has(img), .image": {
    width: '120px',
    height: '85px',
    display: 'inline-block',
    background: palette.colorText.main,
    borderRadius: '15px',
    overflow: 'hidden',
    margin: '-28px auto 0',
  },
  })
)