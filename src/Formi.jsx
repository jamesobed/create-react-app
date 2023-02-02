import { useState } from "react";

function Formi() {
  // send data to server
  // {
  //   "name": "John",
  //   "occupation": "Doyin",
  //   "dateOfBirth": "04/01/2004",
  //   "email": "example@domain.com",
  //   "password": "1234567890",
  //   "confirmPassword": "1234567890"
  // }

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [posted, setPosted] = useState("");
  const [image, setImage] = useState("");
  const [commentBody, setcommentBody] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [postID, setpostID] = useState("");

  const url = "http://localhost:4400/image/update-user-image";
  // const url = "https://isdservices-org-api.onrender.com/register";
  // const url = "https://isds.onrender.com/user/register";

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDM5YzBhMzJiOTkzMTY4MTA3YjcyOCIsImlhdCI6MTY3NTM0MjAzMSwiZXhwIjoxNjc1NDI4NDMxfQ.6xI6CVGI1Ss2sZK9ZoxZi9CBczGlotu9JHvlS2oKpxc";


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      occupation,
      dateOfBirth,
      email,
      password,
      confirmPassword,
    };

    setPosted(JSON.stringify(data));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    // formData.append("email", email);
    console.log(formData);

    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // const CreatePost = (e) => {
  //   e.preventDefault();
  // };
  const createComment = (e) => {
    e.preventDefault();
    const data = {
      commentBody,
      postID,
      firstName,
      lastName,
    };

    const url = "http://localhost:4400/comment/create-comment";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your occupation:
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <label>
          Enter your date of birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm your password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <h1>Comments</h1>
      <form onSubmit={createComment}>
        <label>
          Enter your Comments:
          <input
            type="textArea"
            value={commentBody}
            onChange={(e) => setcommentBody(e.target.value)}
          />
        </label>
        <label>
          Enter your postID:
          <input
            type="text"
            value={postID}
            onChange={(e) => setpostID(e.target.value)}
          />
        </label>

        <label>
          Enter your firstName:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </label>
        <label>
          Enter your lastName:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <h1>Image</h1>
      <form onSubmit={handleImage}>
        <label>
          Upload your Profile Picture:
          <input
            type="file"
            // value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      posted: {posted}
    </>
  );
}

export default Formi;
