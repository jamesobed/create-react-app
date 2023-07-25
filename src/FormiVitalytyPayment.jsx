import React, { useState } from "react";

const token =
  "eyJraWQiOiJcL2JhOThBakhtZ0tEMk0zcjdJaCttVDFSSzFiMmdFS0o3XC85U0VzTUJcL05RPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZDI1OTRkNS1jOTg1LTQ4NGYtOTZmNC0zYzk3YTAwMWQzNDQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9wZDJ3c1Z1OEUiLCJjbGllbnRfaWQiOiI3amllZGM4N2U1OWV1ZzBtZG12cDNqY2xxcSIsIm9yaWdpbl9qdGkiOiI0OWM1MWJmNC01MTE3LTQ3ZDUtOTE2MC0yNTkzZDhiNjFhMmIiLCJldmVudF9pZCI6Ijg4NzM5ZTQ4LTZhYjEtNDA4Ni04MGM5LWE4ZjhiMWZjN2UyNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODg5OTE5MDMsImV4cCI6MTY4OTA3ODMwMywiaWF0IjoxNjg4OTkxOTAzLCJqdGkiOiI1ZWY4YTZjNS0zOTQ1LTRkOWEtYTBhZC04OWZhY2MwYjdiYjciLCJ1c2VybmFtZSI6InRlc3RkdXJpbmdkZXZlbG9wbWVudGdtYWlsLmNvbSJ9.f0EBZ0D6VsIm526H_iJnd9C9bUKJzg8YIHsE1wQpNImA1kSEUVBvV8VDftX9Jp_NZRq7fxYm2ZUvfD2bWfxUrrgrotXEdvP5ZURYZ1fWG6Ifb0DDCAUXkOVGd18cQM_hGmVKWUL1EjxWu-DhS2YYvSkMrQTqEdxDbLcnyS0uoEZdzDlnZGmgw0vf1AIjx26xCg3RQOPGXinFKGGGmWZoydZiM1_xRIXNW2M8D8CEZrnIyTE2be-cNn9pxQipJYkwq17c2ibDf-BM5f40NMgKKTV648rthYzwZ2zHVAJ7xCIuNwdsCM3cKJo0vja915xsxGMz0UcuvBQb0ZDDldmZcg";
const devURl =
  `http://localhost:3050` ||
  `https://tdc7bdmfic.execute-api.us-east-2.amazonaws.com/dev`;
const PaymentForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { amount };

    try {
      // Make the POST request
      // const response = await fetch(`${devURl}/user/payment`, {
      const response = await fetch(`${devURl}/user/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response

      if (response.ok) {
        // Payment successful, redirect to the response URL
        const message = await response.json(); // Assuming the response includes a 'url' property
        console.log("line 33", message);
        window.location.href = message.url; // Redirect the user to the response URL
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

// const PaymentForm = () => {
//   const [amount, setAmount] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a token for authentication

//     // Prepare the request body
//     const requestBody = { amount };

//     try {
//       // Make the POST request
//       const response = await fetch("http://localhost:3050/user/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(requestBody),
//       });

//       // Handle the response
//       if (response.ok) {
//         // Payment successful, do something
//         // console.log("Payment successful");
//         // window.location.href = response;
//       } else {
//         // Payment failed, handle the error
//         console.log("Payment failed");
//       }
//     } catch (error) {
//       console.log("Error:", error.message);
//     }
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Amount:
//         <input
//           type="number"
//           value={amount}
//           onChange={handleAmountChange}
//           required
//         />
//       </label>
//       <button type="submit">Make Payment</button>
//     </form>
//   );
// };

// export default PaymentForm;

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
