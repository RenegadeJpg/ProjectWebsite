interface PDFViewerComponentProps {
  projectName: string;
  pdfPath: string;
}

const PDFViewerComponent: React.FC<PDFViewerComponentProps> = ({
  pdfPath,
  projectName,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-primary-darker mb-6">
            {projectName}'s Whitepaper
          </h1>
          <object
            data={pdfPath}
            type="application/pdf"
            className="w-full h-96 border-0"
          >
            <p className="text-primary-dark">
              Your web browser doesn't have a PDF plugin. Instead you can{" "}
              <a href={pdfPath} className="text-primary underline">
                click here to download the PDF
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
