import React, { useState, useEffect } from 'react';

const FileUploadInput = ({ label, onChange, required = true, pageNo, disableNext, setDisableNext }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [filled, setFilled] = useState(false); // Initialize filled state

    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
        setFilled(true); // Set filled state to true when file is selected

        // Perform the bitwise operation to update disableNext state
        let newDisableNext = disableNext;
        if (required) {
            if (selectedFile !== null) {
                newDisableNext &= ~1; // Clear the first bit
            } else {
                newDisableNext |= 1; // Set the first bit
            }
        }
        setDisableNext(newDisableNext);
    };

    useEffect(() => {
        const storeFileInLocalStorage = async () => {
            if (file) {
                const fileData = await readFileAsBytes(file);
                localStorage.setItem(`${pageNo}${label}_name`, file.name);
                localStorage.setItem(`${pageNo}${label}_data`, JSON.stringify(fileData));
                localStorage.setItem(`${pageNo}${label}_preview`, preview);
            }
        };
        storeFileInLocalStorage();
    }, [file, label, pageNo, preview]);

    const readFileAsBytes = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                const byteArray = new Uint8Array(arrayBuffer);
                resolve(Array.from(byteArray)); // Convert Uint8Array to regular array
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    useEffect(() => {
        const storedFileName = localStorage.getItem(`${pageNo}${label}_name`);
        const storedPreview = localStorage.getItem(`${pageNo}${label}_preview`);
        if (storedFileName !== null) {
            onChange(storedFileName);
            setPreview(storedPreview);
            setFilled(true); // Set filled state to true when file is present in localStorage
        }
    }, [label, onChange, pageNo]);

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                id={label}
                onChange={handleInputChange}
                required={!required}
            // disabled={disableNext} // Disable input if disableNext is true
            />
            {preview && <img src={preview} alt="preview" />}
            {!filled && required && (
                <p style={{ color: 'red' }}>This field is required.</p>
            )}
        </div>
    );
};

export default FileUploadInput;
