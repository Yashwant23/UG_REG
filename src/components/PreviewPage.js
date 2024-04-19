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
    const handleRegister = async () => {
        // Prepare the complete form data
        const formData = forms.map((form) => ({
            pageNo: form.Page,
            labels: form.fields.map(({ type, label }) => {
                if (type === 'file') {
                    // If the field type is 'file', include both label value and file data
                    return {
                        [label]: localStorage.getItem(`${form.Page}${label}`) || 'Not filled',
                        [`${label}_data`]: localStorage.getItem(`${form.Page}${label}_data`) || 'No file data',
                    };
                } else {
                    // For other types of fields, include only label value
                    return {
                        [label]: localStorage.getItem(`${form.Page}${label}`) || 'Not filled',
                    };
                }
            }),
        }));

        // Create a Blob containing the JSON data
        const jsonBlob = new Blob([JSON.stringify(formData)], { type: 'application/json' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(jsonBlob);

        // Create a link element to download the JSON file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'form_data.json';

        // Simulate a click on the link to trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up by revoking the URL object
        URL.revokeObjectURL(url);
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
