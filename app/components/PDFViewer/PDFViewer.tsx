'use client'; // Ensure this is a client component
import { useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  url: string;
  parent: {
    setState: (state: any) => void;
    fetchData: () => Promise<void>;
  };
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, parent }) => {
  const lastMove = useRef<number>(0);

  useEffect(() => {
    const handleSelectionChange = async () => {
      if (Date.now() - lastMove.current >= 500) {
        const selection = window.getSelection()?.toString();
        if (selection) {
          parent.setState({ selectedText: selection });
          lastMove.current = Date.now();
          await parent.fetchData();
        }
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [parent]);

  return (
    <Document
      file={url}
      onLoadError={console.error}
    >
      <Page pageNumber={1} width={800} />
    </Document>
  );
};

export default PDFViewer;