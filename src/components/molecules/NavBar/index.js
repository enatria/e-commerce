/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { makeStyles } from '@mui/styles';
import Link from '../../atoms/Link'
import Brand from '../../atoms/Brand';

const useStyles = makeStyles({
  root: {
    
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="static" sx={{ boxShadow: 'none !important',}}  color="info">
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Brand />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{
                marginRight: '20px',
              }}
              >
                <Link>Home</Link>
              </Box>
              <Box>
                <Link>Login</Link>
              </Box>
            </Box>
            <IconButton>
              <ShoppingCartIcon color="primary" />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}
