'use client';
import { FC } from 'react';
import { Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';

const Navbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar>
          <Box component="div" display="flex" alignItems="center">
            <Typography 
              variant="h6" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary'
              }}
            >
              Unravel
            </Typography>
            <Typography 
              sx={{ 
                color: '#03D394', 
                mx: 0.1 
              }}
            >
              •
            </Typography>
            <Typography 
              variant="h6" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary'
              }}
            >
            </Typography>
          </Box>
          <Grid 
            container 
            justifyContent="flex-end"
            spacing={2}
          >
            {/* Add navigation items here */}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;