import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SignInPage provides a sign-in form for user authentication (placeholder).
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
    <div className="container hero" style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2 className="title" style={{ fontSize: "2.2rem" }}>Sign In</h2>
      <form style={{ width: "100%" }} onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "6px",
            border: "1px solid var(--border-color)",
            background: "#fff",
            color: "#222"
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "6px",
            border: "1px solid var(--border-color)",
            background: "#fff",
            color: "#222"
          }}
          required
          autoComplete="current-password"
        />
        <button
          className="btn btn-large"
          style={{
            width: "100%",
            background: "var(--base-light)"
          }}
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
