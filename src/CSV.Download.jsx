import React from "react";
import axios from "axios";

const CsvDownloadButton = () => {
  const handleDownloadClick = () => {
    const downloadUrl =
      "https://b7dbldvqu6.execute-api.us-east-2.amazonaws.com/dev/admin/get-wfp/email/testduringdevelopment@gmail.com?action=download-beneficiaries";
    axios
      .get(downloadUrl, { responseType: "blob" }) // Set the responseType to 'blob' to receive the file as binary data
      .then((response) => {
        // Create a temporary URL for the file
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "beneficiaries.csv");

        // Append the link to the DOM and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up the temporary URL and link element
        window.URL.revokeObjectURL(url);
        link.remove();
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };

  return (
    <div>
      <button onClick={handleDownloadClick}>Download CSV</button>
    </div>
  );
};

export default CsvDownloadButton;
