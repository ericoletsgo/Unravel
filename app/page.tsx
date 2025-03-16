'use client';
import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, Typography, Grid, Container } from '@mui/material';

// Define theme colors and styles
const THEME = {
  primary: '#03D394',
  secondary: '#9569EC',
  background: 'rgba(8, 10, 15, 0.95)',
};

const buttonBaseStyle = {
  color: 'white',
  textTransform: 'capitalize',
  borderRadius: 10,
  fontWeight: '600',
  px: 2,
  mt: 2,
};

const Home: FC = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: THEME.background,
          height: '92vh',
          overflow: 'hidden'
        }}
      >
        <Container>
          <Grid
            container
            height="100%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Grid container direction="row" justifyContent="center">
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  Unravel
                </Typography>
                <Typography
                  variant="h2"
                  component="span"
                  sx={{ color: THEME.primary, fontWeight: 'bold' }}
                >
                  •
                </Typography>
                <Typography
                  variant="h2"
                  component="span"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                </Typography>
              </Grid>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: 'white', textAlign: 'center' }}
              >
                Hi!.
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <a
                    href="https://devpost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      sx={{
                        ...buttonBaseStyle,
                        border: `1px solid ${THEME.primary}`,
                        '&:hover': {
                          backgroundColor: THEME.primary,
                        },
                      }}
                    >
                      About Us
                    </Button>
                  </a>
                </Grid>

                <Grid item>
                  <Link href="/user-config" style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        ...buttonBaseStyle,
                        border: `1px solid ${THEME.secondary}`,
                        '&:hover': {
                          backgroundColor: THEME.secondary,
                        },
                      }}
                    >
                      See Our Work
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;