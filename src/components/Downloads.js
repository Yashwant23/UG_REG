import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

function Downloads() {
    const pdfUrls = {
        pdf1: '../form_data.json',
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ padding: '16px' }}>
                        <Typography variant="h6">Downloads</Typography>
                        <ul>
                            <li>
                                <a href={pdfUrls.pdf1} download>Registration JSON</a>
                            </li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Downloads;
