import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import image from '../images.jpeg'
const Navbar = () => {
    const navigate = useNavigate(); // Hook for navigation

    // State for anchor element of the avatar menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Open the avatar menu
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close the avatar menu
    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();
        // Navigate to home page
        navigate('/');
    };

    return (
        <AppBar position="static" sx={{
            maxWidth: '100%', // Set the maximum width to 90% of the viewport width
            margin: '0 auto', // Center the AppBar
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 70%)', // Gradient from blue to green
            boxShadow: 'none', // Removes the default shadow
        }}>
            <Toolbar>
                {/* Left side: Logo and name */}
                <img src={image} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    IIT ISM
                </Typography>

                {/* Right side: Avatar */}
                <Avatar
                    alt="User Avatar"
                    src="/path/to/avatar-image.jpg" // Replace with actual image path
                    onClick={handleAvatarClick}
                    sx={{ cursor: 'pointer' }}
                />

                {/* Avatar menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleAvatarClose}
                >
                    <MenuItem onClick={handleAvatarClose}>User Name</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>

            {/* Second layer: Navigation options */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                <Link to="/registration"><Button color="inherit">Fee Payment</Button></Link>
                <Link to="/registration"><Button color="inherit">Registration</Button></Link>
                <Link to="/downloads"><Button color="inherit">Downloads</Button></Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
