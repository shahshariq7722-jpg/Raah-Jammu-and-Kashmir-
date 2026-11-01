import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Mail, AlertCircle } from 'lucide-react';

interface SuggestResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestResourceModal: React.FC<SuggestResourceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [type, setType] = useState<'suggestion' | 'report_issue' | 'feedback'>('suggestion');
  const [resourceName, setResourceName] = useState('');
  const [officialUrl, setOfficialUrl] = useState('');
  const [category, setCategory] = useState('education');
  const [details, setDetails] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link as direct fallback so visitor can send directly to creator
    const subject = encodeURIComponent(`[RAAH J&K] ${type.toUpperCase()}: ${resourceName || 'User Feedback'}`);
    const body = encodeURIComponent(
      `Type: ${type}\n` +
      `Title / Service: ${resourceName}\n` +
      `Official URL: ${officialUrl}\n` +
      `Category: ${category}\n` +
      `Details / Description:\n${details}\n\n` +
      `From: ${senderName || 'Anonymous Citizen'} (${senderEmail || 'No email provided'})\n` +
      `Platform: RAAH J&K`
    );

    // Save locally to localStorage feedback buffer
    try {
      const stored = JSON.parse(localStorage.getItem('raah_jk_user_feedback') || '[]');
      stored.push({
        type,
        resourceName,
        officialUrl,
        category,
        details,
        senderName,
        senderEmail,
        date: new Date().toISOString()
      });
      localStorage.setItem('raah_jk_user_feedback', JSON.stringify(stored));
    } catch (err) {
      // ignore
    }

    // Trigger email client option
    window.location.href = `mailto:shahshariq7722@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setResourceName('');
    setOfficialUrl('');
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl space-y-5 animate-in fade-in zoom-in-95"
        role="dialog"
        aria-label="Suggest Resource or Send Feedback"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-xl font-bold text-[#104D43] font-display">
              Suggest a Resource or Report an Issue
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sent directly to Creator: <strong>Shariq Iqbal Shah</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Thank You for Contributing!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your suggestion has been generated for review by <strong>Shariq Iqbal Shah</strong> at <code>shahshariq7722@gmail.com</code>. Every submission is human-checked to verify official government domain credentials before publishing.
            </p>
            <button
              onClick={handleResetForm}
              className="px-5 py-2 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-lg shadow-xs cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Feedback Type Tabs */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'suggestion', label: 'New Resource' },
                { id: 'report_issue', label: 'Report Broken Link' },
                { id: 'feedback', label: 'General Feedback' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setType(tab.id as any)}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    type === tab.id
                      ? 'bg-[#176B5B] text-white border-[#176B5B]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Service Name */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                {type === 'report_issue' ? 'Name of Broken Portal / Page' : 'Portal / Service Name'} *
              </label>
              <input
                type="text"
                required
                value={resourceName}
                onChange={(e) => setResourceName(e.target.value)}
                placeholder="e.g. JKBOSE New Migration Portal, District Udhampur helpline..."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none"
              />
            </div>

            {/* Official Website URL */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                Official Website URL (must be .gov.in, .nic.in, or verified educational domain)
              </label>
              <input
                type="url"
                value={officialUrl}
                onChange={(e) => setOfficialUrl(e.target.value)}
                placeholder="https://example.jk.gov.in"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none cursor-pointer"
              >
                <option value="education">Education & Scholarships</option>
                <option value="government">Government Services</option>
                <option value="healthcare">Healthcare Resources</option>
                <option value="careers">Skills & Careers</option>
                <option value="grievances">Public Grievances</option>
                <option value="districts">District Specific Info</option>
              </select>
            </div>

            {/* Details & Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                Details or Description *
              </label>
              <textarea
                required
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Briefly describe what this service does or what needs updating..."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none"
              />
            </div>

            {/* Contributor details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Citizen name"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Email (Optional)
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="contact@example.com"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#176B5B] shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Guarantee:</strong> We do not ask for Aadhaar numbers, passwords, bank details, or sensitive personal data. Submissions are reviewed for public verification only.
              </span>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500">
                To: shahshariq7722@gmail.com
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to Shariq</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
