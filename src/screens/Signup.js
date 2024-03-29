import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    password: "",
    email: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
   const response= axios.post('http://localhost:5000/api/createuser', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      location: credentials.geolocation,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // handle success
    })
    .catch((error) => {
      // handle error
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
    alert("Enter valid credentials");
  }};
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]:event.target.value })
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
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
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>      
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
