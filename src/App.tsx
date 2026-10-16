import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES } from './data/articles';
import { Article, Category } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { CategoryFilter, ViewTab } from './components/CategoryFilter';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectExportModal } from './components/ProjectExportModal';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function App() {
  // Navigation & View state
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeTab, setActiveTab] = useState<ViewTab>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Bookmarking state saved in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('growth_hub_bookmarks');
      return saved ? JSON.parse(saved) : ['1', '7'];
    } catch {
      return ['1', '7'];
    }
  });

  // Handle URL hash changes (e.g. #article/slug or #articles, #about, etc.)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        const found = ARTICLES.find((a) => a.slug === slug);
        if (found) {
          setSelectedArticle(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash) {
        setActiveSection(hash);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('growth_hub_bookmarks', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.location.hash = `article/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    window.location.hash = 'articles';
  };

  const handleNavigate = (sectionId: string) => {
    if (selectedArticle) {
      setSelectedArticle(null);
    }
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  // Filter and Search Logic
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      // Tab filter
      let matchesTab = true;
      if (activeTab === 'featured') matchesTab = !!article.isFeatured;
      if (activeTab === 'popular') matchesTab = !!article.isPopular;
      if (activeTab === 'bookmarked') matchesTab = bookmarkedIds.includes(article.id);

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.sections.some((s) => s.content.toLowerCase().includes(q));

      return matchesCategory && matchesTab && matchesSearch;
    });
  }, [selectedCategory, activeTab, searchQuery, bookmarkedIds]);

  // Featured Marquee Article for top highlight
  const marqueeArticle = ARTICLES.find((a) => a.id === '7') || ARTICLES[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        savedCount={bookmarkedIds.length}
        onOpenBookmarks={() => {
          if (selectedArticle) setSelectedArticle(null);
          setActiveTab('bookmarked');
          handleNavigate('articles');
        }}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (selectedArticle) setSelectedArticle(null);
          if (q) handleNavigate('articles');
        }}
      />

      {/* Main View: Article Reader OR Full Home Experience */}
      {selectedArticle ? (
        <ArticleView
          article={selectedArticle}
          allArticles={ARTICLES}
          onBack={handleBackToArticles}
          onSelectArticle={handleSelectArticle}
          isBookmarked={bookmarkedIds.includes(selectedArticle.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <div id="home">
            <Hero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onExploreArticles={() => handleNavigate('articles')}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat as Category);
                handleNavigate('articles');
              }}
            />
          </div>

          {/* Featured Spotlight Section */}
          {!searchQuery && activeTab === 'all' && selectedCategory === 'All' && (
            <section className="py-12 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-700" />
                    <h2 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                      Editor's Featured Spotlight
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('featured');
                      handleNavigate('articles');
                    }}
                    className="text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View all featured</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <ArticleCard
                  article={marqueeArticle}
                  onReadMore={handleSelectArticle}
                  isBookmarked={bookmarkedIds.includes(marqueeArticle.id)}
                  onToggleBookmark={handleToggleBookmark}
                  featuredLayout={true}
                />
              </div>
            </section>
          )}

          {/* Articles & Categories Section */}
          <section id="articles" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header + Category Filter */}
            <div id="categories" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    All 10 Research Guides & Articles
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Filter by discipline, keyword search, or review curated popular and bookmarked guides.
                  </p>
                </div>
              </div>

              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                activeTab={activeTab}
                onSelectTab={setActiveTab}
                searchQuery={searchQuery}
                onClearSearch={() => setSearchQuery('')}
                bookmarkedCount={bookmarkedIds.length}
                totalFilteredCount={filteredArticles.length}
              />
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onReadMore={handleSelectArticle}
                    isBookmarked={bookmarkedIds.includes(article.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  No articles matched your criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search terms or reset the category filters to browse all 10 digital marketing articles.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setActiveTab('all');
                    setSearchQuery('');
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 rounded-lg transition-colors shadow-xs"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Show All Articles</span>
                </button>
              </div>
            )}
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Contact Section */}
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={(cat) => {
          if (selectedArticle) setSelectedArticle(null);
          setSelectedCategory(cat);
          handleNavigate('articles');
        }}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Project Export & Deployment Guide Modal */}
      <ProjectExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
