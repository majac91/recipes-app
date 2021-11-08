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
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '2rem',

        },
        h3: {
            fontFamily: 'Cormorant Garamond',
            fontSize: '1.2rem',
            fontWeight: 400,
            letterSpacing: '-0.01em',
        },
        h2: {
            fontFamily: 'Cormorant Garamond',
            fontSize: '2.9rem',
            fontWeight: 600,
        },
        body1: {
            fontFamily: 'Julius Sans One',
        },
        overline: {
            fontSize: '1.2rem'
        }

    },

});

export default theme;