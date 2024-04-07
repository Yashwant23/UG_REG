// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3', // Your primary color
        },
        secondary: {
            main: '#21CBF3', // Your secondary color
        },
        error: {
            main: '#f44336', // Your error color
        },
        warning: {
            main: '#ff9800', // Your warning color
        },
        info: {
            main: '#2196f3', // Your info color
        },
        success: {
            main: '#4caf50', // Your success color
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h4: {
            fontWeight: 700, // Custom weight for <Typography variant="h4" />
        },
        // Add more customizations if needed
    },
    // Add other theme customizations like spacing, breakpoints, etc.
});

export default theme;
