import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PdfViewer.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { DefaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("Please select a file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdfFile(null);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="file" className="mt-5" onChange={handleChange} />
        <Button variant="primary" type="submit" className="mt-2">
          View PDF
        </Button>
      </Form>
      <h2 className="mt-4">View PDF</h2>
      <div className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
        {viewPdf && (
          <>
            <Viewer
              fileUrl={viewPdf}
              plugins={[defaultLayoutPluginInstance]}
            />
          </>
        )}
        {!viewPdf && <>No PDF</>}
      </div>
    </Container>
  );
};

export default PdfViewer;
