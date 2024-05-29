import React from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useMediaQuery } from "usehooks-ts";


const PdfViewer = ({ pdf }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // overflowX: "hidden",
      }}
    >
      <Document file={pdf}>
        <Page 
        pageNumber={1} 
        width={isMobile ? window.innerWidth * 0.9 : window.innerWidth * 0.4} 
        />
      </Document>
    </div>
  );
};

export default PdfViewer;
