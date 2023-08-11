import {createTheme} from '@mui/material/styles';
import {Epilogue} from 'next/font/google'

const epilogue = Epilogue({
    weight: ["300", "400"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            light: '#FFDE59',
            main: '#001135',
            dark: '#001135',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#001135',
            main: '#FFDE59',
            dark: '#FFDE59',
            contrastText: '#000000',
        },
        background: {
            default: '#1E293B',
            paper: '#001135'
        },
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: '#94A3B8',
        },

    },
    typography: {
        fontFamily: epilogue.style.fontFamily
    },
});