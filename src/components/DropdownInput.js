import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const DropdownInput = ({ label, value, onChange, options }) => {
    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);
        localStorage.setItem(label, value);
    };

    return (
        <TextField
            select
            label={label}
            variant="filled"
            color="primary"
            fullWidth
            value={value}
            onChange={handleInputChange}
            sx={{
                '& fieldset': {
                    borderColor: 'blue', // Change outline color to blue
                },
                '&:hover fieldset': {
                    borderColor: 'blue', // Change outline color on hover to blue
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'blue', // Change outline color on focus to blue
                },
            }}
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
