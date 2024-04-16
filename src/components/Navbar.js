import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

    return (
        <AppBar position="static" sx={{
            maxWidth: '100%', // Set the maximum width to 90% of the viewport width
            margin: '0 auto', // Center the AppBar
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 70%)', // Gradient from blue to green
            boxShadow: 'none', // Removes the default shadow
        }}>
            <Toolbar>
                {/* Left side: Logo and name */}
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
                    <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>

            {/* Second layer: Navigation options */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <Link to="/"><Button color="inherit">Dashboard</Button></Link> */}
                <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                <Link to="/registration"><Button color="inherit">Fee Payment</Button></Link>
                <Link to="/registration"><Button color="inherit">Registration</Button></Link>
                <Link to="/downloads"><Button color="inherit">Downloads</Button></Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
