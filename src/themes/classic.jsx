'use client'
import {createTheme} from '@mui/material';

const tuna = '#32343E';
const white = '#ffffff';
const pumpkin = '#FF7622';
const comet = '#646982';
const grandis = '#FFD27C';
const cadetBlue = '#A0A5BA';
const wildSand = '#F6F6F6';
const vulcan = '#121223';
const steelGray = '#1E1E2E';
const red = '#ff3232';

const themePalette = {
  colorCanvas: {
    main: white,
    dark: wildSand,
    contrastText: comet,
    disableColor: cadetBlue,
  },

  colorCanvasInverted: {
    main: vulcan,
    light: steelGray,
    contrastText: white,
  },

  colorText: {
    main: comet,
    light: white,
    dark: tuna,
    darker: vulcan,
  },

  colorAccent: {
    companyAccentMain: pumpkin,
    companyAccentLight: grandis,
    companyAccentDark: vulcan,
    warning: red,
  },

  // primary: {
  //   main: '#121223',
  //   dark: '#070711',
  //   contrastText: '#ffffff',
  // },
  //
  // primary: {
  //   main: '#FF7622',
  //   dark: '#ec5b08',
  //   contrastText: '#ffffff',
  // },
  // secondary: {
  //   main: '#FF7622',
  //   dark: '#ec5b08',
  //   contrastText: '#ffffff',
  // },
  // accent: {
  //   main: '#ffd27c',
  // },
  // background: {
  //   main: '#fff',
  //   dark: '#000',
  //   contrastText: '#000',
  // },
  // surface: {
  //   main: '#fff',
  //   dark: '#000',
  //   contrastText: '#000',
  // },
  // containedType: {
  //   main: '#FF7622',
  //   dark: '#ec5b08',
  //   contrastText: '#ffffff',
  // },
  // placeholder: {
  //   main: '#98a8b8',
  // },
  //
  // textType: {
  //   main: '#646982',
  //   contrastText: '#646982',
  // },
  // defaultText: {
  //   main: '#676767',
  //   contrastText: '#646982',
  //
  // },
  // textTitle: {
  //   main: '#646982',
  //   contrastText: '#646982',
  // },
  //
  // outlinedType: {
  //   main: '#FF7622',
  //   dark: '#ec5b08',
  //   contrastText: '#000000',
  // },
}

