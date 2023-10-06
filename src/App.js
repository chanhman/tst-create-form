import { useEffect, useState } from 'react';

import Alert from './components/Alert/Alert';
import InputGroup from './components/InputGroup/InputGroup';

import './App.css';

export default function App() {
  const initialFormData = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [arePasswordsEqual, setArePasswordsEqual] = useState(true);

  const isValid =
    arePasswordsEqual && !!formData.username && !!formData.confirmPassword;

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
        <InputGroup
          label="Username*"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
          required
          autoFocus
        />
        <InputGroup
          label="Password*"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          onError={!arePasswordsEqual}
          required
        />
        <InputGroup
          label="Confirm Password*"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
          onError={!arePasswordsEqual}
        />

        {!arePasswordsEqual && <Alert message="Passwords do not match 😞" />}

        <div>
          <button type="submit" disabled={!isValid}>
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
