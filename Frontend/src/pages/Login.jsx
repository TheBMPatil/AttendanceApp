import React, { useState } from 'react';
import "./style/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Reset error message if form is valid
    setError('');
    
    console.log('Logging in:', { email, password });
    //  submit the form data to the server.
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='inData'>
          <label className='in-label'>
            Email:
            <input
              className='in-box'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className='in-label'>
            Password:
            <input
              className='in-box'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        
        {error && <div className='error'>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
