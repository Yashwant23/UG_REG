import React from 'react'
import { Typography, Container, Grid, Paper, Box } from '@mui/material';

function Downloads() {
    const pdfUrls = {
        pdf1: './Dashboard_pdf/1.pdf',
    };

    return (
        <Container maxWidth="lg">
                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ padding: '16px' }}>
                        <Typography variant="h6">Downloads</Typography>
                        <ul>
                            <li>
                                <a href={pdfUrls.pdf1} download>Download PDF 1</a>
                            </li>
                        </ul>
                    </Paper>
                </Grid>
        </Container>
    );
}

export default Downloads