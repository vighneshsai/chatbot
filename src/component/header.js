import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tech Support Chatbot
                </Typography>
                <IconButton color="inherit">
                    <HomeIcon />
                </IconButton>
                <Button color="inherit">Home</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
