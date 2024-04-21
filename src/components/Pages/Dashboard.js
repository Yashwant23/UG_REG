import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';

const Dashboard = () => {
    // Define URLs or paths for your PDF files
    const pdfUrls = {
        pdf1: './Dashboard_pdf/1.pdf',
        pdf2: './Dashboard_pdf/2.pdf',
        pdf3: './Dashboard_pdf/3.pdf',
        pdf4: './Dashboard_pdf/4.pdf'
    };

    return (
        <Container maxWidth="lg">
                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ padding: '16px' }}>
                        <Typography variant="h6">Dashboard</Typography>
                        <ul>
                            <li>
                                <a href={pdfUrls.pdf1} download>Download PDF 1</a>
                            </li>
                            <li>
                                <a href={pdfUrls.pdf2} download>Download PDF 2</a>
                            </li>
                            <li>
                                <a href={pdfUrls.pdf3} download>Download PDF 3</a>
                            </li>
                            <li>
                                <a href={pdfUrls.pdf4} download>Download PDF 4</a>
                            </li>
                        </ul>
                    </Paper>
                </Grid>
        </Container>
    );
};

export default Dashboard;
