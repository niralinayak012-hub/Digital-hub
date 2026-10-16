import React from 'react';
import { Search, ArrowRight, BookOpen, Sparkles, TrendingUp, Compass } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onExploreArticles: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreArticles,
  onSelectCategory,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span>Digital Growth Hub · Open Curriculum 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Explore the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800">Digital Marketing.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl text-balance">
              Master the core strategies powering contemporary growth: Search Engine Optimization, social media algorithms, data-driven content marketing, and artificial intelligence in marketing campaigns.
            </p>

            {/* Integrated Search Bar with Quick Action */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center bg-white border-2 border-slate-200 focus-within:border-purple-600 rounded-xl shadow-sm transition-all overflow-hidden p-1.5">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search SEO, AI tools, social media, PPC, analytics..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                {searchQuery ? (
                  <button
                    onClick={() => onSearchChange('')}
                    className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    Clear
                  </button>
                ) : (
                  <button
                    onClick={onExploreArticles}
                    className="px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
                  >
                    Find Guide
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                <span className="font-medium text-slate-700">Popular:</span>
                <button
                  onClick={() => onSelectCategory('SEO')}
                  className="hover:text-purple-700 underline decoration-slate-300 underline-offset-2 transition-colors"
                >
                  SEO Keywords
                </button>
                <span>·</span>
                <button
                  onClick={() => onSelectCategory('Artificial Intelligence')}
                  className="hover:text-purple-700 underline decoration-slate-300 underline-offset-2 transition-colors"
                >
                  AI in Marketing
                </button>
                <span>·</span>
                <button
                  onClick={() => onSelectCategory('Social Media')}
                  className="hover:text-purple-700 underline decoration-slate-300 underline-offset-2 transition-colors"
                >
                  LinkedIn Branding
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreArticles}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-purple-900 rounded-xl transition-all shadow-md group"
              >
                <span>Browse All 10 Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onSelectCategory('Artificial Intelligence')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Featured: AI Marketing Guide</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 aspect-16/10">
              <img
                src="/src/assets/images/hero_digital_growth_1792118662164.jpg"
                alt="Digital marketing strategy workspace with live analytics and campaign dashboards"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-purple-300">
                  Featured Research
                </span>
                <h3 className="text-lg font-bold mt-1 text-balance">
                  Mastering Omnichannel Flywheels & Algorithmic Growth in 2026
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  10 comprehensive guides tailored for business students, agency founders, and growth professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacency Proof & Curriculum Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-10 border-t border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl tabular-nums">
              <BookOpen className="w-5 h-5 text-purple-600 shrink-0" />
              <span>10 Full Guides</span>
            </div>
            <p className="text-xs text-slate-500">In-depth 400-600 word curriculum articles</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl tabular-nums">
              <TrendingUp className="w-5 h-5 text-purple-600 shrink-0" />
              <span>Real Case Studies</span>
            </div>
            <p className="text-xs text-slate-500">Practical business metrics, ROI & examples</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl tabular-nums">
              <Compass className="w-5 h-5 text-purple-600 shrink-0" />
              <span>8 Specialized Fields</span>
            </div>
            <p className="text-xs text-slate-500">SEO, AI, Social, PPC, Content & Analytics</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl tabular-nums">
              <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
              <span>100% Open Access</span>
            </div>
            <p className="text-xs text-slate-500">No paywalls, backend, or subscription required</p>
          </div>
        </div>
      </div>
    </section>
  );
};
