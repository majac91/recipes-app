import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'rgb(168, 113, 94)',

        },
        secondary: {
            main: '#182124',
        },
        background: {
            default: '#FFFDF7',
            paper: '#FFFDF7',
        },
        error: {
            main: '#ceb1a2',
        },
        text: {
            primary: '#070707',
        },
        info: {
            main: '#e98469',
        },
        success: {
            main: 'rgba(214,198,193,0.44)',
        },
        warning: {
            main: '#f0a287',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '2rem',

        },
        h2: {
            fontSize: '2.6rem',
            fontWeight: 600,
            lineHeight: 1.2
        },
        h3: {
            fontFamily: 'Cormorant Garamond',
            fontSize: '1.2rem',
            fontWeight: 400,
            letterSpacing: '-0.01em',
        },
        body1: {
            fontFamily: 'Julius Sans One',
            fontSize: '1.1rem',
        },
        body2: {
            fontSize: '1rem',
        },
        body3: {
            fontSize: '0.9rem'
        },
        overline: {
            fontSize: '1rem'
        }

    },

});

export default theme;