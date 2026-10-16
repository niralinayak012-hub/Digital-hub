import React from 'react';
import { Article } from '../types';
import { ArrowRight, Bookmark, Eye, ThumbsUp } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  featuredLayout?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadMore,
  isBookmarked,
  onToggleBookmark,
  featuredLayout = false,
}) => {
  return (
    <article
      className={`group bg-white rounded-2xl border border-slate-200/90 hover:border-purple-300 transition-all duration-200 hover:shadow-md flex flex-col overflow-hidden ${
        featuredLayout ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center p-6' : 'p-5'
      }`}
    >
      {/* Article Image Container with Zero-Broken-Image Fallback */}
      <div
        className={`relative rounded-xl overflow-hidden bg-slate-100 ${
          featuredLayout
            ? 'lg:col-span-6 aspect-16/10 mb-5 lg:mb-0'
            : 'aspect-16/9 mb-4'
        }`}
      >
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Stylized CSS fallback on error
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Fallback pattern underneath */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 to-indigo-950 p-6 flex flex-col justify-end text-white">
          <span className="text-xs uppercase font-semibold text-purple-300">
            {article.category}
          </span>
          <span className="text-sm font-bold mt-1 line-clamp-2">
            {article.title}
          </span>
        </div>

        {/* Quick Bookmark Float Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-colors ${
            isBookmarked
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white/90 text-slate-700 hover:bg-white hover:text-purple-700'
          }`}
          title={isBookmarked ? 'Remove Bookmark' : 'Save for later'}
          aria-label={isBookmarked ? 'Saved' : 'Save article'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Article Body */}
      <div className={`flex flex-col flex-1 justify-between ${featuredLayout ? 'lg:col-span-6' : ''}`}>
        <div>
          {/* Zero-Pill Quiet Inline Metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
            <span className="text-purple-700 font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onReadMore(article)}
            className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Footer: Author Info & Read More Button */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200"
              onError={(e) => {
                // If avatar fails, replace with initials
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="min-w-0 truncate">
              <span className="text-xs font-semibold text-slate-900 block truncate">
                {article.author.name}
              </span>
              <span className="text-[11px] text-slate-500 block truncate">
                {article.author.role.split('&')[0]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono tabular-nums">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.views}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-3 h-3" />
                {article.likes}
              </span>
            </div>

            <button
              onClick={() => onReadMore(article)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 py-1 px-2.5 rounded-lg hover:bg-purple-50 transition-colors whitespace-nowrap"
            >
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
