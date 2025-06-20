import React from 'react';

/**
 * SignInPage provides a sign-in form for user authentication (placeholder).
 */

// PUBLIC_INTERFACE
function SignInPage() {
  return (
    <div className="container hero" style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2 className="title" style={{ fontSize: "2.2rem" }}>Sign In</h2>
      <form style={{ width: "100%" }}>
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "6px",
            border: "1px solid var(--border-color)",
            background: "#fff",
            color: "#222"
          }}
          disabled
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "6px",
            border: "1px solid var(--border-color)",
            background: "#fff",
            color: "#222"
          }}
          disabled
        />
        <button className="btn btn-large" style={{
          width: "100%",
          background: "var(--base-light)"
        }} disabled>
          Sign In
        </button>
      </form>
      <p className="description" style={{ marginTop: 20 }}>
        <em>Sign-in functionality coming soon.</em>
      </p>
    </div>
  );
}

export default SignInPage;
