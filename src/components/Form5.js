import React, { useState } from "react";
import {
    ThemeProvider,
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from "@mui/material";
import theme from "./theme"; // Assuming theme.js is in the same directory

const Form5 = ({ onBack, onNext }) => {
    const [marksheetFile, setMarksheetFile] = useState(null);
    const [certificateFile, setCertificateFile] = useState(null);
    const [migrationCertNumber, setMigrationCertNumber] = useState("");
    const [marksheetFile12, setMarksheetFile12] = useState(null);
    const [certificateFile12, setCertificateFile12] = useState(null);

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

    const handleFileChange = (event, setFile) => {
        const file = event.target.files[0];
        if (file && file.size <= 1 * 1024 * 1024) {
            // File size is 1 MB or less
            setFile(file);
        } else {
            alert("File size should be 1 MB or less.");
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <Paper
                style={{ padding: theme.spacing(3), margin: "auto", width: "90%" }}
            >
                <form noValidate autoComplete="off" onSubmit={handleNext}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            style={{ marginBottom: theme.spacing(2) }}
                        >
                            1. 10th
                        </Typography>
                    </Grid>

                    <Grid container spacing={2}>
                        {/* Row 1: Name of Examination, University/Boards, Year, Institution/School for 10th */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="examName10"
                                    label="Name of Examination"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="universityBoard10"
                                    label="University/Boards"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="year10"
                                    label="Year"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="institutionSchool10"
                                    label="Institution/School"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                        </Grid>

                        {/* Row 2: Grade/Percentage, Division, Major Subjects for 10th */}
                        <Grid
                            container
                            spacing={2}
                            style={{ marginTop: theme.spacing(1.2) }}
                        >
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="gradePercentage10"
                                    label="Grade/Percentage"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="division10"
                                    label="Division"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="majorSubjects10"
                                    label="Major Subjects"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                        </Grid>

                        {/* Row 3: Upload Marksheet and Upload Certificate for 10th */}
                        <Grid container spacing={2} style={{ alignItems: "center" }}>
                            <Grid item xs={12} md={6}>
                                <Typography color="primary" variant="body2" gutterBottom>
                                    Upload Marksheet
                                </Typography>
                                <TextField
                                    type="file"
                                    name="marksheet10"
                                    variant="filled"
                                    inputProps={{ accept: ".pdf" }}
                                    fullWidth
                                    onChange={(event) =>
                                        handleFileChange(event, setMarksheetFile)
                                    }
                                    style={{ borderRadius: "8px" }}
                                    helperText="Max file size: 1 MB"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography color="primary" variant="body2" gutterBottom>
                                    Upload Certificate
                                </Typography>
                                <TextField
                                    type="file"
                                    name="certificate10"
                                    variant="filled"
                                    inputProps={{ accept: ".pdf" }}
                                    fullWidth
                                    onChange={(event) =>
                                        handleFileChange(event, setCertificateFile)
                                    }
                                    style={{ borderRadius: "8px" }}
                                    helperText="Max file size: 1 MB"
                                />
                            </Grid>
                        </Grid>

                        {/* Add spacing between sections for 10th and 12th */}
                        <Grid container spacing={2} style={{ marginTop: theme.spacing(6) }}>
                            <Typography variant="h6">2. 12th</Typography>
                        </Grid>

                        {/* Class 12th Section */}

                        {/* Row 1: Name of Examination, University/Boards, Year, Institution/School for 12th */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="examName12"
                                    label="Name of Examination"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="universityBoard12"
                                    label="University/Boards"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="year12"
                                    label="Year"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="institutionSchool12"
                                    label="Institution/School"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                        </Grid>

                        {/* Row 2: Grade/Percentage, Division, Major Subjects for 12th */}
                        <Grid
                            container
                            spacing={2}
                            style={{ marginTop: theme.spacing(1.2) }}
                        >
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="gradePercentage12"
                                    label="Grade/Percentage"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    name="division12"
                                    label="Division"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="majorSubjects12"
                                    label="Major Subjects"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                        </Grid>

                        {/* Row 3: Upload Marksheet, Upload Certificate, and Migration Certificate Number for 12th */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography color="primary" variant="body2" gutterBottom>
                                    Upload Marksheet
                                </Typography>
                                <TextField
                                    type="file"
                                    name="marksheet12"
                                    variant="filled"
                                    inputProps={{ accept: ".pdf" }}
                                    fullWidth
                                    onChange={(event) =>
                                        handleFileChange(event, setMarksheetFile12)
                                    }
                                    style={{ borderRadius: "8px" }}
                                    helperText="Max file size: 1 MB"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography color="primary" variant="body2" gutterBottom>
                                    Upload Certificate
                                </Typography>
                                <TextField
                                    type="file"
                                    name="certificate12"
                                    variant="filled"
                                    inputProps={{ accept: ".pdf" }}
                                    fullWidth
                                    onChange={(event) =>
                                        handleFileChange(event, setCertificateFile12)
                                    }
                                    style={{ borderRadius: "8px" }}
                                    helperText="Max file size: 1 MB"
                                />
                            </Grid>
                            <Grid item xs={12} md={4} style={{ marginTop: theme.spacing(3) }}>
                                <TextField
                                    name="migrationCertNumber"
                                    label="Migration Certificate Number"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    value={migrationCertNumber}
                                    onChange={(event) =>
                                        setMigrationCertNumber(event.target.value)
                                    }
                                    style={{ borderRadius: "8px" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={1}>
                                {/* Empty space (25%) */}
                            </Grid>
                        </Grid>

                        {/* Navigation Buttons */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Button
                                    onClick={handleBack}
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        color: "#2196F3", // Initial text color
                                        borderColor: "#2196F3", // Initial border color
                                        backgroundColor: "transparent", // Transparent background
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "#2196F3", // Current background color on hover
                                            color: "white", // White text color on hover
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
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#2196F3",
                                        color: "#fff",
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "#1976D2",
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

export default Form5;