import React, { useState, useEffect } from 'react';

const FileUploadInput = ({ label, onChange, required = true, pageNo, disableNext, setDisableNext }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState(''); // Add state for file name

    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name); // Set file name
            setPreview(URL.createObjectURL(selectedFile));
            setDisableNext(required ? false : disableNext); // Update disableNext based on the required prop
        }
    };

    // Convert file to Base64 string for local storage
    const readFileAsBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    useEffect(() => {
        const storeFileInLocalStorage = async () => {
            if (file) {
                const base64File = await readFileAsBase64(file);
                localStorage.setItem(`${pageNo}${label}`, fileName);
                localStorage.setItem(`${pageNo}${label}_data`, base64File);
                localStorage.setItem(`${pageNo}${label}_preview`, preview);
            }
        };
        storeFileInLocalStorage();
    }, [file, fileName, label, pageNo, preview]);

    useEffect(() => {
        const storedFileName = localStorage.getItem(`${pageNo}${label}`);
        const storedPreview = localStorage.getItem(`${pageNo}${label}_preview`);
        if (storedFileName) {
            setFileName(storedFileName);
            setPreview(storedPreview);
            setDisableNext(false); // Enable the next button if file is present
        }
    }, [label, pageNo]);

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                id={label}
                onChange={handleInputChange}
                required={required}
            />
            {preview && (
                <div>
                    <p>{fileName}</p> {/* Display the file name */}
                    <img src={preview} alt="File preview" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            {!file && required && (
                <p style={{ color: 'red' }}>This field is required.</p>
            )}
        </div>
    );
};

export default FileUploadInput;
