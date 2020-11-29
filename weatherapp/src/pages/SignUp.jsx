import React, { useState } from "react";

function SignUp() {
  const [value, setValue] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Account</h3>
        <label for="fname">First name:</label>
      <br />
        
      <input
        type="text"
        id="Firstname"
        className="fname"
        value={value.Firstname}
        onChange={handleChange}
      />
      <br />
        <label for="lname">Last name:</label>
      <br />
        
      <input
        type="text"
        id="Lastname"
        className="lname"
        value={value.Lastname}
        onChange={handleChange}
      />
      <br />
      <label for="email">Email:</label>
      <br />
        
      <input
        type="email"
        id="Email"
        className="email"
        value={value.Email}
        onChange={handleChange}
      />{" "}
      <br />
      <label for="password">Password:</label>
      <br />
        
      <input
        type="password"
        id="Password"
        className="password"
        value={value.Password}
        onChange={handleChange}
      />{" "}
      <br />
      <label for="password">Confirm Password:</label>
      <br />
      <input
        type="password"
        id="Confirmpassword"
        className="cpassword"
        value={value.Confirmpassword}
        onChange={handleChange}
      />{" "}
      <br />
      <input type="submit" id="submit" value="Submit" className="submit" />
    </form>
  );
}

export default SignUp;