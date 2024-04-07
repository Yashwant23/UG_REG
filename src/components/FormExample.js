import React, { useState } from 'react';
import { ThemeProvider, Paper, Grid, TextField, MenuItem, Checkbox, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Button } from '@mui/material';
import theme from './theme'; // Assuming theme.js is in the same directory

const FormExample = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        program: '',
        terms: false,
        gender: 'female',
        // Add more fields as needed
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="filled"
                                color="primary"
                                fullWidth
                                value={formValues.firstName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                label="Last Name"
                                variant="filled"
                                color="primary"
                                fullWidth
                                value={formValues.lastName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                label="Email Address"
                                variant="filled"
                                color="primary"
                                fullWidth
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="program"
                                select
                                label="Program of Interest"
                                variant="filled"
                                color="secondary"
                                fullWidth
                                value={formValues.program}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                                <MenuItem value="postgraduate">Postgraduate</MenuItem>
                                <MenuItem value="phd">PhD</MenuItem>
                                {/* Add more options here */}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="terms"
                                        color="primary"
                                        checked={formValues.terms}
                                        onChange={handleInputChange}
                                    />
                                }
                                label="I agree to the terms and conditions"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    name="gender"
                                    value={formValues.gender}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                                    {/* Add more options here */}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* Add more fields here */}
                        <Grid item xs={12}>
                            {/* <Button type="submit" variant="contained" color="primary">
                                Register */}
                            {/* </Button> */}
                            <Button
                                variant="contained"

                                sx={{
                                    marginTop: '20px',
                                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Gradient background
                                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)', // Box shadow
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)', // Hover effect
                                    },
                                }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider >
    );
};

export default FormExample;
