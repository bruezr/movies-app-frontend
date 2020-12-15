import React, { useState } from 'react';
import axios from 'axios';

const dbUrl = process.env.REACT_APP_MOVIES_DATABASE;

function RegisterUser(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const validate = () => {
    if (
      user.name.trim().length > 2 &&
      user.name.trim().length < 50 &&
      user.email.trim().length > 5 &&
      user.email.trim().length < 255 &&
      user.password.trim().length > 5 &&
      user.password.trim().length < 20
    ) {
      setValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    validate();
  };

  const saveUserToDb = () => {
    axios.post(dbUrl + 'users', user).catch((e) => console.log(e));
  };

  if (submitted && valid) {
    saveUserToDb();
    return (
      <div className="container">
        <h1>User registered successfully</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Register</h1>
          <label>Name</label>
          <input
            type="text"
            className={
              submitted &&
              (user.name.trim().length < 2 || user.name.trim().length > 50)
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <div className="invalid-feedback">Please provide a valid name</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className={
              submitted &&
              (user.email.trim().length < 5 || user.email.trim().length > 255)
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <div className="invalid-feedback">Please provide a valid email</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={
              submitted &&
              (user.password.trim().length < 5 ||
                user.password.trim().length > 20)
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <div className="invalid-feedback">
            Your password must be between 5 and 20 characters long
          </div>
        </div>{' '}
        <button type="submit" className={'btn btn-primary'}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
