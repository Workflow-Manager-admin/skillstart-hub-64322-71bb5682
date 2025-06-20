import React from 'react';

/**
 * HomePage component displays the main landing page for SkillStart Hub.
 */

// PUBLIC_INTERFACE
function HomePage() {
  return (
    <div className="container hero">
      <span className="subtitle">Welcome to</span>
      <h1 className="title" style={{ color: "var(--base-light)", marginBottom: 0 }}>SkillStart Hub</h1>
      <p className="description" style={{ color: "var(--text-secondary)" }}>
        Turn your skills into actionable startup ideas!
      </p>
      <div>
        <a href="/startup-idea">
          <button className="btn btn-large" style={{ marginRight: "18px" }}>Explore Startup Ideas</button>
        </a>
        <a href="/signin">
          <button className="btn btn-large" style={{ background: "var(--primary-color)", color: "#fff" }}>Sign In</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
