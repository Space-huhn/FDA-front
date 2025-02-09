import styled from "@emotion/styled";

export const DetailsViewStyled = styled("div")(({theme: {palette, breakpoints}}) => ({
    margin: '65px auto 0',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    gap: '35px',

    [breakpoints.down("md")]: {
      minHeight: 'calc(100vh - 105px)',
      flexDirection: 'column',
    },

    ".detailsImgWrapper": {
      borderRadius: '32px',
      minHeight: "85vh",
      minWidth: "45vw",
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',

      [breakpoints.down("md")]: {
        borderRadius: '0 0 32px 32px',
        minHeight: "45vh",
        minWidth: "auto",
        margin: '-90px -20px 0px -20px',
      },
    },

    ".title h2": {
      textAlign: 'left'
    },

    ".detailsImg": {
      width: "100%",
      height: "100%",
      minHeight: "280px",
      minWidth: "280px",
      background: palette.colorText.main,
    },

    ".productSize": {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      gap: '15px',
      flexWrap: 'wrap',
      marginBottom: '25px'
    },

    ".ingredients": {
      ".ingredientsList": {
        marginTop: '20px',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }
    },

    ".detailsInfo": {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',

      [breakpoints.down("md")]: {
        flex: '1 1 auto',
      },
    },

    "div:has(> .flexWrapAddToCart)": {
      [breakpoints.down("md")]: {
        borderRadius: '32px 32px 0 0',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
      },
    },


  })
)