import React, { useState } from 'react';
import { CompassLogo } from './CompassLogo.tsx';
import { Bookmark, Menu, X, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenSuggestModal: () => void;
  onOpenGlossary: () => void;
  fontSize: 'normal' | 'medium' | 'large';
  setFontSize: (size: 'normal' | 'medium' | 'large') => void;
  simpleLanguageMode: boolean;
  setSimpleLanguageMode: (enabled: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenBookmarks,
  onOpenSuggestModal,
  onOpenGlossary,
  fontSize,
  setFontSize,
  simpleLanguageMode,
  setSimpleLanguageMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'resources', label: 'Explore Resources' },
    { id: 'smart-guide', label: 'Smart Guide' },
    { id: 'grievances', label: 'Grievance Portals' },
    { id: 'districts', label: 'District Guide' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Utility Announcement & Accessibility Bar */}
      <div className="bg-[#104D43] text-white text-xs px-4 py-1.5 border-b border-[#0d3f37]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#F3A83B]">RAAH J&K</span>
            <span className="text-white/60 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-white/90 hidden sm:inline">The right information, without the confusion.</span>
            <span className="text-white/40 hidden md:inline" aria-hidden="true">|</span>
            <span className="text-white/80 hidden lg:inline">Independent Student-Led Public Service Initiative</span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            {/* Simple Language Mode Toggle */}
            <button
              onClick={() => setSimpleLanguageMode(!simpleLanguageMode)}
              className={`flex items-center gap-1.5 px-2 py-0.5 rounded transition-all cursor-pointer ${
                simpleLanguageMode 
                  ? 'bg-[#F3A83B] text-slate-900 font-semibold shadow-xs' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              title="Toggle Simple Everyday English Explanations"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{simpleLanguageMode ? 'Simple Mode: ON' : 'Simple Mode'}</span>
            </button>

            {/* Glossary Button */}
            <button
              onClick={onOpenGlossary}
              className="flex items-center gap-1 text-white/80 hover:text-white hover:underline cursor-pointer"
              title="Understand Government Terms in Plain English"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Govt Glossary</span>
            </button>

            {/* Text Resizer */}
            <div className="flex items-center gap-1 bg-white/10 rounded px-1.5 py-0.5" title="Adjust text size for readability">
              <span className="text-[11px] text-white/70 mr-1 hidden sm:inline">Size:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 rounded text-xs cursor-pointer ${fontSize === 'normal' ? 'bg-white text-slate-900 font-bold' : 'text-white/80 hover:text-white'}`}
                aria-label="Normal Font"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('medium')}
                className={`px-1 rounded text-xs cursor-pointer ${fontSize === 'medium' ? 'bg-white text-slate-900 font-bold' : 'text-white/80 hover:text-white'}`}
                aria-label="Medium Font"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 rounded text-xs cursor-pointer ${fontSize === 'large' ? 'bg-white text-slate-900 font-bold' : 'text-white/80 hover:text-white'}`}
                aria-label="Large Font"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Top Bar (3-zone contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B5B] rounded-lg cursor-pointer shrink-0"
          >
            <CompassLogo className="w-10 h-10 shrink-0" size={40} />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#104D43] font-display whitespace-nowrap">
                RAAH J&K
              </span>
              <span className="text-[11px] text-slate-500 font-medium -mt-1 hidden sm:block">
                Public Information Guide
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#176B5B] font-semibold' 
                      : 'hover:text-[#104D43] text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B5B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Saved Resources + Suggestion) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Saved Bookmarks Button */}
            <button
              onClick={onOpenBookmarks}
              className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#104D43] bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="Saved Resources in this browser"
              aria-label="View Saved Bookmarks"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'text-[#F3A83B] fill-[#F3A83B]' : 'text-slate-500'}`} />
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 bg-[#176B5B] text-white text-[10px] font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Smart Guide Action Button */}
            <button
              onClick={() => handleNavClick('smart-guide')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#176B5B] hover:bg-[#104D43] rounded-lg shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Smart Guide
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeTab === link.id
                  ? 'bg-[#176B5B]/10 text-[#176B5B] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSuggestModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#176B5B]" />
              <span>Suggest a Resource or Feedback</span>
            </button>

            <button
              onClick={() => {
                onOpenGlossary();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#176B5B]" />
              <span>Government Jargon Glossary</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
