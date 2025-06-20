import React, { useState } from 'react';

/**
 * StartupIdeaPage – Lets users input skills, shows suggested startup ideas and actionable resource recommendations.
 * Modern, clean layout; color palette: primary #4A90E2, secondary #50E3C2, accent #F5A623.
 */

// --- Static mock data for initial ideas and resources ----
const MOCK_STARTUP_IDEAS = [
  // Original three ideas
  {
    title: "Remote Design Studio Platform",
    description: "Enables freelance designers to collaborate with clients and teams, featuring built-in portfolio tools and AI feedback.",
  },
  {
    title: "Smart Copy Assistant for Startups",
    description: "Offers tailored copywriting templates, startup pitch generator, and brand voice suggestions.",
  },
  {
    title: "DataScience-as-a-Service Tools",
    description: "Plug-and-play analytics and ML tools for startups with minimal coding required.",
  },
  // Additional enriched ideas
  {
    title: "Virtual Fitness Coaching App",
    description: "Connects certified trainers with individuals; personalized workout routines and real-time video coaching.",
  },
  {
    title: "Elderly Tech Support Service",
    description: "On-demand tech help for seniors — virtual or in-home, subscription-based for recurring peace of mind.",
  },
  {
    title: "Marketplace for Micro-Consulting",
    description: "A platform where professionals offer bite-sized consulting sessions for startups and SMEs.",
  },
  {
    title: "B2B Podcast Hosting and Outreach",
    description: "Tool for businesses to launch/manage podcasts, book guests, and integrate analytics effortlessly.",
  },
  {
    title: "Green Home Upgrade Platform",
    description: "Guides homeowners to eco-friendly upgrades with vendor comparisons, calculators, and one-click contractor booking.",
  },
  {
    title: "SkillSwap Community App",
    description: "Peer-to-peer app where users exchange services/skills locally or globally.",
  },
  {
    title: "Automated Resume Tailoring Tool",
    description: "Uses AI to adjust resumes for specific jobs, offering personalized feedback and ATS optimization.",
  },
  {
    title: "Remote Team Building Experiences",
    description: "Curated online activities and games for distributed teams to foster engagement and culture.",
  },
  {
    title: "No-Code App Builder for Nonprofits",
    description: "Empowers charities to easily create donation portals, event pages, and volunteer scheduling apps.",
  },
  {
    title: "Virtual Reality Language Learning",
    description: "Immersive language practice with 3D interactive scenes and real-time pronunciation analysis.",
  },
  {
    title: "Personal Finance Automation Suite",
    description: "Automates savings, investments, budgeting, and bill-pay for young professionals.",
  },
  {
    title: "Content Repurposing Platform",
    description: "Transforms blog posts into videos, podcasts, or infographics with AI-driven formats.",
  },
  {
    title: "AI-Powered Personalized Meal Planning",
    description: "Meal plans and shopping lists tailored to dietary needs and local grocery availability.",
  },
  {
    title: "NFT Art Curation and Marketplace",
    description: "Platform for up-and-coming artists to showcase and sell digital art NFTs with layered curation.",
  },
  {
    title: "Pop-Up Retail Space Platform",
    description: "Matches brands with temporary retail spaces, managing booking and legal logistics online.",
  },
  {
    title: "Home Lab Science Kits Subscription",
    description: "Monthly subscription boxes with engaging STEM projects for children and parents to do at home.",
  },
  {
    title: "Freelancer Compliance & Tax Helper",
    description: "App for gig workers to track income, automate tax calculations, and store contracts in one place.",
  }
];

/**
 * EXTENDED_SET: Large, diverse, and categorized list of popular skills for pill/chip UI.
 * Categories help with logical ordering and UI grouping if needed in the future.
 */
const POPULAR_SKILLS = [
  // Design & Creative (curated)
  "UI/UX Design",
  "Web Design",
  "Graphic Design",
  "Product Design",

  // Software Development & Engineering
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "API Development",
  "Cybersecurity",

  // Programming Languages/Frameworks (representative/modern)
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",

  // Data, AI & Analytics
  "Data Science",
  "Machine Learning",
  "AI/ML",
  "Data Analytics",
  "Data Engineering",

  // Product & Business
  "Product Management",
  "Business Development",
  "Project Management",

  // Marketing & Growth
  "Digital Marketing",
  "Content Marketing",
  "SEO",
  "Growth Hacking",
  "Social Media Marketing",

  // User/Customer
  "UX Research",
  "Customer Experience",

  // Other highly relevant/modern
  "Startup Strategy",
  "Fundraising",
  "Innovation",
  "E-commerce",
  "No-Code Tools",

  // Optional: a few key soft skills
  "Leadership",
  "Critical Thinking",
  "Collaboration"
];

const MOCK_TOOLS = [
  "Figma (collaborative design)",
  "Jasper (AI-powered writing)",
  "Notion (roadmap/project mgmt)",
];
const MOCK_DOMAINS = [
  "skillstartup.io",
  "talentlaunchpad.com",
  "aiideahub.net",
];
const MOCK_ROADMAP = [
  "1. Validate startup problem with quick survey/interviews.",
  "2. Launch minimum viable landing page.",
  "3. Collect early users and iterate feature set.",
];

