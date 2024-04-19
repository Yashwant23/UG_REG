import React, { useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';

const TextFieldInput = ({ label, onChange, required,check, pageNo, disableNext, setDisableNext }) => {
    const [inputValue, setInputValue] = useState(() => {
        const storedValue = localStorage.getItem(`${pageNo}${label}`);
        return storedValue !== null ? storedValue : '';
    });
    const [filled, setFilled] = useState(!!inputValue); // Initialize filled state based on localStorage value

    const handleInputChange = (event) => {
        const { value } = event.target;
    
        // Check if the input value contains only numerical characters
        const isNumerical = /^\d*$/.test(value);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(value);

        if(check===""){
            setInputValue(value);
            localStorage.setItem(`${pageNo}${label}`, value);
            onChange(value);
            setFilled(!!value); // Update filled state based on input value
    
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
        }else if(check==="c"){
            if(isNumerical){
                setInputValue(value);
                localStorage.setItem(`${pageNo}${label}`, value);
                onChange(value);
                setFilled(!!value); // Update filled state based on input value
        
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
            }else {
                // If the value is not a valid integer, display an alert message
                alert('Input value must be a valid number');
            }
        
        }else if(check==="e"){
            if(isValidEmail){
                setInputValue(value);
                localStorage.setItem(`${pageNo}${label}`, value);
                onChange(value);
                setFilled(!!value); // Update filled state based on input value
        
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
            }else {
                // If the value is not a valid email, display an alert message
                alert('Input value must be a valid email address');
            }
        
        }else {
            // If the value is not numerical, handle the invalid input
            // You may add an appropriate error handling mechanism here, such as displaying an error message
            console.warn('Input value must be numerical');
        }
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
                required={required}
                error={!filled && required} // Show warning if required and not filled
            // Disable input if disableNext is true
            />
            {!filled && required && (
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
