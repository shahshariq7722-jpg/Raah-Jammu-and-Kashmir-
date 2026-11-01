import React from 'react';
import { CompassLogo } from './CompassLogo.tsx';
import { Mail, ShieldCheck, Heart, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenSuggestModal: () => void;
  onOpenGlossary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenSuggestModal, 
  onOpenGlossary 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#104D43] text-white border-t border-[#0d3f37] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Multilingual Guidance Ribbon */}
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-12 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <span className="font-semibold text-[#F3A83B]">Welcome in J&K Languages:</span>
            <span>خوش آمدید (Urdu)</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span>جی آیاں نوں (Dogri)</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span>خوشامدید (Kashmiri)</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span>स्वागत है (Hindi)</span>
          </div>

          <span className="text-white/60 text-[11px]">
            Designed for all residents across Jammu & Kashmir
          </span>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CompassLogo className="w-10 h-10" size={40} variant="light" />
              <div>
                <span className="text-2xl font-bold tracking-tight font-display text-white block">
                  RAAH J&K
                </span>
                <span className="text-xs text-white/70 font-medium">
                  The right information, without the confusion.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
              An independent, student-led public-service initiative designed to make government services, scholarships, healthcare, grievance channels, and district guides accessible to everyone across Jammu & Kashmir.
            </p>

            {/* Creator Attribution */}
            <div className="pt-2 text-xs text-white/90 space-y-1">
              <p>
                <span className="text-white/60">Created & Maintained by:</span>{' '}
                <strong className="text-white font-semibold">Shariq Iqbal Shah</strong>
              </p>
              <div className="flex items-center gap-1.5 text-[#F3A83B]">
                <Mail className="w-3.5 h-3.5" />
                <a 
                  href="mailto:shahshariq7722@gmail.com" 
                  className="hover:underline font-medium"
                >
                  shahshariq7722@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A83B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors cursor-pointer">
                  Explore Resources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('smart-guide')} className="hover:text-white transition-colors cursor-pointer">
                  RAAH Smart Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('grievances')} className="hover:text-white transition-colors cursor-pointer">
                  Grievance Portals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('districts')} className="hover:text-white transition-colors cursor-pointer">
                  District Guide (All 20)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Key Official Government Portals (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A83B]">
              Official Govt Portals
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="https://samadhan.jk.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>JK SAMADHAN Redressal</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="https://eunnat.jk.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>e-UNNAT Citizen Services</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="https://feastjk.gov.in/jkgrams/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>PDS GRAMS Ration Cell</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>National Scholarship Portal</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Ayushman Golden Card (PM-JAY)</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="https://www.jkpoliceeservices.gov.in/Login.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>J&K Police e-Services</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Citizen Utilities & Community (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A83B]">
              Public Support & Utilities
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Found a broken link or want to suggest an official public scheme? Help make RAAH J&K better for every resident.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenSuggestModal}
                className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-left flex items-center justify-between"
              >
                <span>Suggest a Resource</span>
                <span>→</span>
              </button>
              <button
                onClick={onOpenGlossary}
                className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-left flex items-center justify-between"
              >
                <span>Govt Jargon Dictionary</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Strict Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#F3A83B] shrink-0" />
            <p>
              <strong>Non-Governmental Disclaimer:</strong> RAAH J&K is an independent public-information platform created by student developer <strong>Shariq Iqbal Shah</strong>. Not affiliated with or endorsed by any government entity.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span>© 2026 RAAH J&K. Free Public Service.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
