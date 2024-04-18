import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import img from '../images.jpeg';

const LoginGrid = styled(Grid)({
    height: '100vh',
});

const ImageSide = styled(Grid)(({ theme }) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
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
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        applicationNo: '',
        mobileNo: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const validateApplicationNo = (number) => {
        return number.length === 12 && /^\d+$/.test(number);
    };

    const validateMobileNo = (number) => {
        return number.length === 10 && /^\d+$/.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });

        // Validate the input as the user types
        switch (name) {
            case 'applicationNo':
                setErrors({
                    ...errors,
                    applicationNo: !validateApplicationNo(value),
                });
                break;
            case 'mobileNo':
                setErrors({
                    ...errors,
                    mobileNo: !validateMobileNo(value),
                });
                break;
            case 'email':
                setErrors({
                    ...errors,
                    email: !validateEmail(value),
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform final validation checks before submitting the form
        const isValidApplicationNo = validateApplicationNo(credentials.applicationNo);
        const isValidMobileNo = validateMobileNo(credentials.mobileNo);
        const isValidEmail = validateEmail(credentials.email);

        setErrors({
            applicationNo: !isValidApplicationNo,
            mobileNo: !isValidMobileNo,
            email: !isValidEmail,
        });

        // If all fields are valid, navigate to the next route
        if (isValidApplicationNo && isValidMobileNo && isValidEmail) {
            navigate('/dashboard'); // Navigate to the desired route
        }
    };

    return (
        <LoginGrid container>
            <ImageSide item xs={12} md={8}>
                {/* Additional college details can be added here */}
            </ImageSide>
            <FormSide item xs={12} md={4}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#2196F3',
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    WELCOMES YOU TO THE IIT JEE ADMISSION PORTAL 👋
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        color: '#21CBF3',
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
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
                        error={errors.applicationNo}
                        helperText={
                            errors.applicationNo ? 'Application No must be a 12-digit number.' : ''
                        }
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
                        error={errors.mobileNo}
                        helperText={errors.mobileNo ? 'Mobile No must be a 10-digit number.' : ''}
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
                        error={errors.email}
                        helperText={errors.email ? 'Email must be valid.' : ''}
                    />
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            color: '#666',
                            marginBottom: '20px',
                        }}
                    >
                        Please sign-in to your account and complete the JEE admission process.
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            marginTop: '20px',
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                            color: 'white',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
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
