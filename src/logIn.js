import React, { useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";


export default function LogIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="form">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <span style={{fontSize: 12}}>Forgot password?</span>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Link to="/" style={{ cursor: 'pointer', color: '#286fb4' }}>Don't have an account? Register</Link>
    </div>
  );
}
