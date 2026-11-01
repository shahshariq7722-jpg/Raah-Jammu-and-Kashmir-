import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  HeartPulse, 
  Briefcase, 
  AlertCircle, 
  Compass,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { AnnouncementItem } from '../data/types.ts';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (e?: React.FormEvent) => void;
  onSelectCategory: (category: string) => void;
  announcements: AnnouncementItem[];
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  onSelectCategory,
  announcements,
}) => {
  const quickCategories = [
    {
      id: 'education',
      title: 'Education & Scholarships',
      icon: GraduationCap,
      description: 'National Scholarship Portal, PMSSS, JKBOSE results, free academic courses & libraries.',
      targetTab: 'resources',
      accentColor: '#176B5B'
    },
    {
      id: 'government',
      title: 'Government Services',
      icon: Building2,
      description: 'e-UNNAT citizen portal, Domicile certificate, Land records (Jamabandi), and Parivahan.',
      targetTab: 'resources',
      accentColor: '#104D43'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Resources',
      icon: HeartPulse,
      description: 'Ayushman Golden Card (PM-JAY), Tele-MANAS helpline 14416, 108 ambulance, blood banks.',
      targetTab: 'resources',
      accentColor: '#176B5B'
    },
    {
      id: 'careers',
      title: 'Skills & Careers',
      icon: Briefcase,
      description: 'Mission Youth MUMKIN & TEJASWINI, free competitive exam coaching, JKSSB, JKPSC.',
      targetTab: 'resources',
      accentColor: '#104D43'
    },
    {
      id: 'grievance',
      title: 'Public Grievance Portals',
      icon: AlertCircle,
      description: 'Find direct complaint links for PDD, Jal Shakti, PDS Ration, Police, PWD, and JK SAMADHAN.',
      targetTab: 'grievances',
      accentColor: '#F3A83B'
    },
    {
      id: 'district',
      title: 'District Guide (All 20)',
      icon: Compass,
      description: 'Administrative portals, DC office contacts, key hospitals, and local offices across all 20 districts.',
      targetTab: 'districts',
      accentColor: '#176B5B'
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 bg-[#F6F9F7]">
      {/* Background soft ambient gradient */}
      <div 
        className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#104D43]/8 via-[#176B5B]/5 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Announcement Banner if available */}
        {announcements.length > 0 && (
          <div className="mb-6 bg-white border border-amber-200/90 rounded-xl p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-1 rounded-md shrink-0">
                Verified Update
              </span>
              <p className="text-xs sm:text-sm text-slate-800">
                <strong className="font-semibold text-slate-900">{announcements[0].title}:</strong>{' '}
                <span className="text-slate-600">{announcements[0].summary}</span>
              </p>
            </div>
            <a
              href={announcements[0].officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#176B5B] hover:text-[#104D43] flex items-center gap-1 shrink-0 group self-end sm:self-center"
            >
              <span>Official Link</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        )}

        {/* Hero Headline & Split Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#104D43] bg-[#176B5B]/10 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#176B5B]" />
              <span>Independent Student-Led Public Information Initiative · Free for Everyone</span>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-[#F3A83B]">
                Your Guide to Jammu & Kashmir
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#104D43] leading-[1.15] text-balance">
                The right information, <br className="hidden sm:inline" />
                <span className="text-[#176B5B] italic font-serif">without the confusion.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Discover useful public services, government resources, educational opportunities, verified grievance portals, and healthcare assistance in one place.
              </p>
            </div>

            {/* Global Working Search Bar */}
            <form onSubmit={onSearchSubmit} className="max-w-2xl">
              <div className="relative flex items-center shadow-md rounded-2xl bg-white border border-slate-200 focus-within:border-[#176B5B] focus-within:ring-2 focus-within:ring-[#176B5B]/20 transition-all p-1.5">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search scholarships, e-UNNAT services, grievance portals, hospitals..."
                  className="w-full px-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  aria-label="Search all public resources in Jammu & Kashmir"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#176B5B] hover:bg-[#104D43] text-white text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Keywords */}
              <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
                <span className="font-medium text-slate-700">Quick Searches:</span>
                {['PMSSS Scholarship', 'e-UNNAT Portal', '1912 Power Complaint', 'PDS Ration Card', 'Ayushman Golden Card', 'Domicile Certificate'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSearchQuery(tag);
                      onSelectCategory('all');
                    }}
                    className="hover:text-[#176B5B] hover:underline cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </form>

            {/* Key Platform Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#176B5B]" />
                <span>All 20 Districts Covered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#176B5B]" />
                <span>100% Free Public Resource</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#176B5B]" />
                <span>Verified Official Links Only</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white group">
              <img
                src="/src/assets/images/raah_jk_hero_1793548442436.jpg"
                alt="Scenic landscape of Jammu & Kashmir representing public guidance and clarity"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#104D43]/90 via-[#104D43]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#F3A83B] font-semibold">
                  Public Guidance Platform
                </span>
                <p className="text-base sm:text-lg font-serif font-medium mt-1">
                  Empowering every resident of Jammu & Kashmir with simple, verified access to citizen services.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-white/80 border-t border-white/20 pt-2.5">
                  <span>Student-Led Initiative</span>
                  <span>Jammu & Kashmir · 20 Districts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Categories Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-[#104D43] font-display">
              Quick Access Categories
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select an area to explore verified official portals, direct contacts, and step-by-step guides.
            </p>
          </div>
        </div>

        {/* 6 Quick Access Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#176B5B] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#176B5B]/10 flex items-center justify-center text-[#176B5B] group-hover:bg-[#176B5B] group-hover:text-white transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#176B5B] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#176B5B]">
                  <span>Explore Directory</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
