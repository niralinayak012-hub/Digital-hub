import React, { useState } from 'react';
import { Menu, X, BookMarked, Download, Search } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenExportModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  savedCount,
  onOpenBookmarks,
  onOpenExportModal,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Articles', id: 'articles' },
    { label: 'Categories', id: 'categories' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left text-slate-900 group whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-950 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              D
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                Digital Growth Hub
              </span>
              <span className="text-[11px] text-slate-500 font-medium block">
                Marketing, SEO & AI
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-purple-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-700 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary action + interactive utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick search toggle on desktop */}
            <div className="relative hidden lg:block">
              {showSearchInput ? (
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 w-60">
                  <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    autoFocus
                    onBlur={() => !searchQuery && setShowSearchInput(false)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => onSearchChange('')}
                      className="text-slate-400 hover:text-slate-600 text-xs px-1"
                    >
                      ×
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  title="Search articles"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search</span>
                </button>
              )}
            </div>

            {/* Bookmarks Counter Button */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 text-slate-600 hover:text-purple-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Saved Articles"
              aria-label="Saved Articles"
            >
              <BookMarked className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Export Code / Project Files Action */}
            <button
              onClick={onOpenExportModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-purple-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Code</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 space-y-2">
            <div className="px-2 pb-2">
              <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 border border-slate-200">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search 10 articles..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-purple-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  onOpenExportModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-purple-900 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Vanilla Project (HTML/CSS/JS)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
