/**
 * Complete standalone vanilla HTML, CSS, and JS source files
 * Perfect for BBA college project submission, standalone zip download,
 * and immediate deployment on Vercel or GitHub Pages.
 */

export const VANILLA_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Growth Hub | Digital Marketing, SEO & AI Strategies</title>
  <meta name="description" content="Explore modern digital marketing strategies: SEO, social media, content marketing, PPC, and AI.">
  <!-- Google Fonts: Outfit (Headings) & DM Sans (Body) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-brand" onclick="navigateTo('home')">
        <div class="brand-badge">D</div>
        <div>
          <span class="brand-title">Digital Growth Hub</span>
          <span class="brand-sub">Marketing, SEO & AI</span>
        </div>
      </a>
      
      <nav class="nav-links">
        <a href="#home" class="nav-link active" onclick="navigateTo('home')">Home</a>
        <a href="#articles" class="nav-link" onclick="navigateTo('articles')">Articles</a>
        <a href="#categories" class="nav-link" onclick="navigateTo('categories')">Categories</a>
        <a href="#about" class="nav-link" onclick="navigateTo('about')">About Us</a>
        <a href="#contact" class="nav-link" onclick="navigateTo('contact')">Contact</a>
      </nav>

      <div class="nav-actions">
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Search 10 articles..." oninput="handleSearch(this.value)">
        </div>
        <button class="btn btn-primary" onclick="scrollToArticles()">Explore Articles</button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <span class="hero-tag">Digital Growth Hub · Open Curriculum</span>
        <h1 class="hero-title">Explore the Future of <span class="highlight">Digital Marketing.</span></h1>
        <p class="hero-desc">
          Master the core strategies powering contemporary growth: Search Engine Optimization, social media algorithms, data-driven content marketing, and artificial intelligence in marketing campaigns.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-large" onclick="scrollToArticles()">Browse All 10 Articles &rarr;</button>
          <button class="btn btn-outline btn-large" onclick="filterByCategory('Artificial Intelligence')">Explore AI in Marketing</button>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <strong>10 Full Guides</strong>
            <span>400–600 Words Each</span>
          </div>
          <div class="stat-item">
            <strong>Real Case Studies</strong>
            <span>Local & Enterprise ROI</span>
          </div>
          <div class="stat-item">
            <strong>8 Specialized Fields</strong>
            <span>SEO, Social, AI, PPC</span>
          </div>
          <div class="stat-item">
            <strong>100% Free</strong>
            <span>Open Student Curriculum</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Category & Filter Controls -->
  <section id="categories" class="filter-section">
    <div class="filter-container">
      <div class="category-pills" id="categoryPills">
        <!-- Injected via script.js -->
      </div>
    </div>
  </section>

  <!-- Articles Grid & Reader Section -->
  <section id="articles" class="articles-section">
    <div class="articles-container">
      <div class="section-header">
        <h2 class="section-title">Latest & Featured Articles</h2>
        <p class="section-subtitle">Curated research and step-by-step frameworks for modern marketers.</p>
      </div>

      <!-- Articles Grid -->
      <div class="articles-grid" id="articlesGrid">
        <!-- Rendered dynamically by script.js -->
      </div>

      <!-- Single Article Reader Modal View -->
      <div id="articleModal" class="article-modal" style="display: none;">
        <div class="modal-content">
          <button class="btn-close" onclick="closeArticleModal()">&larr; Back to Articles</button>
          <div id="modalArticleBody"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-header">
        <span class="hero-tag">About Our Mission</span>
        <h2>Bridging Academic Marketing with Digital Execution</h2>
        <p>Digital Growth Hub is an open educational initiative designed to equip business administration students and digital entrepreneurs with proven, real-world growth playbooks.</p>
      </div>
      
      <div class="about-grid">
        <div class="about-card">
          <h3>Curriculum Rigor</h3>
          <p>Every article is formatted with definitions, channel mechanisms, metric benchmarks, and actionable takeaways.</p>
        </div>
        <div class="about-card">
          <h3>Real-World Case Studies</h3>
          <p>Analysis of real businesses, from local boutique bakeries to high-scale B2B technology leaders.</p>
        </div>
        <div class="about-card">
          <h3>Zero Fluff</h3>
          <p>No generic buzzwords. We focus on unit economics, conversion funnels, and measurable ROI.</p>
        </div>
        <div class="about-card">
          <h3>Student-First</h3>
          <p>Completely free and open-source, ideal for college term projects, capstones, and portfolio presentations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-info">
        <span class="hero-tag">Get in Touch</span>
        <h2>Connect with the Editorial Desk</h2>
        <p>Have an inquiry regarding student research, article citations, or project submissions? Reach out to our team.</p>
        <div class="info-item">
          <strong>Email:</strong> editor@digitalgrowthhub.edu
        </div>
        <div class="info-item">
          <strong>Location:</strong> Digital Marketing Learning Lab, University Campus
        </div>
        <div class="info-item">
          <strong>Response SLA:</strong> Within 24–48 business hours
        </div>
      </div>

      <div class="contact-form-card">
        <h3>Send an Academic Message</h3>
        <form id="contactForm" onsubmit="handleContactSubmit(event)">
          <div class="form-group">
            <label for="contactName">Full Name *</label>
            <input type="text" id="contactName" required placeholder="e.g. Alex Johnson">
          </div>
          <div class="form-group">
            <label for="contactEmail">Email Address *</label>
            <input type="email" id="contactEmail" required placeholder="alex@university.edu">
          </div>
          <div class="form-group">
            <label for="contactTopic">Inquiry Topic</label>
            <select id="contactTopic">
              <option>Student Capstone / Research</option>
              <option>Article Proposal / Submission</option>
              <option>Faculty Collaboration</option>
              <option>General Inquiries</option>
            </select>
          </div>
          <div class="form-group">
            <label for="contactMessage">Message *</label>
            <textarea id="contactMessage" rows="4" required placeholder="Enter your inquiry or question here..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Message</button>
          <div id="contactSuccess" class="success-message" style="display: none;">
            Thank you! Your message has been received. Our team will get back to you shortly.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-col">
        <h4 class="footer-logo">Digital Growth Hub</h4>
        <p>Modern digital marketing, SEO, social media, and artificial intelligence curriculum for tomorrow's business leaders.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home" onclick="navigateTo('home')">Home</a></li>
          <li><a href="#articles" onclick="navigateTo('articles')">Articles</a></li>
          <li><a href="#categories" onclick="navigateTo('categories')">Categories</a></li>
          <li><a href="#about" onclick="navigateTo('about')">About Us</a></li>
          <li><a href="#contact" onclick="navigateTo('contact')">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Core Topics</h4>
        <ul>
          <li><a href="#articles" onclick="filterByCategory('SEO')">Search Engine Optimization</a></li>
          <li><a href="#articles" onclick="filterByCategory('Social Media')">Social Media Marketing</a></li>
          <li><a href="#articles" onclick="filterByCategory('Artificial Intelligence')">AI in Marketing</a></li>
          <li><a href="#articles" onclick="filterByCategory('Email Marketing')">Email Automation</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Digital Growth Hub. Published for academic and student research purposes.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

