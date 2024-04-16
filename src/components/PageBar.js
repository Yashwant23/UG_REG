import React from 'react';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';

const PageBar = ({ currentPage, totalPages, des }) => {
    return (
        <div style={{ margin: '20px 0' }}>
            <Stepper activeStep={currentPage} alternativeLabel>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Step key={index}>
                        <StepLabel sx={{ '& .MuiStepLabel-label': { fontWeight: 'bold', fontSize: '1.2rem' } }} />
                    </Step>
                ))}
            </Stepper>
            <Typography variant="body1" style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
                {des}
            </Typography>
        </div>
    );
};

export default PageBar;
