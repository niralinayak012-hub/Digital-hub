# Digital Growth Hub 🚀

A modern, responsive, and complete digital marketing educational blog platform. Built for business students (BBA/MBA), digital marketing practitioners, and entrepreneurs exploring **SEO, Social Media Marketing, Content Marketing, Paid Advertising (PPC), Analytics, and Artificial Intelligence in Marketing**.

---

## 🌟 Features Overview

- **10 In-Depth Original Articles**: Each guide contains 400–600 words, real-world case studies (Nike, local bakeries, B2B SaaS, creator brands), subheadings, and actionable student takeaways.
- **Modern Responsive Design**: Navy blue headings, purple accents (`#7C3AED`), subtle gradients, card hover states, and responsive layout across mobile, tablet, and desktop.
- **Top Bar Contract Compliant**: 3-zone clean navigation bar with single-line links (`Home`, `Articles`, `Categories`, `About Us`, `Contact`), bookmarks manager, and code export trigger.
- **Interactive Search & Filter**: Real-time keyword search across titles, contents, and tags; category filtering with counts; tabs for *All Articles*, *Featured*, *Most Popular*, and *Saved / Bookmarked*.
- **Full Reading View**: Reading progress bar, font size adjuster (A / A+), likes counter, link copy with clipboard confirmation, social sharing (LinkedIn, Twitter/X), related articles, and interactive comments saved to `localStorage`.
- **Contact & Inquiry System**: Validated contact form with topic selection, academic office SLA details, and interactive FAQ accordion.
- **Vanilla Source Code Export**: Direct one-click download for pure `index.html`, `style.css`, and `script.js` directly within the UI or inside the `/public/vanilla/` directory.

---

## 📚 10 Core Curriculum Articles Included

1. **Introduction to Digital Marketing**: Foundations, Channels & Business Impact
2. **Social Media Marketing for Beginners**: Platform Playbooks & Community Growth
3. **Search Engine Optimization (SEO)**: Ranking Factors, Keywords & Technical Architecture
4. **Content Marketing Strategies**: Creating High-Impact Assets That Attract & Convert
5. **Email Marketing Mastery**: Newsletters, Segmentation & Automated Nurture Flows
6. **Influencer Marketing**: Collaborations, Creator Economy & Brand Awareness
7. **Artificial Intelligence in Digital Marketing**: Content, Personalization & Predictive Analytics
8. **Paid Advertising and PPC**: Mastering Google Ads, Meta Ads & Conversion Bidding
9. **Digital Marketing Analytics**: Web Traffic, Conversion Funnels & ROI Attribution
10. **Building a Personal Brand on LinkedIn**: Playbook for Students & Professionals

---

## 🚀 How to Save to GitHub and Deploy on Vercel

### Step 1: Push to GitHub

1. Open your terminal in the project directory.
2. Initialize Git and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Digital Growth Hub website"
   ```
3. Create a new repository on [GitHub](https://github.com) named `digital-growth-hub`.
4. Link and push to your remote repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/digital-growth-hub.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Free 1-Click Hosting)

1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New"** &rarr; **"Project"**.
3. Import your `digital-growth-hub` repository.
4. Framework preset will automatically be detected as **Vite** (or Static if deploying `/public/vanilla`).
5. Click **"Deploy"**. Within ~30 seconds, your site is live with a secure HTTPS URL!

---

## 📂 Source Code Structure

```
├── public/
│   └── vanilla/             # Standalone vanilla version (HTML, CSS, JS)
│       ├── index.html
│       ├── style.css
│       └── script.js
├── src/
│   ├── assets/images/       # Generated high-resolution marketing imagery
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleView.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjectExportModal.tsx
│   ├── data/
│   │   ├── articles.ts      # 10 comprehensive marketing articles
│   │   └── vanillaSource.ts # Raw exportable vanilla files
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── metadata.json
└── package.json
```

---

## 🎓 College Project Evaluation & Viva Highlights

- **Domain Knowledge**: Demonstrates thorough understanding of BBA / digital marketing concepts, omnichannel marketing, unit economics (CAC, LTV, ROAS), and AI disruption.
- **Semantic HTML & Clean CSS**: Adheres to modern web accessibility, contrast ratios (WCAG AA), and responsive grid systems.
- **Zero-Backend Requirement**: Operates client-side with zero external database or paid API costs; persists user comments and bookmarks in browser `localStorage`.
