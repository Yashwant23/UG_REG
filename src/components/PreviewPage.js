import React from 'react';
import { Paper, Grid, Button, Box, Typography, LinearProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import forms from '../formDetails';
import axios from 'axios';

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
    const [loading, setLoading] = React.useState(false);

    // Function to handle printing of the page
    const handlePrint = () => {
        window.print();
    };

    // Function to handle navigation to dashboard
    const handleRegister = async () => {
        setLoading(true);
        // Iterate through each form page and send data to the server
        for (const form of forms) {
            const pageData = {
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
            };

            try {
                // Make a POST request to the server with pageData
                const response = await axios.post('http://localhost:5000/register', pageData);
                console.log(response.data);
            } catch (error) {
                console.error('Error registering page data:', error);
                // Handle error
            }
        }
        setLoading(false);

        // Generate and download the JSON file
        const formDataJson = JSON.stringify(forms, null, 2);
        const blob = new Blob([formDataJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'form_data.json';
        link.click();
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
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Register'}
                    </Button>
                </Box>
                {loading && <LinearProgress />}
            </Paper>
        </ThemeProvider>
    );
};

export default FormPreviewPage;
