import React, { useState, useEffect } from 'react';
import './css/login.css';

const Login = () => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState('');

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('rememberMe', rememberMe);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('rememberMe');
    }
  }, [rememberMe, username]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      username,
      password,
      captcha
    };

    try {
      const response = await fetch('https://6f2a1d48-9962-4e55-8685-115d2b3f899d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setLoading(false);
      alert('Login successful!');
    } catch (error) {
      setLoading(false);
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="captcha">Captcha</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>
        <div className="form-group remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? <div className="spinner"></div> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
