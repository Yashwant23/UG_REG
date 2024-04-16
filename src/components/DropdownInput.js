import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const DropdownInput = ({ label, onChange, options, required, pageNo }) => {
    // State to manage the value of the dropdown
    const [selectedValue, setSelectedValue] = useState(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        return storedValue !== null ? storedValue : '';
    });

    // Function to handle input change
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSelectedValue(value);
        // Update localStorage
        localStorage.setItem(`${pageNo}${label}`, value);
        // Propagate change to parent component
        onChange(value);
    };

    // Effect to update selected value when value changes from outside
    useEffect(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        setSelectedValue(storedValue !== null ? storedValue : '');
    }, [label, pageNo]);

    return (
        <TextField
            select
            label={label}
            variant="outlined"
            color="primary"
            fullWidth
            value={selectedValue}
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
