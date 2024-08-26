import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import { Link } from "react-router-dom";


export default function SignUp() {
  const [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: '',
    terms: false,
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setData({
      ...data,
      birthDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    if (data.birthDate > minAgeDate) {
      setErrorMsg('You must be at least 18 years old to register.');
      return;
    }

    setErrorMsg('');
    alert('Data: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="form">
      <h1>Registration Form</h1>
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
        <div className="group">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </label>
        </div>
        <br />
        <label>
          Birth Date:
          <DatePicker
            onChange={handleDateChange}
            value={data.birthDate}
            placeholder="Select your birth date"
            required
          />
          <span className="errorMsg">{errorMsg}</span>
        </label>
        <br />
        <div className="group">
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={data.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <br />
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={data.terms}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>
        <br />
        <button type="submit" disabled={!data.terms}>
          Submit
        </button>

        <Link to="/logIn" style={{ cursor: 'pointer', color: '#286fb4' }}>Already have an account? Log in</Link>

      </form>
    </div>
  );
}
