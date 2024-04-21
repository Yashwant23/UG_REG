import React, { useState } from 'react';
import { Paper, Grid, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextFieldInput from '../../Inputs/TextFieldInput';
import DropdownInput from '../../Inputs/DropdownInput';
import FileUploadInput from '../../Inputs/FileUploadInput';
import forms from '../../../formDetails'
const theme = createTheme(); // Import or create your own theme

const FormDisplay = ({ fields, Page, Des }) => {

    const [formValues, setFormValues] = useState(() => {
        const initialFormValues = {};
        fields.forEach(({ label }) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form validation and submission logic here
    };


    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ padding: theme.spacing(3), margin: 'auto', width: '90%' }}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {fields.map(({ type, label, options, required, disabled }, index) => (
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
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    marginTop: '20px',
                                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
                                    },
                                }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider>
    );

};

export default FormDisplay;
