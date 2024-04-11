import React from 'react';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';

const PageBar = ({ currentPage, totalPages, des }) => {
    return (
        <div>
            <Stepper activeStep={currentPage} alternativeLabel>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Step key={index}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
                {des}
            </Typography>
        </div>
    );
};

export default PageBar;
