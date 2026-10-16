import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../data/articles';
import { Sparkles, TrendingUp, Bookmark, Layers, X } from 'lucide-react';

export type ViewTab = 'all' | 'featured' | 'popular' | 'bookmarked';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  activeTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  searchQuery: string;
  onClearSearch: () => void;
  bookmarkedCount: number;
  totalFilteredCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  activeTab,
  onSelectTab,
  searchQuery,
  onClearSearch,
  bookmarkedCount,
  totalFilteredCount,
}) => {
  return (
    <div className="space-y-6">
      {/* Primary Tab View Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
          <button
            onClick={() => onSelectTab('all')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </button>

          <button
            onClick={() => onSelectTab('featured')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'featured'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Featured</span>
          </button>

          <button
            onClick={() => onSelectTab('popular')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'popular'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
            <span>Popular</span>
          </button>

          <button
            onClick={() => onSelectTab('bookmarked')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'bookmarked'
                ? 'bg-white text-purple-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved ({bookmarkedCount})</span>
          </button>
        </div>

        {/* Status / Active Match Count */}
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>Showing <strong className="text-slate-900 font-semibold">{totalFilteredCount}</strong> {totalFilteredCount === 1 ? 'article' : 'articles'}</span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                onSelectCategory('All');
                onClearSearch();
              }}
              className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900 font-medium ml-2"
            >
              <X className="w-3 h-3" />
              <span>Reset filter</span>
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Category Pill Filter Buttons (Interactive Functional Buttons) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name as Category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-purple-700 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`ml-1.5 opacity-70 font-mono text-[10px]`}>
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Search Notification Banner if searching */}
      {searchQuery && (
        <div className="flex items-center justify-between bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5 text-xs text-purple-900">
          <span>
            Search results for: <strong className="font-semibold">"{searchQuery}"</strong>
          </span>
          <button
            onClick={onClearSearch}
            className="font-semibold text-purple-700 hover:text-purple-950 underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};
