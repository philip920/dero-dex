import { createTheme } from '@mui/material/styles';
import dexBackground from '../src/assets/dex_background.png';
export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        text: {
            primary: 'rgb(255, 255, 255)',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
    typography: {
        fontFamily: 'Saira',
        fontWeightLight: 300,
        fontWeightBold: 700,
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: `url(${dexBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },
            },
        },

        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    background: 'transparent',
                    boxShadow: 'none',
                },
            },
        },
    },
});
