import { ThemeOptions, createTheme } from '@mui/material/styles';

const lightOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary:    { main: '#6834d7' },
        secondary:  { main: '#ffffff' },
    },
};

export const light = createTheme(lightOptions);

const darkOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary:    { main: '#6834d7' },
        secondary:  { main: '#ffffff' },
    },
};

export const dark = createTheme(darkOptions);