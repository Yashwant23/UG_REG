// TextFieldInput.js
import React from 'react';
import { TextField } from '@mui/material';

const TextFieldInput = ({ label, value, onChange, optional, pageNo }) => {
    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);

    };

    return (
        <TextField
            label={label}
            variant="outlined"
            color="primary"
            fullWidth
            value={value}
            onChange={handleInputChange}
            required={!optional}
        />
    );
};

TextFieldInput.defaultProps = {
    optional: false
};

export default TextFieldInput;
