'use client';
import { FC } from 'react';
import { Paper, Typography } from '@mui/material';

interface TranslationBoxProps {
  innerText?: string;
}

const TranslationBox: FC<TranslationBoxProps> = ({ innerText }) => {
  if (!innerText) {
    return null;
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        position: 'fixed',
        top: 100,
        left: 10,
        zIndex: 3,
        padding: 2,
        maxWidth: '30%',
        backgroundColor: 'background.paper',
        boxShadow: 1,
      }}
    >
      <Typography component="div">
        <Typography component="span" fontWeight="bold">
          Translation:{' '}
        </Typography>
        {innerText}
      </Typography>
    </Paper>
  );
};

export default TranslationBox;