import React from "react";
import axios from "axios";
const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/google");
      window.location.href = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};
export default Login;