export const VANILLA_CSS = `/* ============================================================
   DIGITAL GROWTH HUB - VANILLA CSS STYLESHEET
   Clean, modern, responsive typography and layout
   Navy headings, purple accents, white canvas
   ============================================================ */

:root {
  --primary-navy: #0f172a;
  --secondary-navy: #1e293b;
  --accent-purple: #7c3aed;
  --accent-purple-hover: #6d28d9;
  --purple-light: #f5f3ff;
  --purple-border: #ddd6fe;
  --neutral-bg: #ffffff;
  --neutral-surface: #f8fafc;
  --border-color: #e2e8f0;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--text-secondary);
  background-color: var(--neutral-bg);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--primary-navy);
  letter-spacing: -0.02em;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary-navy), var(--accent-purple));
  color: white;
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-title {
  display: block;
  font-weight: 700;
  font-size: 17px;
  color: var(--primary-navy);
}

.brand-sub {
  display: block;
  font-size: 11px;
  color: var(--text-muted);
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: var(--accent-purple);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-box input {
  padding: 8px 14px;
  font-size: 13px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--neutral-surface);
  outline: none;
}

.search-box input:focus {
  border-color: var(--accent-purple);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--accent-purple);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-purple-hover);
}

.btn-outline {
  background: white;
  color: var(--primary-navy);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  background: var(--neutral-surface);
}

.btn-large {
  padding: 12px 24px;
  font-size: 14px;
}

/* Hero */
.hero-section {
  padding: 60px 24px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid var(--border-color);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  max-width: 800px;
}

.hero-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent-purple);
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

.hero-title {
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 18px;
  color: var(--primary-navy);
}

.highlight {
  color: var(--accent-purple);
}

.hero-desc {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.stat-item strong {
  display: block;
  font-size: 18px;
  color: var(--primary-navy);
}

.stat-item span {
  font-size: 12px;
  color: var(--text-muted);
}

/* Category Filter */
.filter-section {
  padding: 24px;
  background: white;
  border-bottom: 1px solid var(--border-color);
}

.filter-container {
  max-width: 1200px;
  margin: 0 auto;
}

.category-pills {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
}

.category-pill {
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  background: var(--neutral-surface);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.category-pill:hover {
  background: #e2e8f0;
}

.category-pill.active {
  background: var(--accent-purple);
  color: white;
  border-color: var(--accent-purple);
}

/* Articles Section */
.articles-section {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 15px;
  color: var(--text-muted);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.article-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}

.card-img {
  height: 200px;
  background: var(--secondary-navy);
  position: relative;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
  font-weight: 500;
}

.card-meta strong {
  color: var(--accent-purple);
}

.card-title {
  font-size: 18px;
  line-height: 1.35;
  margin-bottom: 10px;
  color: var(--primary-navy);
}

.card-excerpt {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  padding-top: 14px;
}

.card-author {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-navy);
}

/* Modal Article Reader */
.article-modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  z-index: 200;
  overflow-y: auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.modal-content {
  background: white;
  max-width: 820px;
  width: 100%;
  border-radius: 16px;
  padding: 40px;
  position: relative;
}

.btn-close {
  background: var(--neutral-surface);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 24px;
}

.reader-header h1 {
  font-size: 36px;
  margin: 12px 0 16px;
  line-height: 1.25;
}

.reader-meta {
  font-size: 13px;
  color: var(--text-muted);
}

.reader-intro {
  font-size: 17px;
  background: var(--neutral-surface);
  padding: 20px;
  border-radius: 12px;
  margin: 24px 0;
  border-left: 4px solid var(--accent-purple);
}

.reader-section h2 {
  font-size: 22px;
  margin: 28px 0 12px;
}

.case-box {
  background: var(--purple-light);
  border: 1px solid var(--purple-border);
  padding: 18px;
  border-radius: 12px;
  margin: 20px 0;
}

.case-box h4 {
  color: var(--accent-purple);
  margin-bottom: 6px;
}

.takeaways-box {
  background: var(--primary-navy);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 30px 0;
}

.takeaways-box h3 {
  color: white;
  margin-bottom: 12px;
}

.takeaways-box li {
  margin-bottom: 8px;
  font-size: 14px;
}

/* About & Contact */
.about-section, .contact-section {
  padding: 70px 24px;
  border-top: 1px solid var(--border-color);
}

.about-container, .contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.about-card {
  background: var(--neutral-surface);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 12px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
}

.contact-form-card {
  background: white;
  border: 1px solid var(--border-color);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--primary-navy);
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 13px;
  background: var(--neutral-surface);
}

.success-message {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  margin-top: 16px;
}

/* Footer */
.footer {
  background: var(--primary-navy);
  color: #94a3b8;
  padding: 60px 24px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h4 {
  color: white;
  margin-bottom: 16px;
  font-size: 15px;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  text-align: center;
  font-size: 12px;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .contact-container { grid-template-columns: 1fr; }
  .hero-title { font-size: 32px; }
  .footer-container { grid-template-columns: 1fr; }
}
`;

