import React from 'react';
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
    return (
        <LoginGrid container>
            <ImageSide item xs={12} md={8}>

                {/* Additional college details can be added here */}
            </ImageSide>
            <FormSide item xs={12} md={4} sx={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 50px',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)', // Box shadow for the form side
            }}>
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

                {/* TextFields with similar styling as the button */}
                <TextField
                    label="JEE (Main) Application No"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    sx={{
                        marginBottom: '10px',
                        '& label.Mui-focused': {
                            color: '#2196F3', // Blue color when the text field is focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#2196F3', // Blue border for the text field when focused
                            },
                        },
                    }}
                />
                <TextField
                    label="Registered Mobile No"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    sx={{
                        marginBottom: '10px',
                        '& label.Mui-focused': {
                            color: '#2196F3', // Blue color when the text field is focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#2196F3', // Blue border for the text field when focused
                            },
                        },
                    }}
                />
                <TextField
                    label="Registered Email ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    sx={{
                        marginBottom: '10px',
                        '& label.Mui-focused': {
                            color: '#2196F3', // Blue color when the text field is focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#2196F3', // Blue border for the text field when focused
                            },
                        },
                    }}
                />
                {/* ... other TextFields with similar styling */}

                <Typography variant="body1" gutterBottom sx={{
                    textAlign: 'center',
                    color: '#666', // Grey color for the sign-in text
                    marginBottom: '20px',
                }}>
                    Please sign-in to your account and complete the JEE admission process
                </Typography>
                <Button
                    variant="contained"
                    npm
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
            </FormSide>
        </LoginGrid>
    );
};

export default LoginSideComponent;
