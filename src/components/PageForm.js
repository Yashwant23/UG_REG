import React, { useState } from 'react';
import { Paper, Grid, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextFieldInput from './TextFieldInput';
import DropdownInput from './DropdownInput';
import FileUploadInput from './FileUploadInput';
import PageBar from './PageBar'; // Replace with your actual PageBar component
import forms from '../formDetails'; // Replace with your actual form data

const theme = createTheme(); // Import or create your own theme

const PageForm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formValues, setFormValues] = useState(() => {
        const initialFormValues = {};
        forms[currentPage].fields.forEach(({ label }) => {
            initialFormValues[label] = '';
        });
        return initialFormValues;
    });

    const handleInputChange = (fieldName) => (value) => {
        setFormValues({
            ...formValues,
            [fieldName]: value,
        });
    };

    const handleNext = () => {
        if (currentPage < forms.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form validation and submission logic here
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ padding: theme.spacing(3), margin: 'auto', width: '90%' }}>
                <PageBar currentPage={currentPage} totalPages={forms.length} des={forms[currentPage].Des} />
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {forms[currentPage].fields.map(({ type, label, options, required, disabled }, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                {type === 'text' && (
                                    <TextFieldInput
                                        label={label}
                                        value={formValues[label]}
                                        onChange={handleInputChange(label)}
                                        required={required}
                                        disabled={disabled}
                                    />
                                )}
                                {type === 'dropdown' && (
                                    <DropdownInput
                                        label={label}
                                        value={formValues[label]}
                                        onChange={handleInputChange(label)}
                                        options={options}
                                        required={required}
                                        disabled={disabled}
                                    />
                                )}
                                {type === 'file' && (
                                    <FileUploadInput
                                        label={label}
                                        onChange={(file) => console.log(file)} // You can handle file upload logic here
                                    />
                                )}
                                {/* Add more conditional rendering for other types if needed */}
                            </Grid>
                        ))}
                        {/* Add more fields here */}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="space-between">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleBack}
                                    disabled={currentPage === 0}
                                    sx={{
                                        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                        margin: '20px',
                                    }}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    disabled={currentPage === forms.length - 1}
                                    sx={{
                                        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                        margin: '20px',
                                    }}
                                >
                                    {currentPage === forms.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider>
    );
};

export default PageForm;
