import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import FormDisplay from './FormDisplay'; // Replace with your actual FormDisplay component
import forms from '../formDetails'; // Replace with your actual form data
import PageBar from './PageBar'; // Replace with your actual PageBar component

const PageForm = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < forms.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <PageBar currentPage={currentPage} totalPages={forms.length} des={forms[currentPage].Des} />
            <FormDisplay {...forms[currentPage]} /> {/* Render the current form */}
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    disabled={currentPage === 0}
                    sx={{
                        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                        margin: '20px',
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={currentPage === forms.length - 1}
                    sx={{
                        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                        margin: '20px',
                    }}
                >
                    {currentPage === forms.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </div>
    );
};

export default PageForm;
