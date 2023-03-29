import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Login() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    password: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response=axios.post('http://localhost:5000/api/loginuser', {
  email: credentials.email,
  password: credentials.password,
}, {
  headers: {
    'Content-Type': 'application/json',
  },
})
.then((response) => {
  // handle success
})
.catch((error) => {
console.log(error);
});
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
      if (json.success) {
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken", json.authToken);
        //console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            LogIn
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </>
  );
}
