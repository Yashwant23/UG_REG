import React from 'react';
import { Paper, Grid, Button, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import forms from '../formDetails';

// Create a theme instance with a darker blue and green color palette
const theme = createTheme({
    palette: {
        primary: {
            main: '#21CBF3', // Darker Blue
        },
        secondary: {
            main: '#21CBF3', // Green
        },
    },
});

const FormPreviewPage = ({ forms }) => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle printing of the page
    const handlePrint = () => {
        window.print();
    };

    // Function to handle navigation to dashboard
    const handleRegister = () => {
        navigate('/dashBoard');
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3} style={{ padding: theme.spacing(3), margin: 'auto', maxWidth: '90%', backgroundColor: '#2196F3' }}>
                {forms.map((form) => (
                    <Box key={form.Page} mb={4} p={2} boxShadow={2} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                        <Typography variant="h5" mb={2} color="primary">Page {form.Page}</Typography>
                        <Typography variant="body1" mb={2}>{form.Des}</Typography>
                        <Grid container spacing={2}>
                            {form.fields.map(({ label }) => (
                                <Grid item xs={12} sm={6} md={4} key={`${form.Page}${label}`}>
                                    <Typography variant="subtitle1" mr={1} color="secondary"><strong>{label}: </strong></Typography>
                                    <Typography variant="body1">{localStorage.getItem(`${form.Page}${label}`) || 'Not filled'}</Typography>
                                    {localStorage.getItem(`${form.Page}${label}_preview`) && (
                                        <div>
                                            {/* <p>{localStorage.getItem(`${form.Page}${label}`)}</p> Display the file name */}
                                            <img src={localStorage.getItem(`${form.Page}${label}_preview`)} alt="File preview" style={{ maxWidth: '100%', height: 'auto' }} />
                                        </div>
                                    )}
                                </Grid>
                            ))}
                        </Grid>

                    </Box>
                ))}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handlePrint}
                    >
                        Print Form
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </Box>
            </Paper>
        </ThemeProvider>
    );
};

export default FormPreviewPage;
