import React from "react";
import { ThemeProvider, Paper, Grid, TextField, Button } from "@mui/material";
import theme from "./theme"; // Assuming theme.js is in the same directory

const Form8 = ({ onBack, onNext }) => {
    // Pre-filled dummy values for the form fields
    const feeAmount = 100000;
    const feeDate = "21-07-24";
    const feeMode = "online";
    const transactionId = "ISMTEST28";

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
            <Paper style={{ padding: theme.spacing(3), margin: "auto", width: "90%" }}>
                <form noValidate autoComplete="off" onSubmit={handleNext}>
                    <Grid container spacing={2}>
                        {/* Row containing Fee Amount and Fee Date */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="feeAmount"
                                    label={
                                        <span>
                                            Fee Amount<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={feeAmount}
                                    disabled
                                    style={{
                                        backgroundColor: "#DCDCDC",
                                        borderRadius: "8px",
                                    }} // Light grey background and border-radius
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="feeDate"
                                    label={
                                        <span>
                                            Fee Date<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={feeDate}
                                    disabled
                                    style={{
                                        backgroundColor: "#DCDCDC",
                                        borderRadius: "8px",
                                    }} // Light grey background and border-radius
                                />
                            </Grid>
                        </Grid>
                        {/* Margin to separate rows */}
                        <Grid container spacing={2} style={{ marginTop: theme.spacing(0.5) }}>
                            {/* Row containing Fee Mode and Transaction ID */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="feeMode"
                                    label={
                                        <span>
                                            Fee Mode<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={feeMode}
                                    disabled
                                    style={{
                                        backgroundColor: "#DCDCDC",
                                        borderRadius: "8px",
                                    }} // Light grey background and border-radius
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="transactionId"
                                    label={
                                        <span>
                                            Transaction ID<span style={{ color: "red" }}>*</span>
                                        </span>
                                    }
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={transactionId}
                                    disabled
                                    style={{
                                        backgroundColor: "#DCDCDC",
                                        borderRadius: "8px",
                                    }} // Light grey background and border-radius
                                />
                            </Grid>
                        </Grid>

                        {/* Navigation Buttons */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} style={{ marginTop: theme.spacing(2) }}>
                                {/* Back Button */}
                                <Button
                                    onClick={handleBack}
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#2196F3", // You can also use theme colors
                                        color: "#fff",
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "#1976D2", // Adjusted hover color
                                        },
                                    }}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "flex-end", marginTop: theme.spacing(2) }}>
                                {/* Next Button */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#2196F3", // You can also use theme colors
                                        color: "#fff",
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "#1976D2", // Adjusted hover color
                                        },
                                    }}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider>
    );
};

export default Form8;