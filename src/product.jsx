import React, { useState } from "react";
import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTI2NmExMzdiYjUyZTY5ZWY3ZjUxMyIsImlhdCI6MTY4NzQ1Njg0NCwiZXhwIjoxNjg3NTQzMjQ0fQ.NhIvOA7N5b99dhp_WJlnJDnM4NysBupS8es2pDZlGd4";

const ProductForm = () => {
  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    description: "",
    category: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    quantity: 0,
    weight: 0,
    price: 0,
    currency: "",
    sellerAction: "",
    productImage: null,
    // productOwner: "",
    // otp: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file input separately
    if (type === "file") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: e.target.files[0],
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data to send the file
    const formData = new FormData();
    formData.append("productImage", product.productImage);

    // Add other fields to the form data
    for (const key in product) {
      if (key !== "productImage") {
        formData.append(key, product[key]);
      }
    }

    // Sending the payload to the API endpoint
    console.log(formData);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3040/api/product", formData, config)
      .then((response) => {
        console.log("Product successfully submitted:", response.data);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error("Error submitting product:", error);
        // Handle the error condition if needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
      </label>

      <label>
        Product Type:
        <input
          type="text"
          name="productType"
          value={product.productType}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </label>

      <label>
        Subcategory:
        <input
          type="text"
          name="subcategory"
          value={product.subcategory}
          onChange={handleChange}
        />
      </label>

      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
      </label>

      <label>
        Color:
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleChange}
        />
      </label>

      <label>
        Size:
        <input
          type="text"
          name="size"
          value={product.size}
          onChange={handleChange}
        />
      </label>

      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
      </label>

      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={product.weight}
          onChange={handleChange}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </label>

      <label>
        Currency:
        <input
          type="text"
          name="currency"
          value={product.currency}
          onChange={handleChange}
        />
      </label>

      <label>
        Seller Action:
        <input
          type="text"
          name="sellerAction"
          value={product.sellerAction}
          onChange={handleChange}
        />
      </label>

      {/* <label>
        Product Owner:
        <input
          type="text"
          name="productOwner"
          value={product.productOwner}
          onChange={handleChange}
        />
      </label> */}

      {/* <label>
        OTP:
        <input
          type="text"
          name="otp"
          value={product.otp}
          onChange={handleChange}
        />
      </label> */}

      <label>
        Product Image:
        <input
          type="file"
          name="productImage"
          accept="image/*"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