export const VANILLA_JS = `// ============================================================
// DIGITAL GROWTH HUB - PURE VANILLA JAVASCRIPT
// Handles article rendering, search, category filter, and modal
// ============================================================

// 10 Full In-Depth Articles
const articlesData = [
  {
    id: "1",
    title: "Introduction to Digital Marketing: Foundations, Channels & Business Impact",
    category: "Digital Marketing",
    readTime: "6 min read",
    date: "October 12, 2026",
    author: "Prof. David Vance",
    excerpt: "An essential overview of modern digital marketing, exploring why online presence is vital and how core channels connect brands with global customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    intro: "In the contemporary economy, digital marketing encompasses every promotional effort executed across internet-connected devices. Unlike legacy broadcast media, digital marketing equips businesses with bidirectional communication, instant performance tracking, and granular audience targeting.",
    sections: [
      {
        heading: "Why Digital Marketing Surpasses Traditional Media",
        content: "Traditional advertising relies on broadcast mechanisms with limited measurement. Digital marketing empowers teams to evaluate impressions, clicks, scroll depth, and revenue attribution in real time with lower initial capital requirements.",
        caseTitle: "Artisanal Bakery Case Study",
        caseDesc: "A local bakery used geo-targeted Instagram stories and Google Local Business to announce daily morning batches. Spending $5 daily generated a 42% foot-traffic increase over six weeks."
      },
      {
        heading: "The Five Core Channels",
        content: "1. Organic Search (SEO) for capture of active commercial intent. 2. Social Media for community building. 3. Content Marketing for customer education. 4. Paid Media (PPC) for rapid scale. 5. Email Marketing for retention and repeat customer value."
      }
    ],
    conclusion: "Digital marketing rewards iterative testing, data-informed experimentation, and genuine empathy for customer needs.",
    takeaways: [
      "Digital channels offer real-time measurability and direct customer dialog.",
      "A multi-channel flywheel lowers blended customer acquisition costs.",
      "Small businesses can compete against giants through hyper-local targeting."
    ]
  },
  {
    id: "2",
    title: "Social Media Marketing for Beginners: Platform Playbooks & Community Growth",
    category: "Social Media",
    readTime: "5 min read",
    date: "October 11, 2026",
    author: "Maya Lin",
    excerpt: "How modern businesses leverage Instagram, LinkedIn, and Facebook to build authentic brand equity, foster communities, and drive measurable customer actions.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    intro: "Social media represents an interactive digital town square where brands cultivate trust, answer customer inquiries, and establish category authority.",
    sections: [
      {
        heading: "Platform Selection & Intent",
        content: "Instagram and TikTok excel at lifestyle aesthetics and visual storytelling. LinkedIn dominates B2B transactions and thought leadership. Facebook leads in community groups and local neighborhood events.",
        caseTitle: "B2B SaaS vs. D2C Brand",
        caseDesc: "A cloud accounting startup focused on LinkedIn founder insights and generated 65 qualified enterprise demos per month, while a skincare brand used Instagram reels to scale to $120k/mo."
      },
      {
        heading: "The 70-20-10 Content Rule",
        content: "70% of posts should educate or entertain; 20% should celebrate community/curated content; only 10% should be hard sales pitches."
      }
    ],
    conclusion: "Success on social media is built through daily consistency, genuine conversational replies, and relentless audience respect.",
    takeaways: [
      "Choose platforms based on where your exact buyers spend time.",
      "Follow the 70-20-10 rule: prioritize education over hard selling.",
      "Saves and shares are far more valuable than superficial likes."
    ]
  },
  {
    id: "3",
    title: "Search Engine Optimization (SEO): Ranking Factors, Keywords & Technical Architecture",
    category: "SEO",
    readTime: "7 min read",
    date: "October 09, 2026",
    author: "Marcus Sterling",
    excerpt: "Demystifying how search engines crawl, index, and rank web pages, with actionable strategies for on-page optimization, keyword intent, and authoritative link building.",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80",
    intro: "SEO is the systematic practice of structuring web pages so search engines index and rank them as authoritative answers for user search queries.",
    sections: [
      {
        heading: "Deciphering Search Intent",
        content: "Target informational keywords with guides, commercial keywords with comparison guides, and transactional keywords with clean product pages.",
        caseTitle: "Long-Tail Intent Triumph",
        caseDesc: "A boutique CPA firm targeted 'tax accountant for freelance developers' and captured 28 high-retainer clients within 90 days."
      },
      {
        heading: "On-Page Hierarchy & Core Web Vitals",
        content: "Maintain clean title tags, H1/H2 header hierarchies, and ensure your site loads under 1.5 seconds on mobile devices."
      }
    ],
    conclusion: "SEO provides compounding, zero-cost traffic over years when aligned with audience intent.",
    takeaways: [
      "Target specific search intent rather than broad competitive keywords.",
      "Organize content with clear semantic hierarchy.",
      "Fast page load speed is a fundamental Google ranking factor."
    ]
  },
  {
    id: "4",
    title: "Content Marketing Strategies: Creating High-Impact Assets That Attract & Convert",
    category: "Content Marketing",
    readTime: "5 min read",
    date: "October 08, 2026",
    author: "Elena Rostova",
    excerpt: "How strategic storytelling, educational assets, and multimedia repurposing turn passive internet browsers into loyal brand evangelists.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    intro: "Content marketing attracts and retains prospective buyers by consistently delivering educational value that solves genuine audience problems.",
    sections: [
      {
        heading: "The Pillar and Cluster Architecture",
        content: "Create a 3,000-word cornerstone guide (hub) linked to 8-10 granular spoke articles to establish undeniable topic authority.",
        caseTitle: "1-to-10 Repurposing Framework",
        caseDesc: "One 45-minute webinar interview yielded 1 long blog post, 6 LinkedIn carousels, 8 short video clips, and a 3-part email sequence."
      }
    ],
    conclusion: "Content assets compound over time like financial interest, delivering ongoing leads and citations.",
    takeaways: [
      "Use pillar-cluster models for topical depth.",
      "Build practical lead magnets like calculators and templates.",
      "Ensure every piece of content has a clear next step."
    ]
  },
  {
    id: "5",
    title: "Email Marketing Mastery: Newsletters, Segmentation & Automated Nurture Flows",
    category: "Email Marketing",
    readTime: "6 min read",
    date: "October 06, 2026",
    author: "Rachel Adams",
    excerpt: "Explore why email marketing remains the highest-ROI channel in digital commerce, and how behavioral segmentation drives unprecedented engagement.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    intro: "Your email subscriber list is an owned asset insulated from social media algorithm shifts, returning an average of $36 for every $1 invested.",
    sections: [
      {
        heading: "Behavioral Segmentation",
        content: "Differentiate new subscribers, VIP buyers, and dormant accounts to keep unsubscribe rates low and open rates above 35%.",
        caseTitle: "Automated Cart Recovery",
        caseDesc: "A 3-part automated email series (1 hr, 24 hr, 48 hr) recovered 18.4% of abandoned shopping carts for an online fashion brand."
      }
    ],
    conclusion: "Honor subscriber inboxes with relevant, high-value communication for maximum lifetime value.",
    takeaways: [
      "Email is an owned channel free from third-party algorithm changes.",
      "Automate core flows: Welcome, Abandoned Cart, and Win-back series.",
      "Verify DNS authentication (SPF, DKIM, DMARC) for deliverability."
    ]
  },
  {
    id: "6",
    title: "Influencer Marketing: Collaborations, Creator Economy & Brand Awareness",
    category: "Influencer Marketing",
    readTime: "5 min read",
    date: "October 04, 2026",
    author: "Maya Lin",
    excerpt: "How brands transition from vanity celebrity endorsements to data-backed micro-influencer partnerships that drive genuine credibility and direct sales.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    intro: "Modern consumers trust relatable creators within specialized niches more than generic corporate commercials.",
    sections: [
      {
        heading: "Micro vs. Mega Creators",
        content: "Micro-influencers (10k-50k followers) frequently maintain 5% to 8% engagement rates, outperforming celebrity accounts.",
        caseTitle: "Organic Coffee Growth",
        caseDesc: "Partnering with 15 niche barista creators drove 2,200 subscriptions at 40% lower CAC than standard paid social ads."
      }
    ],
    conclusion: "Authentic creator partnerships build genuine brand prestige and sustainable conversion.",
    takeaways: [
      "Value community engagement rate over raw follower vanity metrics.",
      "Give creators creative freedom to speak in their natural voice.",
      "Track returns with custom discount codes and UTM tags."
    ]
  },
  {
    id: "7",
    title: "Artificial Intelligence in Digital Marketing: Content, Personalization & Predictive Analytics",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    date: "October 02, 2026",
    author: "Dr. Aris Thorne",
    excerpt: "How generative AI, machine learning algorithms, and predictive modeling are transforming how modern marketing teams build campaigns and analyze consumer behavior.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    intro: "AI does not replace human marketers—it amplifies their ability to test creative variations, personalize shopping journeys, and forecast churn.",
    sections: [
      {
        heading: "Dynamic Creative Optimization",
        content: "Machine learning tests hundreds of headline and image permutations to identify winning combinations in real time.",
        caseTitle: "Fintech CAC Reduction",
        caseDesc: "Testing 120 headline variations dynamically reduced customer acquisition cost by 34% within two weeks."
      }
    ],
    conclusion: "The future belongs to marketers who combine human empathy with AI analytics mastery.",
    takeaways: [
      "Use AI to accelerate brainstorming and multi-variant creative testing.",
      "Maintain human editorial oversight to preserve authentic brand voice.",
      "Leverage machine learning for real-time customer personalization."
    ]
  },
  {
    id: "8",
    title: "Paid Advertising and PPC: Mastering Google Ads, Meta Ads & Conversion Bidding",
    category: "Paid Advertising",
    readTime: "6 min read",
    date: "September 28, 2026",
    author: "Marcus Sterling",
    excerpt: "The complete beginner guide to Pay-Per-Click advertising, auction mechanics, audience targeting, and optimizing Return On Ad Spend (ROAS).",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    intro: "PPC offers on-demand commercial visibility, placing your solution in front of prospective buyers the instant they search or scroll.",
    sections: [
      {
        heading: "Search Intent vs. Social Interruption",
        content: "Google Ads captures high-intent pull traffic, while Meta Ads uses visual hooks to interrupt scroll behavior.",
        caseTitle: "Unit Economics in Action",
        caseDesc: "Optimizing ad relevance score and landing page checkout cut CAC from $60 to $28, generating a 3.5x ROAS."
      }
    ],
    conclusion: "Paid media is an amplifier that scales proven products with optimized conversion funnels.",
    takeaways: [
      "Understand the difference between pull search ads and push social ads.",
      "Calculate unit economics and break-even ROAS beforehand.",
      "Ensure landing page messaging strictly matches ad copy promises."
    ]
  },
  {
    id: "9",
    title: "Digital Marketing Analytics: Web Traffic, Conversion Funnels & ROI Attribution",
    category: "Analytics",
    readTime: "6 min read",
    date: "September 24, 2026",
    author: "Dr. Aris Thorne",
    excerpt: "Learn how to interpret Google Analytics 4, track multi-touch attribution models, and translate vanity metrics into executive-level business decisions.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    intro: "Digital marketing analytics transforms raw clicks and sessions into clear business intelligence to guide profitable resource allocation.",
    sections: [
      {
        heading: "Funnel Tiers & Drop-Off Analysis",
        content: "Organize metrics into Top-of-Funnel (traffic), Middle-of-Funnel (engagement), and Bottom-of-Funnel (conversions and revenue).",
        caseTitle: "Checkout Optimization",
        caseDesc: "Removing an upfront mandatory credit card form on a SaaS trial page increased registrations by 310%."
      }
    ],
    conclusion: "Always ask 'why' behind metric anomalies to discover meaningful customer behavior stories.",
    takeaways: [
      "Group metrics by funnel tier to avoid dashboard overload.",
      "Focus optimization on high-friction drop-off points.",
      "Tie marketing performance directly to CAC, LTV, and net revenue."
    ]
  },
  {
    id: "10",
    title: "Building a Personal Brand on LinkedIn: Playbook for Students & Professionals",
    category: "Social Media",
    readTime: "5 min read",
    date: "September 20, 2026",
    author: "Elena Rostova",
    excerpt: "Step-by-step strategies for college students, BBA graduates, and rising professionals to optimize their profile, share insights, and attract career opportunities.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    intro: "A well-crafted LinkedIn presence transforms you from an anonymous job applicant into a recognized, proactive emerging professional.",
    sections: [
      {
        heading: "Profile as a Landing Page",
        content: "Craft a descriptive headline showing your aspirations, pin your top college projects, and articulate your career vision in your summary.",
        caseTitle: "College Capstone to Job Offer",
        caseDesc: "A BBA student shared weekly insights from her digital marketing capstone and received a full-time Growth Associate job offer before graduation."
      }
    ],
    conclusion: "Your personal brand compounds over time—start documenting your learning journey today.",
    takeaways: [
      "Treat your profile as a conversion landing page for career opportunities.",
      "Document your learning and project insights openly.",
      "Consistently engage with industry leaders in their comment sections."
    ]
  }
];

let currentCategory = "All";
let currentSearch = "";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderArticles();
});

function renderCategories() {
  const categories = ["All", "Digital Marketing", "Social Media", "SEO", "Content Marketing", "Email Marketing", "Influencer Marketing", "Artificial Intelligence", "Paid Advertising", "Analytics"];
  const container = document.getElementById("categoryPills");
  if (!container) return;
  
  container.innerHTML = categories.map(cat => \`
    <button class="category-pill \${cat === currentCategory ? 'active' : ''}" onclick="filterByCategory('\${cat}')">
      \${cat}
    </button>
  \`).join("");
}

function filterByCategory(category) {
  currentCategory = category;
  renderCategories();
  renderArticles();
  scrollToArticles();
}

function handleSearch(val) {
  currentSearch = val.toLowerCase().trim();
  renderArticles();
}

function renderArticles() {
  const container = document.getElementById("articlesGrid");
  if (!container) return;

  const filtered = articlesData.filter(article => {
    const matchesCat = currentCategory === "All" || article.category === currentCategory;
    const matchesSearch = !currentSearch || 
      article.title.toLowerCase().includes(currentSearch) ||
      article.excerpt.toLowerCase().includes(currentSearch) ||
      article.category.toLowerCase().includes(currentSearch);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = \`<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">
      <p>No articles found matching your criteria.</p>
      <button class="btn btn-outline" style="margin-top: 12px;" onclick="filterByCategory('All')">Reset Filter</button>
    </div>\`;
    return;
  }

  container.innerHTML = filtered.map(article => \`
    <article class="article-card">
      <div class="card-img">
        <img src="\${article.image}" alt="\${article.title}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <strong>\${article.category}</strong> · \${article.readTime}
        </div>
        <h3 class="card-title">\${article.title}</h3>
        <p class="card-excerpt">\${article.excerpt}</p>
        <div class="card-footer">
          <span class="card-author">\${article.author}</span>
          <button class="btn btn-outline" onclick="openArticleModal('\${article.id}')">Read More &rarr;</button>
        </div>
      </div>
    </article>
  \`).join("");
}

function openArticleModal(id) {
  const article = articlesData.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById("articleModal");
  const body = document.getElementById("modalArticleBody");
  if (!modal || !body) return;

  body.innerHTML = \`
    <div class="reader-header">
      <div class="reader-meta">
        <strong>\${article.category}</strong> · \${article.readTime} · \${article.date} · By \${article.author}
      </div>
      <h1>\${article.title}</h1>
      <p style="font-size: 16px; color: #475569;">\${article.excerpt}</p>
    </div>

    <div class="reader-intro">
      <strong>Overview:</strong> \${article.intro}
    </div>

    \${article.sections.map(sec => \`
      <div class="reader-section">
        <h2>\${sec.heading}</h2>
        <p>\${sec.content}</p>
        \${sec.caseTitle ? \`
          <div class="case-box">
            <h4>Case Study: \${sec.caseTitle}</h4>
            <p>\${sec.caseDesc}</p>
          </div>
        \` : ''}
      </div>
    \`).join('')}

    <div class="takeaways-box">
      <h3>Key Takeaways for Students & Marketers</h3>
      <ul>
        \${article.takeaways.map(t => \`<li>\${t}</li>\`).join('')}
      </ul>
    </div>

    <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
      <h3 style="margin-bottom: 8px;">Strategic Conclusion</h3>
      <p>\${article.conclusion}</p>
    </div>
  \`;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeArticleModal() {
  const modal = document.getElementById("articleModal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function scrollToArticles() {
  const el = document.getElementById("articles");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function navigateTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const successBox = document.getElementById("contactSuccess");
  if (successBox) successBox.style.display = "block";
  document.getElementById("contactForm").reset();
  setTimeout(() => {
    if (successBox) successBox.style.display = "none";
  }, 5000);
}
`;
