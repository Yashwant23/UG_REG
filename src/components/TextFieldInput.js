import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const TextFieldInput = ({ label, onChange, optional, pageNo }) => {
    // State to manage the value of the input
    const [inputValue, setInputValue] = useState(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        return storedValue !== null ? storedValue : '';
    });

    // Function to handle input change
    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        // Update localStorage
        localStorage.setItem(`${pageNo}${label}`, value);
        // Propagate change to parent component
        onChange(value);
    };

    // Effect to update input value when value changes from outside
    useEffect(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        setInputValue(storedValue !== null ? storedValue : '');
    }, [label, pageNo]);

    return (
        <TextField
            label={label}
            variant="outlined"
            color="primary"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            required={!optional}
        />
    );
};

TextFieldInput.defaultProps = {
    optional: false
};

export default TextFieldInput;
