import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Typography } from '@mui/material';

const DropdownInput = ({ label, onChange, options, required, pageNo, disableNext, setDisableNext }) => {
    // State to manage the value of the dropdown
    const [selectedValue, setSelectedValue] = useState(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        return storedValue !== null ? storedValue : '';
    });

    // State to track if dropdown is filled
    const [filled, setFilled] = useState(!!selectedValue);

    // Function to handle input change
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSelectedValue(value);
        // Update localStorage
        localStorage.setItem(`${pageNo}${label}`, value);
        // Propagate change to parent component
        onChange(value);
        setFilled(!!value); // Update filled state based on selected value

        // Perform the bitwise operation to update disableNext state
        let newDisableNext = disableNext;
        if (required) {
            if (value !== null && value !== '') {
                newDisableNext &= ~1; // Clear the first bit
            } else {
                newDisableNext |= 1; // Set the first bit
            }
        }
        setDisableNext(newDisableNext);
    };

    // Effect to update selected value and filled state when value changes from outside
    useEffect(() => {
        // Get value from localStorage or default to empty string
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        setSelectedValue(storedValue !== null ? storedValue : '');
        setFilled(!!storedValue); // Update filled state based on stored value
    }, [label, pageNo]);

    return (
        <div>
            <TextField
                select
                label={label}
                variant="outlined"
                color="primary"
                fullWidth
                value={selectedValue}
                onChange={handleInputChange}
                required={required}
                error={!filled && required} // Show warning if required and not filled
            // disabled={disableNext} // Disable input if disableNext is true
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            {!filled && required && (
                <Typography variant="body2" color="error">
                    This field is required.
                </Typography>
            )}
        </div>
    );
};

export default DropdownInput;
