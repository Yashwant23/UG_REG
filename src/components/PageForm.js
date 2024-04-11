import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import FormDisplay from './FormDisplay';
import forms from '../formDetails';
import PageBar from './PageBar';
const PageForm = () => {
    const [currentPage, setCurrentPage] = useState(0); // Start at the first page

    const handleNext = () => {
        if (currentPage < forms.length - 1) { // Prevent going beyond the last page
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) { // Prevent going back from the first page
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <PageBar currentPage={currentPage} totalPages={forms.length} des={forms[currentPage].Des} />
            <FormDisplay {...forms[currentPage]} />
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    disabled={currentPage === 0}
                    sx={
                        {
                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                            margin: "20px"
                        }
                    } // Box shadow
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={currentPage === forms.length - 1}
                    sx={
                        {
                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                            margin: "20px"
                        }
                    } // Box shadow
                >
                    Next
                </Button>
            </Box>
        </div>
    );
};

export default PageForm;
