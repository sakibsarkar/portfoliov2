"use client";
const ResumeDownloadButton = () => {
  const handleDownload = async () => {
    const fileUrl = "http://localhost:3000/file/nazmul_islam_sakib.pdf";

    try {
      // Fetch the file
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch the file.");
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      // Create a URL for the Blob
      const blobUrl = URL.createObjectURL(blob);

      // Create an anchor element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "nazmul_islam_sakib.pdf";

      // Append to the body and trigger the click
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <button onClick={handleDownload} className="primaryBtn">
      DOWNLOAD RESUME
    </button>
  );
};

export default ResumeDownloadButton;
