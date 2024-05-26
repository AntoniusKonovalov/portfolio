import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const PdfViewer = ({ pdf }) => {
    return (
        <div style={{ width: '80%', height: '80%' }}>
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfViewer;
