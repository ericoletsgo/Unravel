'use client';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { Grid, Paper, Dialog, Typography } from '@mui/material';
import Navbar from '../components/Navbar/NavbarApp';
import PDFViewer from '../components/PDFViewer/PDFViewer';
import TranslationBox from '../components/TranslationBox/TranslationBox';

interface State {
  selectedText: string;
  mode: 'upload' | 'display';
  fileRead: string;
  translatedText: string;
}

const UploadPDF = () => {
  const [state, setState] = useState<State>({
    selectedText: '',
    mode: 'upload',
    fileRead: '',
    translatedText: 'Select text to simplify',
  });

  const fileReader = useRef<FileReader | null>(null);

  useEffect(() => {
    fileReader.current = new FileReader();
  }, []);

  const fetchData = async () => {
    if (state.selectedText && state.selectedText.length <= 500) {
      try {
        const response = await fetch('http://api.bobloblaw.tech/simplify_nested/', {
          method: 'POST',
          body: JSON.stringify({
            input_text: state.selectedText.trim(),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setState(prev => ({ ...prev, translatedText: data.simplified_text }));
      } catch (error) {
        console.error('Error fetching translation:', error);
      }
    }
  };

  const handleClose = () => {
    setState(prev => ({ ...prev, mode: 'display' }));
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0] && fileReader.current) {
      fileReader.current.onloadend = handleFileRead;
      fileReader.current.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFileRead = () => {
    if (fileReader.current) {
      setState(prev => ({
        ...prev,
        fileRead: fileReader.current.result as string,
        mode: 'display',
      }));
    }
  };

  if (state.mode === 'display') {
    return (
      <>
        <Navbar />
        <TranslationBox innerText={state.translatedText} />
        <PDFViewer
          parent={{
            setState: (newState: Partial<State>) =>
              setState(prev => ({ ...prev, ...newState })),
            fetchData,
          }}
          url={state.fileRead}
        />
      </>
    );
  }

  if (state.mode === 'upload') {
    return (
      <Dialog open onClose={handleClose}>
        <Paper
          sx={{
            padding: 5,
            textAlign: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Please select file to translate
          </Typography>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            style={{ marginTop: '1rem' }}
          />
        </Paper>
      </Dialog>
    );
  }

  return null;
};

export default UploadPDF;