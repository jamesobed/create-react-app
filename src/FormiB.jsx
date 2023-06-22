import React, { useState } from 'react';
import axios from 'axios';

const BusinessForm = () => {
  const [businessData, setBusinessData] = useState({
    business_name: '',
    business_address: '',
    business_phone_number: '',
    business_email: '',
    business_number: '',
    business_document: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBusinessData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileInputChange = (event) => {
    setBusinessData((prevState) => ({
      ...prevState,
      business_document: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('business_name', businessData.business_name);
    formData.append('business_address', businessData.business_address);
    formData.append('business_phone_number', businessData.business_phone_number);
    formData.append('business_email', businessData.business_email);
    formData.append('business_number', businessData.business_number);
    formData.append('business_document', businessData.business_document);
    try {
      const response = await axios.post('http://localhost:3009/business', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="business_name">Business Name:</label>
        <input type="text" id="business_name" name="business_name" value={businessData.business_name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="business_address">Business Address:</label>
        <input type="text" id="business_address" name="business_address" value={businessData.business_address} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="business_phone_number">Business Phone Number:</label>
        <input type="text" id="business_phone_number" name="business_phone_number" value={businessData.business_phone_number} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="business_email">Business Email:</label>
        <input type="email" id="business_email" name="business_email" value={businessData.business_email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="business_number">Business Number:</label>
        <input type="text" id="business_number" name="business_number" value={businessData.business_number} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="business_document">Business Document:</label>
        <input type="file" id="business_document" name="business_document" onChange={handleFileInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BusinessForm;
