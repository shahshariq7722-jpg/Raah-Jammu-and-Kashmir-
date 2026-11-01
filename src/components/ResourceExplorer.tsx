import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  Bookmark, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Phone,
  GraduationCap,
  Building2,
  HeartPulse,
  Briefcase,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ALL_RESOURCES } from '../data/resources.ts';
import { ResourceItem, CategoryType } from '../data/types.ts';

interface ResourceExplorerProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onToggleBookmark: (id: string) => void;
  savedResourceIds: string[];
  simpleLanguageMode: boolean;
  onOpenGlossary: () => void;
}

export const ResourceExplorer: React.FC<ResourceExplorerProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onToggleBookmark,
  savedResourceIds,
  simpleLanguageMode,
  onOpenGlossary,
}) => {
  const [feeFilter, setFeeFilter] = useState<'all' | 'Free' | 'Nominal Govt Fee' | 'Eligibility Based'>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'education', label: 'Education & Scholarships', icon: GraduationCap },
    { id: 'government', label: 'Government Services', icon: Building2 },
    { id: 'healthcare', label: 'Healthcare Resources', icon: HeartPulse },
    { id: 'careers', label: 'Skills & Careers', icon: Briefcase },
  ];

  const filteredResources = ALL_RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesFee = feeFilter === 'all' || res.feeType === feeFilter;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === '' ||
      res.title.toLowerCase().includes(query) ||
      res.description.toLowerCase().includes(query) ||
      res.simpleExplanation.toLowerCase().includes(query) ||
      res.subcategory.toLowerCase().includes(query) ||
      res.officialSource.toLowerCase().includes(query) ||
      res.tags.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesFee && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section className="py-12 bg-[#F6F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#104D43] font-display">
              Public Resource Directory
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Explore verified official government portals, educational schemes, health coverage, and career pathways across Jammu & Kashmir with verified links and requirements.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGlossary}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#176B5B] hover:text-[#104D43] bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-xs cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#F3A83B]" />
              <span>Jargon Glossary</span>
            </button>
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Filter Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#176B5B] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Secondary Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Working Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. NSP, PMSSS, Domicile, Golden Card, MUMKIN)..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Fee / Cost Type Filter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium hidden sm:inline">Access Type:</span>
            <select
              value={feeFilter}
              onChange={(e) => setFeeFilter(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium focus:outline-none focus:border-[#176B5B] cursor-pointer"
            >
              <option value="all">All Fee Structures</option>
              <option value="Free">100% Free / Sponsored</option>
              <option value="Nominal Govt Fee">Nominal Govt Fee</option>
              <option value="Eligibility Based">Eligibility Based</option>
            </select>
          </div>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => {
            const isSaved = savedResourceIds.includes(res.id);
            const isExpanded = expandedCardId === res.id;

            return (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#176B5B] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top unboxed metadata strip with typographic separators */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#176B5B]">{res.subcategory}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium">{res.feeType}</span>
                    <span aria-hidden="true">·</span>
                    <span>Verified {res.verifiedDate}</span>
                  </div>

                  {/* Title & Bookmark Button */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {res.title}
                    </h3>
                    <button
                      onClick={() => onToggleBookmark(res.id)}
                      className="p-1.5 text-slate-400 hover:text-[#F3A83B] transition-colors cursor-pointer shrink-0"
                      title={isSaved ? 'Saved to Bookmarks' : 'Bookmark this resource'}
                      aria-label="Bookmark resource"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#F3A83B] fill-[#F3A83B]' : ''}`} />
                    </button>
                  </div>

                  {/* Description or Simple Language Explanation */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {simpleLanguageMode ? res.simpleExplanation : res.description}
                  </p>

                  {/* Simple Language Indicator Pill or Banner if toggled */}
                  {simpleLanguageMode && (
                    <div className="mt-2.5 p-2 bg-[#F3A83B]/10 rounded-lg text-[11px] text-[#104D43] font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F3A83B] shrink-0" />
                      <span>Showing plain-English explanation</span>
                    </div>
                  )}

                  {/* Eligibility Notice if available */}
                  {res.eligibilityInfo && (
                    <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                      <strong className="font-semibold text-slate-900 block mb-0.5">
                        Verified Eligibility Criteria:
                      </strong>
                      <span>{res.eligibilityInfo}</span>
                    </div>
                  )}

                  {/* Expandable Key Steps Checklist */}
                  {res.keySteps && res.keySteps.length > 0 && (
                    <div className="mt-3">
                      <button
                        onClick={() => toggleExpand(res.id)}
                        className="text-xs font-semibold text-[#176B5B] hover:text-[#104D43] flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Steps' : 'View Application Process'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1.5 text-xs text-slate-700">
                          {res.keySteps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="font-bold text-[#176B5B]">{idx + 1}.</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Helpline information */}
                  {res.contactHelpline && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600">
                      <Phone className="w-3.5 h-3.5 text-[#176B5B] shrink-0" />
                      <span className="font-medium truncate">{res.contactHelpline}</span>
                    </div>
                  )}
                </div>

                {/* Card Action & External Official Link */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 truncate max-w-[55%]">
                    <span>Source: {res.officialSource}</span>
                  </div>

                  <a
                    href={res.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No resources found</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
              We couldn't find matches for "{searchQuery}". Try searching for broader terms such as "scholarship", "domicile", "golden card", or "coaching".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFeeFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-[#176B5B] text-white text-xs font-semibold rounded-lg hover:bg-[#104D43] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
