import React from 'react';
import { Target, Award, Users, BookOpenCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Prof. David Vance',
      role: 'Senior Marketing Faculty & Growth Strategist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      bio: 'Over 14 years teaching digital marketing and marketing communications. Specializes in omnichannel consumer behavior and growth modeling.'
    },
    {
      name: 'Maya Lin',
      role: 'Social Media Strategist & Brand Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      bio: 'Former head of brand social for high-growth consumer apps. Passionate about community engagement and organic creator playbooks.'
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'AI Research Director & Computational Marketer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80',
      bio: 'Researches generative AI, algorithmic bidding systems, and predictive customer retention in commercial settings.'
    },
    {
      name: 'Elena Rostova',
      role: 'Content Operations Lead & Editorial Strategist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
      bio: 'Author of curriculum handbooks on B2B storytelling, long-tail search strategies, and executive LinkedIn branding.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>About Digital Growth Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Academic Marketing with Modern Digital Execution.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Digital Growth Hub was initiated as an open educational resource designed to give business administration (BBA) students, budding entrepreneurs, and career changers a zero-fluff, practical foundation in modern digital marketing.
          </p>
        </div>

        {/* 4 Core Principles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Curriculum Rigor
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every article is structured like an executive briefing: clear definitions, channel mechanics, concrete metrics, and actionable takeaways.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Real Case Studies
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No hypothetical generalizations. We analyze real businesses—from neighborhood bakeries to high-scale B2B software companies.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Zero Marketing Fluff
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We discard empty buzzwords and focus strictly on repeatable playbooks, unit economics, conversion funnels, and measurable ROI.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Student-First Access
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Completely open source and free. Optimized for college capstones, research presentations, and portfolio building.
            </p>
          </div>
        </div>

        {/* Editorial Team Profiles */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Editorial Board & Subject Matter Experts
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Collaborating faculty and practitioners who research, draft, and review our curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 transition-colors space-y-3"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {member.name}
                  </h4>
                  <span className="text-[11px] font-medium text-purple-700 block mt-0.5">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
