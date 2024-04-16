
import React from "react";
import { ThemeProvider, Paper, Grid, TextField, Button } from "@mui/material";
import theme from "./theme"; // Assuming theme.js is in the same directory

const Form7 = ({ onBack, onNext }) => {
    // Dummy values for email username and password
    const emailUsername = "admission_no@iitism.ac.in";
    const emailPassword = "123456789";

    const handleNext = (event) => {
        event.preventDefault();
        // Perform any required logic before proceeding to the next step

        // Call the onNext function to navigate to the next step
        onNext();
    };

    const handleBack = (event) => {
        event.preventDefault();
        // Call the onBack function to navigate to the previous step
        onBack();
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper
                style={{ padding: theme.spacing(3), margin: "auto", width: "90%" }}
            >
                <form noValidate autoComplete="off" onSubmit={handleNext}>
                    <Grid container spacing={2}>
                        {/* Email Username and Password Fields */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="emailUsername"
                                    label={
                                        <span>
                                            Email Username<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={emailUsername}
                                    disabled
                                    style={{ backgroundColor: "#DCDCDC", borderRadius: "8px" }} // Light grey background and border-radius
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="emailPassword"
                                    label={
                                        <span>
                                            Email Password<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    type="password"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={emailPassword}
                                    disabled
                                    style={{ backgroundColor: "#DCDCDC", borderRadius: "8px" }} // Light grey background and border-radius
                                />
                            </Grid>
                        </Grid>
                        {/* Navigation Buttons */}
                        <Grid item xs={12} md={6}>
                            <Button
                                onClick={handleBack}
                                variant="contained"
                                color="primary"
                                sx={{
                                    marginTop: "20px",
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)", // Gradient background
                                    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)", // Box shadow
                                    color: "white",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)", // Hover effect
                                    },
                                }}
                            >
                                Back
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <Button
                                onClick={handleNext}
                                variant="contained"
                                color="primary"
                                sx={{
                                    marginTop: "20px",
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)", // Gradient background
                                    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)", // Box shadow
                                    color: "white",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)", // Hover effect
                                    },
                                }}
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider>
    );
};

export default Form7