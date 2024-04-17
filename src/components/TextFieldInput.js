// TextFieldInput.js
import React, { useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';

const TextFieldInput = ({ label, onChange, optional, pageNo }) => {
    const [inputValue, setInputValue] = useState(() => {
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        return storedValue !== null ? storedValue : '';
    });
    const [filled, setFilled] = useState(!!inputValue); // Initialize filled state based on localStorage value

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        localStorage.setItem(`${pageNo}${label}`, value);
        onChange(value);
        setFilled(!!value); // Update filled state based on input value
    };

    useEffect(() => {
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        setInputValue(storedValue !== null ? storedValue : '');
        setFilled(!!storedValue); // Update filled state based on stored value
    }, [label, pageNo]);

    return (
        <div>
            <TextField
                label={label}
                variant="outlined"
                color="primary"
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
                required={optional}
                error={!filled && optional} // Show warning if required and not filled
            />
            {!filled && !optional && (
                <Typography variant="body2" color="error">
                    This field is required.
                </Typography>
            )}
        </div>
    );
};

TextFieldInput.defaultProps = {
    optional: false
};

export default TextFieldInput;
