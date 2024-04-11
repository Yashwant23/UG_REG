import React from 'react';

const FileUploadInput = ({ label, onChange }) => {
    const handleInputChange = (event) => {
        const file = event.target.files[0];
        onChange(file);
        localStorage.setItem(label, file.name);
    };

    return (
        <input
            type="file"
            onChange={handleInputChange}
        />
    );
};

export default FileUploadInput;
