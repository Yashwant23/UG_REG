import React from 'react';
import { TextField } from '@mui/material';

const TextFieldInput = ({ label, value, onChange }) => {
    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);
        localStorage.setItem(label, value);
    };

    return (
        <TextField
            label={label}
            variant="filled"
            color="primary"
            fullWidth
            value={value}
            onChange={handleInputChange}
        />
    );
};

export default TextFieldInput;