// --- Helper to stub future backend idea generation ---
/**
 * Placeholder for future backend/API powered idea generation.
 * @param {string[]} skills - List of user skills
 * @returns {Array} - For now, returns a subset of mock ideas.
 */
// PUBLIC_INTERFACE
function generateStartupIdeas(skills) {
  // TODO: Implement backend integration, AI, or more advanced logic here
  // For MVP, simply return static mock ideas, but filter if user enters "design", "copywriting", etc.
  if (Array.isArray(skills) && skills.length > 0) {
    const skillStr = skills.join(' ').toLowerCase();
    if (skillStr.includes('design')) return [MOCK_STARTUP_IDEAS[0]];
    if (skillStr.includes('copy')) return [MOCK_STARTUP_IDEAS[1]];
    if (skillStr.includes('data')) return [MOCK_STARTUP_IDEAS[2]];
    return [MOCK_STARTUP_IDEAS[0], MOCK_STARTUP_IDEAS[1]];
  }
  return MOCK_STARTUP_IDEAS;
}

/**
 * PUBLIC_INTERFACE
 * StartupIdeaPage component for the interactive input of skills,
 * now includes common skills as selectable options ("chips").
 */
function StartupIdeaPage() {
  // State for combined skill input (manual + chips)
  const [skillInput, setSkillInput] = useState('');
  const [submittedSkills, setSubmittedSkills] = useState([]);
  const [suggestedIdeas, setSuggestedIdeas] = useState([]);
  // New: Track if 'Get Suggestions' has been clicked
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  // Track selected chips so we can visually show which are chosen
  const [selectedChips, setSelectedChips] = useState([]);

  // Handler for user submitting skills form
  function handleSkillSubmit(e) {
    e.preventDefault();
    // Merge skillInput (split by comma) and selectedChips, filter for uniqueness
    const manualSkills = skillInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    // Prevent duplicates
    const allSkills = Array.from(new Set([...manualSkills, ...selectedChips]));
    setSubmittedSkills(allSkills);
    setSuggestedIdeas(generateStartupIdeas(allSkills));
    setSuggestionsVisible(true);
  }

  // Handler for clicking a skill chip: add/remove, and always hide suggestions until next submit
  function handleChipClick(skill) {
    setSuggestionsVisible(false); // Hide suggestions on chip change until "Get Suggestions"
    if (selectedChips.includes(skill)) {
      setSelectedChips(selectedChips.filter(s => s !== skill));
      const manualList = skillInput
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .filter(s => s.toLowerCase() !== skill.toLowerCase());
      setSkillInput(manualList.join(", "));
    } else {
      setSelectedChips([...selectedChips, skill]);
      const manualList = skillInput
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
      if (!manualList.some(s => s.toLowerCase() === skill.toLowerCase())) {
        setSkillInput(skillInput && skillInput.trim() !== "" ? skillInput.trim() + ", " + skill : skill);
      }
    }
  }

  // Render chips as styled pill-buttons
  const renderSkillChips = () => (
    <div style={{
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '18px',
      marginTop: '4px'
    }}>
      {POPULAR_SKILLS.map(skill => (
        <button
          type="button"
          key={skill}
          onClick={() => handleChipClick(skill)}
          style={{
            background: selectedChips.includes(skill) ? "var(--primary-color)" : "#f2f7fd",
            color: selectedChips.includes(skill) ? "#fff" : "#275176",
            border: selectedChips.includes(skill) ? "1.8px solid var(--primary-color)" : "1.4px solid #bbccf1",
            borderRadius: "17px",
            padding: "6px 16px",
            fontWeight: 500,
            fontSize: "1.05rem",
            cursor: "pointer",
            outline: "none",
            boxShadow: selectedChips.includes(skill)
              ? "0 2px 9px 0 rgba(74,144,226,0.09)"
              : "0 1px 5px 0 rgba(205,224,246,0.1)",
            transition: "all 0.13s",
          }}
          aria-pressed={selectedChips.includes(skill)}
        >
          {skill}
          {selectedChips.includes(skill) ? (
            <span style={{
              marginLeft: 6,
              fontWeight: 900,
              fontSize: "1.01em"
            }}>✔</span>
          ) : null}
        </button>
      ))}
    </div>
  );

  return (
    <div className="container" style={{ paddingTop: "64px", paddingBottom: "32px" }}>
      <section
        style={{
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 2px 13px rgba(74,144,226,0.065)",
          padding: "2.2rem 2rem 2rem 2rem",
          marginBottom: "34px",
          border: "1px solid #E4ECF7",
          maxWidth: 920,
        }}
      >
        {/* SKILL INPUT */}
        <h2 style={{
          color: "#4A90E2",
          fontWeight: 700,
          fontSize: "1.9rem",
          marginBottom: "16px",
          letterSpacing: ".2px"
        }}>
          Turn Your Skills Into Startup Ideas
        </h2>
        {/* Popular/Common Skills Section */}
        <div
          style={{
            fontWeight: 500,
            fontSize: "1.07rem",
            marginBottom: "2px",
            color: "var(--base-dark)",
            opacity: 0.92
          }}>
          Popular skills:
        </div>
        {renderSkillChips()}

        <form onSubmit={handleSkillSubmit} style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "18px" }}>
          <input
            type="text"
            value={skillInput}
            onChange={e => {
                setSkillInput(e.target.value);
                setSuggestionsVisible(false); // Hide suggestions until submit
            }}
            placeholder="e.g. Web Design, Copywriting, Data Science"
            style={{
              flex: 2,
              minWidth: "240px",
              padding: "13px 11px",
              fontSize: "1.15rem",
              borderRadius: "7px",
              border: "1.5px solid #AFCBE2",
              outline: "none",
              background: "#f8fbfd",
              color: "#282832",
              marginRight: "4px",
            }}
            aria-label="Your Skills"
            autoComplete="off"
          />
          <button type="submit"
            className="btn"
            style={{
              background: "#F5A623",
              color: "#fff",
              padding: "11px 22px",
              fontWeight: 600,
              fontSize: "1.09rem",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}>
            Get Suggestions
          </button>
        </form>

        {/* SUGGESTED STARTUP IDEAS - show only if suggestionsVisible */}
        <section style={{
          marginTop: "16px",
          marginBottom: "32px",
        }}>
          <div style={{ color: "#50E3C2", fontWeight: 600, fontSize: "1.18rem", marginBottom: "11px" }}>
            Suggested Startup Ideas
          </div>
          {!suggestionsVisible && (
            <div style={{ color: "#aaa", fontSize: "1.10rem", padding: "10px 0 18px 0" }}>
              <em>Enter some skills and click <b>Get Suggestions</b> to see startup ideas tailored for you!</em>
            </div>
          )}
          {suggestionsVisible && (
            <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
              {suggestedIdeas.map((idea, idx) => (
                <li key={idea.title + idx} style={{
                  background: "#f8fbfd",
                  border: "1px solid #E5E7F1",
                  borderRadius: "10px",
                  padding: "20px 18px 16px 18px",
                  marginBottom: "15px",
                  boxShadow: "0 1px 7px rgba(80,227,194,0.07)",
                }}>
                  <span style={{ color: "#4A90E2", fontWeight: 500, fontSize: "1.12rem" }}>{idea.title}</span>
                  <div style={{
                    color: "#373E49",
                    fontSize: "1.03rem",
                    marginTop: "7px",
                    opacity: 0.9,
                  }}>{idea.description}</div>
                </li>
              ))}
              {suggestedIdeas.length === 0 && (
                <li style={{ color: "#aaa", fontSize: "1.08rem" }}>
                  <em>No suggestions available yet.</em>
                </li>
              )}
            </ul>
          )}
        </section>
      </section>

      {/* RESOURCE RECOMMENDATIONS */}
      <section
        style={{
          background: "#f2fffa",
          borderRadius: "18px",
          padding: "2.2rem 2rem",
          boxShadow: "0 1px 8px rgba(80,227,194,0.064)",
          border: "1px solid #D4F3EA",
          maxWidth: 920,
          margin: "0 auto"
        }}
      >
        <div style={{ color: "#50E3C2", fontWeight: 700, fontSize: "1.35rem", marginBottom: "18px" }}>
          Actionable Recommendations
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}>
          {/* Tools */}
          <div style={{
            flex: 1.5,
            background: "#fff",
            border: "1px solid #C2F7DD",
            borderRadius: "12px",
            padding: "1.3rem",
            marginBottom: "12px"
          }}>
            <strong style={{ color: "#50E3C2" }}>Recommended Tools</strong>
            <ul style={{ margin: "12px 0 0 1em", color: "#34524D", opacity: 0.85 }}>
              {MOCK_TOOLS.map(tool => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
          {/* Domains */}
          <div style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #E4ECF7",
            borderRadius: "12px",
            padding: "1.3rem",
          }}>
            <strong style={{ color: "#4A90E2" }}>Domain Name Ideas</strong>
            <ul style={{ margin: "12px 0 0 1em", color: "#24416F", opacity: 0.82 }}>
              {MOCK_DOMAINS.map(domain =>
                <li key={domain}>
                  {domain}&nbsp;<span role="img" aria-label="domain">🌐</span>
                </li>
              )}
            </ul>
          </div>
          {/* Roadmap */}
          <div style={{
            flex: 1.2,
            background: "#fff",
            border: "1px solid #F7E4C2",
            borderRadius: "12px",
            padding: "1.3rem",
          }}>
            <strong style={{ color: "#F5A623" }}>Startup Roadmap</strong>
            <ul style={{ margin: "12px 0 0 1em", color: "#6a560b", opacity: 0.81 }}>
              {MOCK_ROADMAP.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "38px" }}>
        <a href="/">
          <button className="btn btn-large"
            style={{
              background: "var(--primary-color)",
              color: "#fff",
              borderRadius: "5px",
              fontWeight: 500,
            }}>
            ← Back to Home
          </button>
        </a>
      </div>
    </div>
  );
}

export default StartupIdeaPage;
