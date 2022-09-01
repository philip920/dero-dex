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
                    background: `url(${dexBackground}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
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
                    background: '#0A040F',
                },
                clearIndicator: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                popupIndicator: {
                    color: 'rgba(255, 255, 255, 0.7)',
                },
            },
        },
    },
});
