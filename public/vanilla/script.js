// ============================================================
// DIGITAL GROWTH HUB - PURE VANILLA JAVASCRIPT
// Handles article rendering, search, category filter, and modal
// ============================================================

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
  
  container.innerHTML = categories.map(cat => `
    <button class="category-pill ${cat === currentCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">
      ${cat}
    </button>
  `).join("");
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
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">
      <p>No articles found matching your criteria.</p>
      <button class="btn btn-outline" style="margin-top: 12px;" onclick="filterByCategory('All')">Reset Filter</button>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map(article => `
    <article class="article-card">
      <div class="card-img">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <strong>${article.category}</strong> · ${article.readTime}
        </div>
        <h3 class="card-title">${article.title}</h3>
        <p class="card-excerpt">${article.excerpt}</p>
        <div class="card-footer">
          <span class="card-author">${article.author}</span>
          <button class="btn btn-outline" onclick="openArticleModal('${article.id}')">Read More &rarr;</button>
        </div>
      </div>
    </article>
  `).join("");
}

function openArticleModal(id) {
  const article = articlesData.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById("articleModal");
  const body = document.getElementById("modalArticleBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="reader-header">
      <div class="reader-meta">
        <strong>${article.category}</strong> · ${article.readTime} · ${article.date} · By ${article.author}
      </div>
      <h1>${article.title}</h1>
      <p style="font-size: 16px; color: #475569;">${article.excerpt}</p>
    </div>

    <div class="reader-intro">
      <strong>Overview:</strong> ${article.intro}
    </div>

    ${article.sections.map(sec => `
      <div class="reader-section">
        <h2>${sec.heading}</h2>
        <p>${sec.content}</p>
        ${sec.caseTitle ? `
          <div class="case-box">
            <h4>Case Study: ${sec.caseTitle}</h4>
            <p>${sec.caseDesc}</p>
          </div>
        ` : ''}
      </div>
    `).join('')}

    <div class="takeaways-box">
      <h3>Key Takeaways for Students & Marketers</h3>
      <ul>
        ${article.takeaways.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
      <h3 style="margin-bottom: 8px;">Strategic Conclusion</h3>
      <p>${article.conclusion}</p>
    </div>
  `;

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
