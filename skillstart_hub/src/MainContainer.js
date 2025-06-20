import React from "react";

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * Main Container for SkillStart Hub.
   * This renders all primary app sections as organized placeholders styled with the required color scheme.
   */
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
        fontFamily:
          "'Inter','Roboto','Helvetica','Arial',sans-serif",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header / Navigation */}
      <header
        style={{
          width: "100%",
          background: "#4A90E2",
          padding: "32px 0 24px 0",
          marginBottom: "42px",
          boxShadow: "0 2px 12px rgba(74, 144, 226, 0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.9rem",
              color: "#fff",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span
              style={{
                color: "#F5A623",
                fontSize: "2.3rem",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              ♟
            </span>
            SkillStart Hub
          </div>
          <button
            style={{
              background: "#50E3C2",
              color: "#fff",
              padding: "10px 28px",
              borderRadius: "5px",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      <main
        style={{
          width: "100%",
          maxWidth: "980px",
          margin: "0 auto",
          flex: 1,
        }}
      >
        {/* Skill Input & Suggestion Display Section */}
        <section
          style={{
            background: "#f8fbfd",
            borderRadius: "20px",
            padding: "2.5rem 2rem 2rem 2rem",
            marginBottom: "32px",
            boxShadow: "0 1px 7px rgba(74,144,226,0.06)",
            border: "1px solid #E4ECF7",
          }}
        >
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h2
                style={{
                  color: "#4A90E2",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: "12px",
                  letterSpacing: "0.3px",
                }}
              >
                Input Your Skill(s)
              </h2>
              <input
                placeholder="e.g., Web Design, Copywriting, Data Science"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "7px",
                  border: "1px solid #B9E3FB",
                  fontSize: "1.1rem",
                  marginBottom: "14px",
                  background: "#fff",
                  color: "#323232",
                }}
                disabled
              />
              <button
                style={{
                  background: "#F5A623",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "5px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "not-allowed",
                  marginTop: "6px",
                  opacity: 0.7,
                }}
                disabled
              >
                Generate Suggestions
              </button>
            </div>
            <div
              style={{
                flex: 2,
                minWidth: "280px",
                background: "#fff",
                border: "1px solid #E5E5E5",
                borderRadius: "12px",
                padding: "24px",
                marginLeft: "20px",
                boxShadow: "0 1px 8px rgba(80,227,194,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#50E3C2",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  marginBottom: "4px",
                  letterSpacing: "0.3px",
                }}
              >
                Suggestions
              </span>
              <ul
                style={{
                  fontSize: "1.05rem",
                  color: "#222",
                  opacity: 0.7,
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <em>Startup idea recommendations will appear here based on the skills you enter.</em>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resource Recommendations Section */}
        <section
          style={{
            background: "#f2fffa",
            borderRadius: "20px",
            padding: "2rem 2rem 2rem 2rem",
            marginBottom: "32px",
            boxShadow: "0 1px 7px rgba(80,227,194,0.06)",
            border: "1px solid #DEF6F0",
          }}
        >
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            <div style={{ flex: 3, minWidth: "240px" }}>
              <h2
                style={{
                  color: "#50E3C2",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: "12px",
                  letterSpacing: "0.3px",
                }}
              >
                Resource Recommendations
              </h2>
              <div
                style={{
                  fontSize: "1rem",
                  marginBottom: "7px",
                  color: "#2b3d3b",
                }}
              >
                {/* Placeholder resource blocks */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #D4F3EA",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "9px",
                }}>
                  <strong>Recommended Tools</strong>
                  <ul style={{
                    margin: "7px 0 0 15px",
                    color: "#45605b",
                    opacity: 0.76,
                  }}>
                    <li>Placeholder tools will be shown here</li>
                  </ul>
                </div>
                <div style={{
                  background: "#fff",
                  border: "1px solid #D4F3EA",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "9px",
                }}>
                  <strong>Domain Name Suggestions</strong>
                  <ul style={{
                    margin: "7px 0 0 15px",
                    color: "#45605b",
                    opacity: 0.73,
                  }}>
                    <li>Domain ideas will be listed here</li>
                  </ul>
                </div>
                <div style={{
                  background: "#fff",
                  border: "1px solid #D4F3EA",
                  borderRadius: "12px",
                  padding: "18px",
                }}>
                  <strong>Action/Roadmap Plan</strong>
                  <ul style={{
                    margin: "7px 0 0 15px",
                    color: "#45605b",
                    opacity: 0.73,
                  }}>
                    <li>An actionable roadmap will show here</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* For possible vertical separation or additional sidebar */}
            <div style={{
              flex: 2,
              minWidth: "220px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}>
              {/* Logo AI Generation & Export Section */}
              <div style={{
                background: "#F5A62312",
                border: "1px solid #F5A62332",
                borderRadius: "13px",
                padding: "18px",
                width: "100%",
                minHeight: "82px",
              }}>
                <h3 style={{
                  color: "#F5A623",
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  margin: 0,
                  marginBottom: "8px"
                }}>Logo Generator & Export</h3>
                <div style={{
                  color: "#7b6331",
                  fontSize: "0.99rem",
                  marginBottom: "7px",
                  opacity: 0.85
                }}>
                  AI-generated logo preview here.<br />
                  <span style={{ fontSize: "0.87rem", color: "#ae9958" }}>
                    [Placeholder for export/download]
                  </span>
                </div>
                <button
                  style={{
                    marginTop: "2px",
                    background: "#F5A623",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 12px",
                    fontWeight: 600,
                    cursor: "not-allowed",
                    opacity: 0.6,
                  }}
                  disabled
                >
                  Export PDF
                </button>
              </div>

              {/* Collaboration Matching Section */}
              <div style={{
                background: "#4A90E215",
                border: "1px solid #4a90e241",
                borderRadius: "13px",
                padding: "18px",
                width: "100%",
                minHeight: "82px",
              }}>
                <h3 style={{
                  color: "#4A90E2",
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  margin: 0,
                  marginBottom: "8px"
                }}>Collaborator Matching</h3>
                <div style={{
                  color: "#30639f",
                  fontSize: "0.96rem",
                  opacity: 0.8,
                }}>
                  <em>
                    AI-powered collaborator suggestions/stubs will display here.
                  </em>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Subtle footer */}
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
  );
}

export default MainContainer;
