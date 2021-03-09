import React, { useState } from "react";
import "./sign-in.style.scss";

const SignIn = () => {
  const [details, setDetails] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDetails({ email: "", password: "" });
  };
  //not surre
  //   const handleChange = (event) => {
  // const [{ value, name }, setState] = useState(event.target);
  // setState({ [name]: value });
  //   };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={details.email}
          //onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={details.password}
          // onChange={handleChange}
          required
        />
        <label>Email</label>
        <input type="Submit" value="Submit form" />
      </form>
    </div>
  );
};

export default SignIn;
