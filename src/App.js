import { useEffect, useState } from 'react';

import './App.css';

export default function App() {
  const initialFormData = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [arePasswordsEqual, setArePasswordsEqual] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkPasswords = () => {
    if (formData.password === formData.confirmPassword) {
      setArePasswordsEqual(true);
    } else {
      setArePasswordsEqual(false);
    }
  };

  useEffect(() => {
    checkPasswords();
  }, [formData]);

  return (
    <form>
      <div className="inputGroupsContainer">
        <h1>Create an account</h1>
        <div className="inputGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
            required
            autoFocus
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          {!arePasswordsEqual && (
            <div className="alert">Passwords do not match 😞</div>
          )}
        </div>

        <div>
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
}
