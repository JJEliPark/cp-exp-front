import React, { useState } from "react";

interface DownloadFileProps {
  filename: string;
}

const DownloadFile: React.FC<DownloadFileProps> = ({ filename }) => {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleDownload = () => {
    const url = `${process.env.REACT_APP_API_URL}/files/${filename}`;
    setDownloadUrl(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download {filename}</button>
      {downloadUrl && (
        <a href={downloadUrl} download={filename}>
          Click here to download {filename}
        </a>
      )}
    </div>
  );
};

export default DownloadFile;
