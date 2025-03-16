'use client';
import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

const TranslatePDF: FC = () => {
  return (
    <Box component="main" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" gutterBottom>
          Translate PDF
        </Typography>
        {/* Add your PDF translation content here */}
      </Container>
    </Box>
  );
};

export default TranslatePDF;