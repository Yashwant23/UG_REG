// DropdownInput.js
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const DropdownInput = ({ label, value, onChange, options, required, pageNo }) => {
    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);

    };

    return (
        <TextField
            select
            label={label}
            variant="outlined"
            color="primary"
            fullWidth
            value={value}
            onChange={handleInputChange}
            required={required}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default DropdownInput;
