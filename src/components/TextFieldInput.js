import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";

const TextFieldInput = ({
  label,
  onChange,
  required,
  check,
  pageNo,
  disableNext,
  setDisableNext,
}) => {
  const [inputValue, setInputValue] = useState(() => {
    const storedValue = localStorage.getItem(`${pageNo}${label}`);
    return storedValue !== null ? storedValue : "";
  });
  const [filled, setFilled] = useState(!!inputValue); // Initialize filled state based on localStorage value

  const handleInputChange = (event) => {
    const { value } = event.target;

    // Check if the input value contains only numerical characters
    const isNumerical = /^\d*$/.test(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(value);
    const mobilePattern = /^\d{10}$/;
    const isValidMobile = mobilePattern.test(value);
    const applicationPattern = /^\d{12}$/;
    const isValidAppNo = applicationPattern.test(value);
    const Pincode = /^\d{6}$/;
    const isValidPincode = Pincode.test(value);
    const Year = /^\d{4}$/;
    const isValidYear = Year.test(value);
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    const isValidDate = datePattern.test(value);

    if (check != "") {
      if (check === "mobile number" && !isValidMobile) {
        alert("Input value must be a valid mobile number");
      } else if (check === "application number" && !isValidAppNo) {
        alert("Input value must be a valid application number");
      } else if (check === "email" && !isValidEmail) {
        alert("Input value must be a valid email");
      } else if (check === "aadhar number" && !isValidAppNo) {
        alert("Input value must be a valid aadhar number");
      } else if (check === "pincode" && !isValidPincode) {
        alert("Input value must be a valid pincode");
      } else if (check === "year" && !isValidYear) {
        alert("Input value must be a valid year");
      } else if (check === "number" && !isNumerical) {
        alert("Input value must be a valid number");
      } else if (check === "date" && !isValidDate) {
        alert("Input value must be a valid date");
      } else {
        setInputValue(value);
        localStorage.setItem(`${pageNo}${label}`, value);
        onChange(value);
        setFilled(!!value); // Update filled state based on input value

        // Perform the bitwise operation to update disableNext state
        let newDisableNext = disableNext;
        if (required) {
          if (value !== null && value !== "") {
            newDisableNext &= ~1; // Clear the first bit
          } else {
            newDisableNext |= 1; // Set the first bit
          }
        }
      }
    } else {
      setInputValue(value);
      localStorage.setItem(`${pageNo}${label}`, value);
      onChange(value);
      setFilled(!!value); // Update filled state based on input value

      // Perform the bitwise operation to update disableNext state
      let newDisableNext = disableNext;
      if (required) {
        if (value !== null && value !== "") {
          newDisableNext &= ~1; // Clear the first bit
        } else {
          newDisableNext |= 1; // Set the first bit
        }
      }
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(`${pageNo}${label}`);
    setInputValue(storedValue !== null ? storedValue : "");
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
  optional: false,
};

export default TextFieldInput;
