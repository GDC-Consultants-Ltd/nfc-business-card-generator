// src/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary" component="div" sx={{ fontWeight: 'bold' }}>
          QR Code Generator
        </Typography>
        <Box>
          <Button color="primary">Login</Button>
          <Button variant="contained" color="primary" sx={{ ml: 1 }}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;