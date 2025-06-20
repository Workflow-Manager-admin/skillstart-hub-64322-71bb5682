import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

/**
 * SignInPage provides a sign-in form for user authentication (placeholder), now with a full-page background image.
 */

// PUBLIC_INTERFACE
function SignInPage() {
  // Local state for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    // Accept any email/password, then navigate to HomePage
    if (email.trim() && password.trim()) {
      navigate('/');
    }
    // Optionally, show an error or feedback for empty fields.
  }

  return (
    <div>
      {/* Background covers entire viewport, behind navbar */}
      <div className="signin-bg-wrapper" />
      <div className="signin-bg-overlay" />
      <div className="signin-content">
        <div className="signin-form-container">
          {/* Sign in form, clear/readable above background */}
          <h2 className="title" style={{ fontSize: "2.2rem" }}>Sign In</h2>
          <form style={{ width: "100%" }} onSubmit={handleSubmit} autoComplete="off">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button
              className="btn btn-large"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
