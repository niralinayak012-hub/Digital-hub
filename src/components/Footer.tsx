import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Github, Linkedin, Twitter, Youtube, Heart } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (cat: Category) => void;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenExportModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top Newsletter Strip */}
      <div className="border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Get Weekly Digital Marketing Case Studies
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Curated summaries of real marketing experiments, algorithm updates, and AI prompts delivered every Tuesday. Zero spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="Enter your university or work email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-xl transition-colors whitespace-nowrap shadow-sm shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1 pt-1 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    Welcome to the Growth Hub community!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-800 to-purple-800 flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Digital Growth Hub
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An open educational knowledge base dedicated to modern digital marketing, SEO, social media strategies, and applied AI in marketing.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors"
                >
                  All 10 Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors"
                >
                  Topic Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Topics Covered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Topics
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('SEO')}
                  className="hover:text-white transition-colors"
                >
                  Search Engine Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Social Media')}
                  className="hover:text-white transition-colors"
                >
                  Social Media Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Artificial Intelligence')}
                  className="hover:text-white transition-colors"
                >
                  Artificial Intelligence in Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Paid Advertising')}
                  className="hover:text-white transition-colors"
                >
                  Paid Ads & PPC Essentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Analytics')}
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* College Project / Developer Export */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Submission
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Need pure vanilla HTML/CSS/JS for your college course or thesis presentation?
            </p>
            <button
              onClick={onOpenExportModal}
              className="w-full text-center py-2 px-3 text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900 border border-purple-800/80 rounded-xl transition-colors"
            >
              Export Vanilla Source Files &rarr;
            </button>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Digital Growth Hub. Published under open educational curriculum guidelines.
          </p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted for BBA marketing students & digital strategists</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
