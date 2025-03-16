'use client';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'background.paper', // Use theme color
          boxShadow: 'none', // Remove shadow for a cleaner look
        }}
      >
        <Toolbar>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              sx={{ fontWeight: 'bold' }} 
              variant="h6" 
              component="h1"
            >
              simpl
            </Typography>
            <Typography 
              sx={{ color: '#03D394', mb: 0.1, mx: 0.5 }} // Added margin for spacing
            >
              •
            </Typography>
            <Typography 
              sx={{ fontWeight: 'bold' }} 
              variant="h6" 
              component="h1"
            >
              ai
            </Typography>
          </Box>

          {/* Navigation Button */}
          <Grid container justifyContent="flex-end">
            <Link href="/user-config" passHref legacyBehavior>
              <Button
                component="a" // Use MUI Button as a link
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  borderRadius: 5,
                  px: 3,
                  py: 1,
                  m: 2,
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  },
                }}
                variant="contained"
                endIcon={<TrendingFlatIcon />}
              >
                App
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;