// app/providers.tsx
'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Use TypeScript interface for theme
interface ThemeProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: { main: '#03D394' },
    secondary: { main: '#9569EC' },
    background: { default: 'rgba(8, 10, 15, 0.95)' },
  }
});

export default function Providers({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}