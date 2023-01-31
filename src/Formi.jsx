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

  // const url = "http://localhost:4400/user/register";
  const url = "https://isds.onrender.com/user/register";

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

  return (
    <>
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
      posted: {posted}
    </>
  );
}

export default Formi;
