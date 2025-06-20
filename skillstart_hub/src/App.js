import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import page components
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import StartupIdeaPage from './StartupIdeaPage';

// PUBLIC_INTERFACE
function App() {
  // App root wrapper with navigation and routing for SkillStart Hub.

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-symbol">♟</span>
            SkillStart Hub
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            <Link to="/" className="nav-link" style={{ color: "var(--text-color)" }}>Home</Link>
            <Link to="/startup-idea" className="nav-link" style={{ color: "var(--text-color)" }}>Startup Ideas</Link>
            <Link to="/signin" className="nav-link" style={{ color: "var(--text-color)" }}>Sign In</Link>
          </div>
        </nav>

        {/* Main Content - add padding for fixed navbar */}
        <div style={{ paddingTop: "72px", minHeight: "85vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/startup-idea" element={<StartupIdeaPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer
          style={{
            width: "100%",
            background: "#f4f8fd",
            textAlign: "center",
            padding: "18px 0 8px 0",
            color: "#91b8e4",
            fontSize: "1rem",
            marginTop: "24px",
            borderTop: "1.3px solid #e9eef8",
          }}
        >
          &copy; {new Date().getFullYear()} SkillStart Hub &mdash; Turn Skills To Startups
        </footer>
      </div>
    </Router>
  );
}

export default App;