import React, { useState, useEffect } from 'react';
import { Paper, Grid, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextFieldInput from './TextFieldInput';
import DropdownInput from './DropdownInput';
import FileUploadInput from './FileUploadInput';
import PageBar from './PageBar';
import FormPreviewPage from './PreviewPage'; // Import the FormPreviewPage component
import forms from '../formDetails';

const theme = createTheme();

const PageForm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [disableNext, setDisableNext] = useState(false); // State to track disabling of next button
    const [isPreviewMode, setIsPreviewMode] = useState(false); // State to track whether to display the preview page

    useEffect(() => {
        // Function to check if any field has a warning
        const hasWarning = () => {
            let hasWarning = false;
            // Iterate over all fields in the current page
            forms[currentPage].fields.forEach(({ label, required }) => {
                // Check if the field is required and not filled
                const storedValue = localStorage.getItem(`${currentPage + 1}${label}`);
                if (required && !storedValue) {
                    hasWarning = true;
                }
            });
            return hasWarning;
        };

        setDisableNext(hasWarning()); // Disable next button if any field has a warning
    }, [currentPage, setDisableNext]);

    const handleInputChange = (fieldName) => (value) => {
        // No need to update formValues in this version
    };

    const handleNext = () => {
        if (currentPage < forms.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setIsPreviewMode(true); // Activate preview mode when reaching the last page
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            setIsPreviewMode(false); // Deactivate preview mode when going back
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form validation and submission logic here
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ padding: theme.spacing(3), margin: 'auto', width: '90%' }}>
                {isPreviewMode ? ( // Display preview page if in preview mode
                    <FormPreviewPage forms={forms} />
                ) : (
                    <>
                        <PageBar currentPage={currentPage} totalPages={forms.length} des={forms[currentPage].Des} />
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                {forms[currentPage].fields.map(({ type, label, options, required = true, disabled }, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                        {type === 'text' && (
                                            <TextFieldInput
                                                label={label}
                                                onChange={handleInputChange(label)}
                                                required={required} // Set optional prop based on required
                                                disableNext={disableNext}
                                                setDisableNext={setDisableNext}
                                                pageNo={currentPage + 1}
                                            />
                                        )}
                                        {type === 'dropdown' && (
                                            <DropdownInput
                                                label={label}
                                                onChange={handleInputChange(label)}
                                                options={options}
                                                required={required}
                                                disabled={disabled}
                                                disableNext={disableNext}
                                                setDisableNext={setDisableNext}
                                                pageNo={currentPage + 1}
                                            />
                                        )}
                                        {type === 'file' && (
                                            <FileUploadInput
                                                label={label}
                                                onChange={(file) => console.log(file)}
                                                required={required}
                                                disableNext={disableNext}
                                                setDisableNext={setDisableNext}
                                                pageNo={currentPage + 1}
                                            />
                                        )}
                                    </Grid>
                                ))}
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
                                            disabled={disableNext} // Always disable the next button until the form is completed
                                            sx={{
                                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                                margin: '20px',
                                            }}
                                        >
                                            {currentPage === forms.length - 1 ? 'Preview' : 'Next'} {/* Change button text to "Preview" on the last page */}
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </>
                )}
            </Paper>
        </ThemeProvider>
    );
};

export default PageForm;
