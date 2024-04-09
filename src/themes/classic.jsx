"use client"
import {createTheme} from "@mui/material";
import {blue, yellow} from "@mui/material/colors";


const themeClassic = createTheme({
    palette: {
        primary: {
            main: '#121223',
            dark: '#070711',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FF7622',
            dark: '#ec5b08',
            contrastText: '#fff',
        },
        containedType: {
            main: '#FF7622',
            dark: '#ec5b08',
            contrastText: '#fff',
        },
        textType: {
            main: '#646982',
            contrastText: '#646982',
        },
        outlinedType: {
            main: '#FF7622',
            dark: '#ec5b08',
            contrastText: '#000',
        },
    },
    breakpoints: {

    },
    typography: {
        "fontFamily": `"Poppins", "Sen"`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightBold": 700,
        "fontWeightExtraBold": 800
    },
    components: {
        MuiTypography: {
          styleOverrides:{
              root: {
                  fontSize: "13px",
                  userSelect: "none",
                  color: "#646982",

              }
          }
        },
        MuiButton: {
            styleOverrides: {
                defaultProps: {
                    // disableElevation: true,
                    // disableRipple: true
                },
                root: {
                    fontFamily: "Sen",
                    fontSize: "14px"
                }

                // root: {
                // //
                // }
            }
        }
    }
})

export default themeClassic;