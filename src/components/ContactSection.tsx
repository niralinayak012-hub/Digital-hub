import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Student Capstone / Research',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I cite Digital Growth Hub articles in my college papers or BBA thesis?',
      a: 'Yes, absolutely! Each article includes the full publication date, author credentials, and persistent URL slug for clean APA and MLA citations.'
    },
    {
      q: 'Is Digital Growth Hub completely free for academic and classroom use?',
      a: '100% free. There are no paywalls, mandatory accounts, or commercial subscriptions. All guides and case studies are published under open educational principles.'
    },
    {
      q: 'How can students submit an article idea or case study contribution?',
      a: 'Use the inquiry form on this page and choose "Article Proposal / Student Submission". Our editorial review team responds to all proposals within 48 hours.'
    },
    {
      q: 'Can I export the source code of this website for my college web development project?',
      a: 'Yes! Click the "Export Code" button in the navigation header or footer to download the standalone index.html, style.css, and script.js files with full GitHub & Vercel deployment guides.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Success simulation
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      topic: 'Student Capstone / Research',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Campus & Editorial Office Info + FAQ */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Connect with the Editorial Desk.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Have a question regarding our digital marketing curriculum, student research inquiries, or project submissions? We are here to support your learning journey.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <Mail className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Editorial Inquiries</span>
                  <a href="mailto:editor@digitalgrowthhub.edu" className="text-xs text-purple-700 hover:underline">
                    editor@digitalgrowthhub.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Academic Center & Lab</span>
                  <span className="text-xs text-slate-600 block">
                    Digital Marketing Learning Lab, Hall 4B, University Campus
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Review & Response SLA</span>
                  <span className="text-xs text-slate-600 block">
                    Monday to Friday, replies sent within 24 to 48 business hours
                  </span>
                </div>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <HelpCircle className="w-4 h-4 text-purple-600" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-2">
                {faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="border border-slate-200 rounded-xl bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-purple-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          openFaq === fIdx ? 'rotate-180 text-purple-700' : ''
                        }`}
                      />
                    </button>
                    {openFaq === fIdx && (
                      <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 border-t border-slate-100 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send an Academic or Project Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below. All submissions are processed securely without third-party tracking.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-900">
                      Inquiry Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Thank you for contacting Digital Growth Hub. Our editorial team will review your message and reply to your email address within 24–48 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[11px] font-semibold text-emerald-800 underline mt-2 inline-block"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jordan Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-600 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="jordan@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-600 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-600 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none transition-colors"
                  >
                    <option value="Student Capstone / Research">Student Capstone / Research Question</option>
                    <option value="Article Proposal / Student Submission">Article Proposal / Student Submission</option>
                    <option value="Curriculum Collaboration">Faculty / Curriculum Collaboration</option>
                    <option value="Bug or Feedback">Website Feedback / Typo Correction</option>
                    <option value="General Inquiry">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry, project scope, or the specific marketing topic you would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-600 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    * Required fields
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-xl transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
