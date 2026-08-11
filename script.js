/* Custom CSS Reset & Variables */
:root {
  --bg-color: #080f18;
  --bg-secondary: #0d1726;
  --card-bg: rgba(15, 28, 46, 0.65);
  --card-border: rgba(45, 212, 191, 0.18);
  --card-border-hover: rgba(45, 212, 191, 0.5);
  
  --primary-teal: #2dd4bf;
  --teal-glow: rgba(45, 212, 191, 0.35);
  --teal-soft: rgba(45, 212, 191, 0.12);
  
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  
  --nav-bg: rgba(8, 15, 24, 0.82);
  --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-code: 'Fira Code', monospace;
}

/* Light Theme Support */
body.light-theme {
  --bg-color: #f1f5f9;
  --bg-secondary: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.8);
  --card-border: rgba(13, 148, 136, 0.2);
  --card-border-hover: rgba(13, 148, 136, 0.6);
  
  --primary-teal: #0d9488;
  --teal-glow: rgba(13, 148, 136, 0.25);
  --teal-soft: rgba(13, 148, 136, 0.12);
  
  --text-primary: #0f172a;
  --text-muted: #475569;
  --nav-bg: rgba(241, 245, 249, 0.85);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: var(--font-main);
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Ambient Glow Effects */
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  z-index: -1;
  pointer-events: none;
}
.glow-1 {
  width: 500px;
  height: 500px;
  background: var(--teal-glow);
  top: -100px;
  left: -100px;
}
.glow-2 {
  width: 400px;
  height: 400px;
  background: rgba(14, 116, 144, 0.25);
  top: 40%;
  right: -100px;
}

/* Container */
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navbar */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--card-border);
  z-index: 1000;
}

.navbar {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo i, .logo span {
  color: var(--primary-teal);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 28px;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--primary-teal);
}

.theme-btn {
  background: var(--teal-soft);
  border: 1px solid var(--card-border);
  color: var(--primary-teal);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px var(--teal-glow);
}

/* Hero / About Section */
.hero-section {
  padding-top: 150px;
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px;
  background: var(--teal-soft);
  border: 1px solid var(--card-border);
  border-radius: 30px;
  color: var(--primary-teal);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--primary-teal);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--primary-teal);
}

.hero-title {
  font-size: 46px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.accent-text {
  color: var(--primary-teal);
}

.hero-subtitle {
  font-family: var(--font-code);
  color: var(--primary-teal);
  font-size: 15px;
  margin-bottom: 16px;
}

.hero-desc {
  color: var(--text-muted);
  font-size: 16px;
  margin-bottom: 28px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-primary {
  background: var(--primary-teal);
  color: #080f18;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--teal-glow);
}

.btn-secondary {
  background: var(--teal-soft);
  color: var(--text-primary);
  border: 1px solid var(--card-border);
}
.btn-secondary:hover {
  border-color: var(--primary-teal);
  color: var(--primary-teal);
}

/* Code Window Container */
.code-window {
  background: var(--bg-secondary);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.window-header {
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--card-border);
}

.dots {
  display: flex;
  gap: 8px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.window-title {
  font-family: var(--font-code);
  font-size: 13px;
  color: var(--text-muted);
}

.window-body {
  padding: 20px;
  font-family: var(--font-code);
  font-size: 13px;
  line-height: 1.7;
}

.kwd { color: #f43f5e; }
.var { color: #38bdf8; }
.prop { color: #a7f3d0; }
.str { color: #fde047; }
.console { color: #fb923c; }
.method { color: #60a5fa; }

/* Sections Common Style */
.section {
  padding: 70px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  color: var(--primary-teal);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  margin-top: 6px;
}

/* Skills Cards */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.skill-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.skill-card:hover {
  border-color: var(--card-border-hover);
  transform: translateY(-4px);
}

.skill-icon {
  font-size: 32px;
  color: var(--primary-teal);
  margin-bottom: 12px;
}

.skill-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.skill-card p {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  overflow: hidden;
}

.skill-bar .fill {
  height: 100%;
  background: var(--primary-teal);
  border-radius: 10px;
}

/* Projects Cards Layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-teal);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.card-banner {
  height: 160px;
  background: linear-gradient(135deg, #0284c7, #0f766e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #ffffff;
}

.bakery-banner {
  background: linear-gradient(135deg, #b45309, #0f766e);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tag-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.tag {
  background: var(--teal-soft);
  color: var(--primary-teal);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
}

.card-content h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.card-content p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 20px;
  flex-grow: 1;
}

.link-btn {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s;
}

.link-btn:hover {
  color: var(--primary-teal);
}

/* Fixed Contact Section (Explicit 3-Column Grid) */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.contact-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover, .contact-card.active-card {
  border-color: var(--primary-teal);
  transform: translateY(-5px);
  background: rgba(15, 28, 46, 0.85);
  box-shadow: 0 10px 25px var(--teal-soft);
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
  background: var(--teal-soft);
  color: var(--primary-teal);
}

.contact-card h3 {
  font-size: 18px;
  margin-bottom: 4px;
}

.contact-card p {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.card-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary-teal);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 30px 20px;
  border-top: 1px solid var(--card-border);
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 40px;
}

.footer i {
  color: #f43f5e;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .hero-section {
    grid-template-columns: 1fr;
    padding-top: 120px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
