import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
export default function App() {
  const [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            required
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
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
            required
          />
        </label>
        <br />
        <label>
          Birth Date:
          <DatePicker selected={data.birthDate}
            onChange={handleChange}
            dateFormat="yyyy/MM/dd"
            required />
        </label>
        <br />
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
        <button type="submit" disabled={!data.terms}>Submit</button>
      </form>
    </div>
  );
}