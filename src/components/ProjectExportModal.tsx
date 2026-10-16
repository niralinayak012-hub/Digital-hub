import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, Terminal, Globe, ExternalLink, HelpCircle } from 'lucide-react';
import { VANILLA_HTML, VANILLA_CSS, VANILLA_JS } from '../data/vanillaSource';

interface ProjectExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectExportModal: React.FC<ProjectExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js' | 'deploy'>('deploy');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const downloadFile = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = () => {
    downloadFile('index.html', VANILLA_HTML, 'text/html');
    setTimeout(() => downloadFile('style.css', VANILLA_CSS, 'text/css'), 300);
    setTimeout(() => downloadFile('script.js', VANILLA_JS, 'text/javascript'), 600);
  };

  const getActiveCode = () => {
    if (activeTab === 'html') return VANILLA_HTML;
    if (activeTab === 'css') return VANILLA_CSS;
    if (activeTab === 'js') return VANILLA_JS;
    return '';
  };

  const handleCopy = () => {
    const code = getActiveCode();
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <h3 className="text-base font-bold text-slate-900">
                Source Code Export & Deployment Center
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Ready for College Submission, GitHub Repository & Vercel Free Hosting
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download All 3 Files</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-200 bg-white">
          <button
            onClick={() => setActiveTab('deploy')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'deploy'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GitHub & Vercel Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('html')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'html'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-amber-600" />
            <span>index.html</span>
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'css'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-blue-600" />
            <span>style.css</span>
          </button>

          <button
            onClick={() => setActiveTab('js')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'js'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-600" />
            <span>script.js</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          {activeTab === 'deploy' ? (
            <div className="space-y-6 text-slate-700 text-xs sm:text-sm">
              {/* Step 1: GitHub Instructions */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Step 1: Save & Push to GitHub (For BBA Project Submission)
                  </h4>
                </div>
                <p className="text-slate-600">
                  Create a new repository on <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-700 underline font-semibold">GitHub.com</a> called <code className="bg-slate-100 px-1.5 py-0.5 rounded text-purple-900 font-mono">digital-growth-hub</code>, then run these commands in your project folder:
                </p>
                <div className="bg-slate-900 text-slate-100 p-3.5 rounded-lg font-mono text-xs overflow-x-auto space-y-1">
                  <div>git init</div>
                  <div>git add .</div>
                  <div>git commit -m "Initial commit: Complete Digital Growth Hub blog website"</div>
                  <div>git branch -M main</div>
                  <div>git remote add origin https://github.com/YOUR_USERNAME/digital-growth-hub.git</div>
                  <div>git push -u origin main</div>
                </div>
              </div>

              {/* Step 2: Vercel Free Deployment */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Step 2: Deploy Free on Vercel in 60 Seconds
                  </h4>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                  <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-purple-700 underline font-semibold">Vercel.com</a> and sign in with your GitHub account.</li>
                  <li>Click <strong>"Add New" &rarr; "Project"</strong>.</li>
                  <li>Select your newly pushed <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">digital-growth-hub</code> repository from the list.</li>
                  <li>Click <strong>"Deploy"</strong>. Vercel automatically detects the build configuration and publishes your live URL (e.g., <code className="text-purple-700 font-mono">digital-growth-hub.vercel.app</code>) instantly!</li>
                </ol>
              </div>

              {/* Step 3: College Presentation Points */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 text-purple-900 font-bold">
                  <HelpCircle className="w-4 h-4 text-purple-700" />
                  <span>Key Points for Your College Presentation & Viva</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-purple-950">
                  <li><strong>Target Domain:</strong> Digital Marketing, SEO, Social Media, Content Marketing, and Artificial Intelligence.</li>
                  <li><strong>Architectural Approach:</strong> Semantic HTML5 tags (<code className="font-mono">&lt;header&gt;</code>, <code className="font-mono">&lt;article&gt;</code>, <code className="font-mono">&lt;section&gt;</code>) for clean accessibility and search ranking.</li>
                  <li><strong>Responsive Design:</strong> Mobile-first media queries adapting seamlessly across smartphones, tablets, laptops, and ultra-wide desktops.</li>
                  <li><strong>Performance:</strong> Lightweight vanilla assets with sub-second page rendering, no bulky third-party dependencies, and zero-cost hosting.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {activeTab === 'html' && 'index.html (Semantic Structure & Metadata)'}
                  {activeTab === 'css' && 'style.css (Design System, Palette & Layout)'}
                  {activeTab === 'js' && 'script.js (Interactive Search, Filters & Modal)'}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Code!' : 'Copy Code'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (activeTab === 'html') downloadFile('index.html', VANILLA_HTML, 'text/html');
                      if (activeTab === 'css') downloadFile('style.css', VANILLA_CSS, 'text/css');
                      if (activeTab === 'js') downloadFile('script.js', VANILLA_JS, 'text/javascript');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-purple-900 rounded-lg transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download file</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto max-h-[420px]">
                <pre className="text-xs font-mono text-slate-200 leading-relaxed whitespace-pre">
                  {getActiveCode()}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Digital Growth Hub · Created for academic submission & production web hosting</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
