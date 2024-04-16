import React, { useState, useEffect } from 'react';

const FileUploadInput = ({ label, onChange, required = true, pageNo }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
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
        }
    }, [label, onChange, pageNo]);

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                id={label}
                onChange={handleInputChange}
                required={required}
            />
            {preview && <img src={preview} alt="preview" />}
        </div>
    );
};

export default FileUploadInput;
