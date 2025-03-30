const TokenChartWidget = ({
  assetCode,
  issuer,
}: {
  assetCode: string;
  issuer: string;
}) => {
  return (
    <div className="max-w-3xl mx-auto mt-[5%]">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-lg font-bold text-primary-darker mb-2">
            {assetCode} Summary
          </h2>
          <iframe
            src={`https://stellar.expert/widget/public/asset/summary/${assetCode}-${issuer}`}
            style={{
              border: "none",
              overflow: "hidden",
              maxWidth: "100%",
              minWidth: "300px",
              maxHeight: "100%",
              minHeight: "400px",
              width: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TokenChartWidget;
