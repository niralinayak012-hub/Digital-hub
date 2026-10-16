import React, { useState, useEffect } from 'react';
import { Article, Comment } from '../types';
import { 
  ArrowLeft, 
  Bookmark, 
  ThumbsUp, 
  Share2, 
  Check, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Send,
  BookOpen,
  CheckCircle2,
  Linkedin,
  Twitter
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<1 | 1.1 | 1.2>(1);

  // Comments state persisted in localStorage
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Initialize and track scroll progress
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Load comments from localStorage
  useEffect(() => {
    const storageKey = `comments_${article.id}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch (err) {
        console.error(err);
      }
    } else {
      // Default initial discussion comment
      const initial: Comment[] = [
        {
          id: 'c1',
          articleId: article.id,
          author: 'Priya Sharma (BBA Student)',
          date: '2 days ago',
          content: 'This breakdown is incredibly helpful for our marketing strategy term paper. The case study illustration makes the concept so tangible!'
        }
      ];
      setComments(initial);
      localStorage.setItem(storageKey, JSON.stringify(initial));
    }
  }, [article.id]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      articleId: article.id,
      author: commentName.trim(),
      date: 'Just now',
      content: commentText.trim(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${article.id}`, JSON.stringify(updated));
    setCommentName('');
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  // Find 2 related articles from the same category or adjacent
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.isFeatured))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-700 to-indigo-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Article Subheader Bar */}
      <div className="sticky top-18 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-purple-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Font size control */}
            <div className="hidden sm:flex items-center border border-slate-200 rounded-lg p-0.5 text-xs text-slate-600">
              <button
                onClick={() => setFontSizeMultiplier(1)}
                className={`px-2 py-1 rounded ${fontSizeMultiplier === 1 ? 'bg-slate-100 font-bold text-slate-900' : 'hover:text-slate-900'}`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeMultiplier(1.1)}
                className={`px-2 py-1 rounded ${fontSizeMultiplier === 1.1 ? 'bg-slate-100 font-bold text-slate-900' : 'hover:text-slate-900'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Like button */}
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                hasLiked
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title="Like this article"
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
              <span className="tabular-nums">{likes}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 rounded-lg text-xs border transition-colors ${
                isBookmarked
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark article'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-purple-900 transition-colors shadow-sm"
              title="Share article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Article Header */}
        <header className="space-y-4 mb-8">
          {/* Zero-Pill Quiet Inline Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-purple-700 font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-mono">{article.views} views</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed text-balance">
            {article.excerpt}
          </p>

          {/* Author Block */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-slate-200"
            />
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                {article.author.name}
              </span>
              <span className="text-xs text-slate-500 block">
                {article.author.role}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 mb-10 aspect-16/9 bg-slate-900 shadow-md">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Article Body with scalable font size */}
        <div
          className="prose prose-slate max-w-none space-y-8"
          style={{ fontSize: `${fontSizeMultiplier * 1}rem` }}
        >
          {/* Introduction */}
          <section className="text-slate-700 leading-relaxed text-lg bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
            <h2 className="text-xs uppercase font-bold tracking-wider text-purple-700 mb-2">
              Executive Overview
            </h2>
            <p className="leading-relaxed">
              {article.introduction}
            </p>
          </section>

          {/* Structured Sections */}
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {sec.content}
              </p>

              {/* Subsections if present */}
              {sec.subsections && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {sec.subsections.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs"
                    >
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Real-World Case Study Highlight Box */}
              {sec.exampleBox && (
                <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 border border-purple-200 rounded-xl p-5 my-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wide mb-1.5">
                    <BookOpen className="w-4 h-4 text-purple-700" />
                    <span>{sec.exampleBox.title}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {sec.exampleBox.description}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaways Checklist Box */}
          <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl my-10 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span>Key Takeaways for Students & Marketers</span>
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((point, kIdx) => (
                <li key={kIdx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Conclusion */}
          <section className="border-t border-slate-200 pt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Strategic Conclusion
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {article.conclusion}
            </p>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500">Topics covered:</span>
            {article.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share & Feedback Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                hasLiked
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{hasLiked ? 'Liked by you' : 'Like Article'} ({likes})</span>
            </button>
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isBookmarked
                  ? 'border-purple-600 bg-purple-50 text-purple-700'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{isBookmarked ? 'Bookmarked' : 'Save for later'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Share on:</span>
            <button
              onClick={handleCopyLink}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Copy link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-600 hover:text-[#0A66C2] hover:bg-slate-100 rounded-lg transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-600 hover:text-black hover:bg-slate-100 rounded-lg transition-colors"
              title="Share on X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Discussion / Comments Section */}
        <section className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-700" />
              <span>Academic Discussion & Insights</span>
              <span className="text-sm font-medium text-slate-400">({comments.length})</span>
            </h3>
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleAddComment} className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Leave a Reflection or Question
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name (e.g., Alex Carter, BBA Student)"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                required
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600"
              />
            </div>
            <textarea
              placeholder="What questions or observations do you have regarding this marketing strategy?"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={3}
              required
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600"
            />
            <div className="flex items-center justify-between">
              {commentSubmitted && (
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Your comment was published!
                </span>
              )}
              <div className="ml-auto">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Comment</span>
                </button>
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div key={comm.id} className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-bold text-slate-900">{comm.author}</span>
                  <span>{comm.date}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {comm.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles Strip */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-purple-300 rounded-xl p-5 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-purple-700 mb-1 block">
                      {rel.category} · {rel.readTime}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-purple-700">
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
