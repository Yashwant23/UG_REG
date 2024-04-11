import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import img from "../images.jpeg"

const LoginGrid = styled(Grid)({
    height: '100vh',
});

const ImageSide = styled(Grid)(({ theme }) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: 'fit',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Ensuring text is visible on the image
    textShadow: '2px 2px 4px #000000', // Text shadow for better readability
}));

const FormSide = styled(Grid)({
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 50px',
});

const LoginSideComponent = () => {
    const [credentials, setCredentials] = useState({ applicationNo: '', mobileNo: '', email: '' });

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add form validation logic here

        try {
            const response = await fetch('https://api.example.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <LoginGrid container>
            <ImageSide item xs={12} md={8}>
                {/* Additional college details can be added here */}
            </ImageSide>
            <FormSide item xs={12} md={4}>
                <Typography variant="h4" gutterBottom sx={{
                    fontWeight: 'bold',
                    color: '#2196F3', // Blue color for the welcome text
                    textAlign: 'center',
                    marginBottom: '20px',
                }}>
                    WELCOMES YOU TO THE IIT JEE ADMISSION PORTAL 👋
                </Typography>
                <Typography variant="h6" gutterBottom sx={{
                    color: '#21CBF3', // Lighter blue color for the admission text
                    textAlign: 'center',
                    marginBottom: '20px',
                }}>
                    NEW ADMISSION (JEE) - IIT(ISM)
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        name="applicationNo"
                        label="JEE (Main) Application No"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={credentials.applicationNo}
                        onChange={handleChange}
                    // Add more props for styling
                    />
                    <TextField
                        name="mobileNo"
                        label="Registered Mobile No"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={credentials.mobileNo}
                        onChange={handleChange}
                    // Add more props for styling
                    />
                    <TextField
                        name="email"
                        label="Registered Email ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={credentials.email}
                        onChange={handleChange}
                    // Add more props for styling
                    />
                    <Typography variant="body1" gutterBottom sx={{
                        textAlign: 'center',
                        color: '#666', // Grey color for the sign-in text
                        marginBottom: '20px',
                    }}>
                        Please sign-in to your account and complete the JEE admission process
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth // Make the button wider
                        sx={{
                            marginTop: '20px',
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Gradient background
                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)', // Box shadow
                            color: 'white',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)', // Hover effect
                            },
                        }}
                    >
                        LOGIN
                    </Button>
                </form>
            </FormSide>
        </LoginGrid>
    );
};

export default LoginSideComponent;
