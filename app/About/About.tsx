'use client';
import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

const About: FC = () => {
  return (
    <Box component="main" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" gutterBottom>
          About
        </Typography>
      </Container>
    </Box>
  );
};

export default About;