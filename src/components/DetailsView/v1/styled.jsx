import styled from "@emotion/styled";

export const DetailsViewStyled = styled("div")(({theme: {palette, breakpoints}}) => ({
    marginTop: '65px',
    display: 'flex',
    gap: '35px',
    [breakpoints.down("md")]: {
      flexDirection: 'column',
    },

    ".detailsImgWrapper": {
      borderRadius: '32px',
      minHeight: "85vh",
      minWidth: "45vw",
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',

      [breakpoints.down("md")]: {
        minHeight: "280px",
        minWidth: "280px",
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
      flexWrap: 'wrap'
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
    },


  })
)