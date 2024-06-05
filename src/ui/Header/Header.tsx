import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
    handleClose();
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box width="100%" display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              {auth ? (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button color="inherit" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
