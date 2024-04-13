// FileUploadInput.js
import React from 'react';

const FileUploadInput = ({ label, onChange, required = true, pageNo }) => {
    const handleInputChange = (event) => {
        const file = event.target.files[0];
        onChange(file);

    };

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                id={label}
                onChange={handleInputChange}
                required={required}
            />
        </div>
    );
};

export default FileUploadInput;
