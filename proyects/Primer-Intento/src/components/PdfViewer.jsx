import React from "react";
import { Worker, Viewer } from 'react-pdf-viewer';
import '@react-pdf-viewer/core/lib/styles/index.css';

const VistaPdf = ({ url }) => {
  return (
    <div>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${process.env.PDFJS_VERSION}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={url} />
      </Worker>
    </div>
  );
};

export { VistaPdf };
