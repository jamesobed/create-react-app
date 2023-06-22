import React, { useState } from "react";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTI2NmExMzdiYjUyZTY5ZWY3ZjUxMyIsImlhdCI6MTY4NzQ1Njg0NCwiZXhwIjoxNjg3NTQzMjQ0fQ.NhIvOA7N5b99dhp_WJlnJDnM4NysBupS8es2pDZlGd4";

const SellerForm = () => {
  const [seller, setSeller] = useState({
    businessName: "",
    sellerID: "",
    businessPhone: "",
    businessAddress: "",
    companyCACNumber: "",
    identity: null,
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle file input and checkbox separately
    if (type === "file") {
      setSeller((prevSeller) => ({
        ...prevSeller,
        [name]: e.target.files[0],
      }));
    } else if (type === "checkbox") {
      setSeller((prevSeller) => ({
        ...prevSeller,
        [name]: checked,
      }));
    } else {
      setSeller((prevSeller) => ({
        ...prevSeller,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // Create form data to send the files
    const formData = new FormData();
    formData.append("identity", seller.identity);

    // Add other fields to the form data
    for (const key in seller) {
      if (key !== "identity") {
        formData.append(key, seller[key]);
      }
    }

    // Sending the payload to the API endpoint
    axios
      .post("http://localhost:3040/api/business", formData, config)
      .then((response) => {
        console.log("Seller details successfully submitted:", response.data);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error("Error submitting seller details:", error);
        // Handle the error condition if needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Business Name:
        <input
          type="text"
          name="businessName"
          value={seller.businessName}
          onChange={handleChange}
        />
      </label>

      <label>
        Seller ID:
        <input
          type="text"
          name="sellerID"
          value={seller.sellerID}
          onChange={handleChange}
        />
      </label>

      <label>
        Business Phone:
        <input
          type="text"
          name="businessPhone"
          value={seller.businessPhone}
          onChange={handleChange}
        />
      </label>

      <label>
        Business Address:
        <input
          type="text"
          name="businessAddress"
          value={seller.businessAddress}
          onChange={handleChange}
        />
      </label>

      <label>
        Company CAC Number:
        <input
          type="text"
          name="companyCACNumber"
          value={seller.companyCACNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Identity:
        <input
          type="file"
          name="identity"
          accept="image/*"
          onChange={handleChange}
        />
      </label>

      <label>
        Agree to Terms:
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={seller.agreeToTerms}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SellerForm;
