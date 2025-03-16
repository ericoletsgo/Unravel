// app/user-config/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@mui/material';

interface CheckboxLabelProps {
  label: string;
}

const CheckboxLabel = ({ label }: CheckboxLabelProps) => (
  <FormGroup>
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }}
        />
      }
      label={label}
      sx={{ color: 'white' }}
    />
  </FormGroup>
);

const textFieldStyles = {
  input: {
    color: 'white',
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
};

export default function Page() {
  const [checked, setChecked] = useState(true);
  const [url, setUrl] = useState('/get-data');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setUrl('/get-data');
  };

  const documentTypes = [
    'Technical Document',
    'Legal Document',
    'Medical Document',
    'Other',
  ];

  return (
    <Box sx={{ overflowY: 'hidden' }}>
      <Box sx={{ backgroundColor: 'rgba(8, 11, 15, 1)', height: '100vh' }}>
        <Navbar />
        <Grid
          container
          height="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mb: 15 }}>
            <Typography variant="h5" sx={{ color: '#03D394', fontWeight: 'bold' }}>
              Tell us about you.
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
              Please fill some basic details to get started.
            </Typography>

            <Grid
              container
              direction="column"
              sx={{
                height: 'auto',
                width: '70vw',
                borderRadius: 2,
                bgcolor: '#202633',
                p: 5,
                mt: 4,
                color: 'white',
              }}
            >
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
                  Identify the type of document you would like to simplify:
                </Typography>
              </Grid>

              <Grid item>
                <Grid container direction="row">
                  {documentTypes.map((type) => (
                    <CheckboxLabel key={type} label={type} />
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={2}>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
                      Which language is the source document in?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          sx={{ color: 'white' }}
                        />
                      }
                      label="Translate"
                      sx={{ color: 'white' }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Enter Source Language"
                  variant="outlined"
                  sx={textFieldStyles}
                  margin="normal"
                />

                {checked && (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'white', fontWeight: 500, mt: 2 }}
                    >
                      Which language would you like to translate the document to?
                    </Typography>
                    <TextField
                      fullWidth
                      label="Enter Target Language"
                      variant="outlined"
                      sx={textFieldStyles}
                      margin="normal"
                    />
                  </>
                )}

                <Grid container justifyContent="flex-end">
                  <Link href={url} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#9569EC',
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                        mt: 3,
                        '&:hover': {
                          bgcolor: '#202633',
                          border: '1px solid #9569EC',
                        },
                      }}
                    >
                      Continue
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}