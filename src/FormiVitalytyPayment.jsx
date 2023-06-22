import React, { useState } from "react";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a token for authentication
    const token =
      "eyJraWQiOiJISFwvQ1JpcGw5ZFRkb1ROZzh2N2kxc3grY25lN1FGU3EwOEZoMyt0N0hwST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkZjdkMWYxZi1jYmM3LTQxYmUtYjhlMS02MzA1Y2UwNGQwNDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9pYm5pQzNJZFEiLCJjbGllbnRfaWQiOiJlczhhcGZqNDJlOGZzZmprZW1oMHJraHJoIiwib3JpZ2luX2p0aSI6IjRlMDI5ZmY0LTRjNzUtNGM5OS1hOWM4LWE5ZjRiMjVlMTI5MyIsImV2ZW50X2lkIjoiMGRmMWZlMDktNDZiNy00OTc5LThjNzQtNjVhYTk5ZDg1MTdmIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY4NDMyNzA2MCwiZXhwIjoxNjg0NDEzNDYwLCJpYXQiOjE2ODQzMjcwNjAsImp0aSI6ImU0NDM3NWVmLTk4NjUtNDA5Ny04NTc5LWE3MmY3ZDU2NGFkMCIsInVzZXJuYW1lIjoib2JlZC5qYW1lc3ZpdGFseXRpY29ycC5jb20ifQ.q0N15uy8I1QPp3rAvT3Vh7YcXPDOj0z5vEJQjl_CVmw8lqbR4lw9eaK9b4BEQ8I2hoijsCLNxjkZfFute4TWqvCRXcEDGJ1ROD83sD8mj6rTZRolmRDe3695OLvki3idZjrU5tnm7D7-GkpSzEGcTqd47g4XrXwMc3Pdg40rcKlYEvKPgVnelMPXTuUqkX6MAYAQgDqk6fvGeAo2XamOA5DdIHrw4wH8m2SNBF9O4KdhJOrwF64Ck7CgfANVDsl5O8bbRunuB3YypfdndcpEB5vkNA7tnxblseK4r-s1d2io8PtBDKia2aP5j70vIATM5N_MzgAzdNK_fEPi2zlblw";

    // Prepare the request body
    const requestBody = { amount };

    try {
      // Make the POST request
      const response = await fetch("http://localhost:3050/user/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response
      if (response.ok) {
        // Payment successful, do something
        console.log("Payment successful");
        window.location.href = response;
      } else {
        // Payment failed, handle the error
        console.log("Payment failed");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          required
        />
      </label>
      <button type="submit">Make Payment</button>
    </form>
  );
};

export default PaymentForm;

/*
const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});

const s3 = new AWS.S3();

// Configure multer middleware with S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'agewell-user-docs',
    acl: 'public-read', // or 'private' if you want the uploaded file to be private
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    }
  })
});

// Create Express.js app
const app = express();

// Define the file upload route
app.post('/upload', upload.single('pdf'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

*/