const themeClassic = createTheme({
  palette: {...themePalette},
  // fontSize: {},
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // let titleSmall = "Small Title";
  // let titleMedium = "Medium Title";
  // let titleLarge = "Large Title";
  // let titleExtraLarge = "Extra Large Title";
  // typography: {
  //   'fontFamily': `'Poppins', 'Sen'`,
  //   'fontSize': '14px',
  //   'fontWeightLight': 300,
  //   'fontWeightRegular': 400,
  //   'fontWeightBold': 700,
  //   'fontWeightExtraBold': 800
  // },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#646982'
        }
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '0px !important',
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          userSelect: 'none',
          color: themePalette.colorCanvas.contrastText,
          variants: [
            {
              props: {color: 'main'},
              style: {
                color: themePalette.colorText.main,
              },
            },
            {
              props: {color: 'dark'},
              style: {
                color: themePalette.colorText.dark,
              },
            },
            {
              props: {color: 'light'},
              style: {
                color: themePalette.colorText.light,
              },
            },
            {
              props: {color: 'darker'},
              style: {
                color: themePalette.colorText.darker,
              },
            },
            {
              props: {color: 'companyAccentMain'},
              style: {
                color: themePalette.colorAccent.companyAccentMain,
              },
            },
            {
              props: {color: 'companyAccentLight'},
              style: {
                color: themePalette.colorAccent.companyAccentLight,
              },
            },
            {
              props: {color: 'companyAccentDark'},
              style: {
                color: themePalette.colorAccent.companyAccentDark,
              },
            },
            {
              props: {color: 'warning'},
              style: {
                color: themePalette.colorAccent.warning,
              },
            },
            {
              props: {textTransform: 'capitalize'},
              style: {
                textTransform: 'capitalize',
              },
            },
            {
              props: {textTransform: 'uppercase'},
              style: {
                textTransform: 'uppercase',
              },
            },
            {
              props: {textDecoration: 'underline'},
              style: {
                textDecoration: 'underline',
              },
            },
            {
              props: {variant: 'h1'},
              style: {
                textAlign: 'center',
                fontSize: '30px',
                lineHeight: '46px',
                fontWeight: 'bold',
                display: 'block',
              },
            },
            {
              props: {variant: 'h2'},
              style: {
                textAlign: 'center',
                fontSize: '20px',
                lineHeight: '36px',
                fontWeight: 'bold',
                display: 'block',
              },
            },
            {
              props: {variant: 'h3'},
              style: {
                fontSize: '18px',
                lineHeight: '24px',
                fontWeight: '700',
                display: 'block',
              },
            },
            {
              props: {variant: 'h4'},
              style: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '700',
                display: 'block',
              },
            },
            {
              props: {variant: 'subtitle1'},
              style: {
                fontSize: '20px',
                lineHeight: '28px',
                fontWeight: '400',
              },
            },
            {
              props: {variant: 'subtitle2'},
              style: {
                fontSize: '17px',
                lineHeight: '22px',
                fontWeight: '400',
              },
            },
            {
              props: {variant: 'subtitle3'},
              style: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
              },
            },
            {
              props: {variant: 'subtitle4'},
              style: {
                fontSize: '13px',
                lineHeight: '20px',
                fontWeight: '400',
              },
            },
            {
              props: {variant: 'body1'},
              style: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
              },
            },


            // {
            //   props: {variant: 'warning'},
            //   style: {
            //     color: '#ff3232',
            //     fontSize: '20px',
            //     textAlign: 'center',
            //     display: 'flex',
            //     gap: '10px',
            //     alignItems: 'center'
            //   },
            // },
            // {
            //   props: {variant: 'linkStyle'},
            //   style: {
            //     color: '#ff3232',
            //     fontSize: '14px',
            //   },
            // },
            // {
            //   props: {variant: 'bigLinkStyle'},
            //   style: {
            //     // color: themePalette.secondary.dark,
            //     textDecoration: 'underline',
            //     fontSize: '22px',
            //   },
            // },
            // {
            //   props: {variant: 'onboardingTitle'},
            //   style: {
            //     fontWeight: '800',
            //     fontSize: '24px',
            //     textAlign: 'center',
            //     color: '#32343e',
            //     display: 'block'
            //   },
            // },
            // {
            //   props: {variant: 'onboardingText'},
            //   style: {
            //     fontWeight: '400',
            //     fontSize: '16px',
            //     textAlign: 'center',
            //     lineHeight: '24px',
            //     color: '#646982',
            //   },
            // },
            // {
            //   props: {variant: 'loginTitle'},
            //   style: {
            //     display: 'block',
            //     textAlign: 'center',
            //     variant: 'h2',
            //     fontFamily: 'Sen',
            //     fontWeight: 'fontWeightBold',
            //     fontSize: '30px',
            //     lineHeight: '52px',
            //     align: 'center',
            //     color: '#ffffff',
            //   },
            // },
            // {
            //   props: {variant: 'loginSubtitle'},
            //   style: {
            //     display: 'block',
            //     fontFamily: 'Sen',
            //     fontWeight: 'fontWeightRegular',
            //     fontSize: '16px',
            //     lineHeight: '26px',
            //     align: 'center',
            //     // color: '#ffffff',
            //     textAlign: 'center',
            //   },
            // },
            // {
            //   props: {variant: 'titleAccent'},
            //   style: {
            //     fontFamily: 'Sen',
            //     fontWeight: "700",
            //     textTransform: 'uppercase',
            //     fontSize: '16px',
            //     lineHeight: '26px',
            //     align: 'center',
            //     // color: themePalette.secondary.main,
            //   },
            // },
            // {
            //   props: {variant: 'categoryTitle'},
            //   style: {
            //     fontFamily: 'Sen',
            //     fontWeight: "700",
            //     textTransform: 'uppercase',
            //     fontSize: '14px',
            //     lineHeight: '22px',
            //     // color: themePalette.secondary.main,
            //   },
            // },
          ],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          textTransform: 'uppercase',
          color: themePalette.colorText.dark,
          fontWeight: 300,
        }
      }
    },
    // MuiLink: {
    //   styleOverrides: {
    //     defaultProps: {},
    //     root: {
    //       fontSize: '35px',
    //       color: "#FF7622",
    //       textDecoration: 'none',
    //       "&:hover": {
    //         color: '#ec5b08',
    //       },
    //     },
    //   }
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: 'bold',
          borderRadius: '12px',
          padding: '13px 30px',
          width: '100%',
          maxWidth: '330px',
          margin: '0 auto',

          span: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          },

          variants: [
            {
              props: {variant: 'rounded'},
              style: {
                color: themePalette.colorText.light,
                background: themePalette.colorAccent.companyAccentMain,
                padding: '10px',
                minWidth: '0',
                borderRadius: '50%',
                margin: '0',
                width: 'auto',
              },
            },
            {
              props: {variant: 'contained'},
              style: {
                color: themePalette.colorText.light,
                background: themePalette.colorAccent.companyAccentMain,
                display: 'flex',
                alignItems: 'center',
                transition: 'all .3s ease-out',

                "&:hover": {
                  background: themePalette.colorAccent.companyAccentDark,
                }
              },
            },
            {
              props: {variant: 'text'},
              style: {
                color: themePalette.colorText.main,
                display: 'flex',
                alignItems: 'center',
                transition: 'all .3s ease-out',

                "&:hover": {
                  color: themePalette.colorText.light,
                  background: themePalette.colorAccent.companyAccentLight,
                }
              },
            },
            {
              props: {variant: 'outlined'},
              style: {
                color: themePalette.colorAccent.companyAccentMain,
                border: `1px solid ${themePalette.colorAccent.companyAccentMain}`,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                transition: 'all .3s ease-out',

                "&:after": {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  zIndex: '-1',
                  background: `linear-gradient(45deg, ${themePalette.colorAccent.companyAccentLight} 0%, ${themePalette.colorAccent.companyAccentDark} 100%)`,
                  opacity: '0',
                  transition: 'all .3s ease-out',
                },

                "&:hover": {
                  color: themePalette.colorText.light,
                  border: '1px solid transparent',
                  borderLeft: 'none',
                  borderColor: 'transparent',
                  "&:after": {opacity: '1'}
                },
              },
            },
            {
              props: {color: 'canvas'},
              style: {
                background: themePalette.colorCanvas.disableColor,
              },
            },
          ],
        }
      }
    },

    MuiInput: {
      styleOverrides: {
        defaultProps: {},
        root: {
          variants: [
            {
              props: {variant: 'noLine'},
              style: {
                minWidth: '100%',
                "&::before": {
                  display: 'none'
                },
              },
            },
          ],
        }
      }
    }

  }
})

export default themeClassic;