import React, { useState } from 'react';
import { 
  AlertCircle, 
  ExternalLink, 
  Search, 
  Phone, 
  ShieldAlert, 
  Info,
  CheckCircle2,
  Building,
  HelpCircle
} from 'lucide-react';
import { GRIEVANCE_DEPARTMENTS } from '../data/grievanceDepartments.ts';
import { GrievanceDepartment } from '../data/types.ts';

interface GrievanceDirectoryProps {
  onOpenGlossary: () => void;
}

export const GrievanceDirectory: React.FC<GrievanceDirectoryProps> = ({ onOpenGlossary }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unified' | 'specific'>('all');

  const filteredDepartments = GRIEVANCE_DEPARTMENTS.filter((dept) => {
    const matchesSearch = 
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.handles.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'unified') return dept.isUnified;
    if (selectedFilter === 'specific') return !dept.isUnified;
    return true;
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F3A83B] bg-amber-500/10 px-3 py-1 rounded-full mb-3">
            <AlertCircle className="w-4 h-4 text-[#F3A83B]" />
            <span>Dedicated Redressal Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#104D43] font-display">
            Public Grievance Portals – Find the Right Place to Raise Your Concern
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Discover verified government redressal portals, emergency helplines, and exact filing instructions for all 15 key administrative departments across Jammu & Kashmir.
          </p>
        </div>

        {/* Mandatory Clear Legal Disclaimer Banner */}
        <div className="mb-8 p-4 bg-amber-50 border border-amber-200/90 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-amber-950">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-amber-900 block">
                Important Public Notice & Disclaimer
              </strong>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                RAAH J&K is an independent public-information guide. RAAH J&K <strong>does not receive, process, or resolve complaints</strong>, and does not charge any fee. We provide official instructions and direct links to authentic government grievance portals. Always file your concerns directly on the official portals linked below.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 underline shrink-0 cursor-pointer self-end sm:self-center"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>How Grievance Redressal Works</span>
          </button>
        </div>

        {/* Important Official Portals Quick Strip */}
        <div className="mb-8 p-4 bg-[#F6F9F7] rounded-2xl border border-slate-200/80">
          <span className="text-xs font-bold uppercase tracking-wider text-[#104D43] block mb-2">
            Key Unified Government Portals in J&K:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <a 
              href="https://samadhan.jk.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#176B5B] transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block">JK SAMADHAN</span>
                <span className="text-[11px] text-slate-500">Apex State Grievances</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#176B5B] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a 
              href="https://feastjk.gov.in/jkgrams/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#176B5B] transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block">PDS GRAMS</span>
                <span className="text-[11px] text-slate-500">Ration & FCS&CA</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#176B5B] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a 
              href="https://jalshaktiphekashmir.in/grievances" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#176B5B] transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block">Jal Shakti PHE</span>
                <span className="text-[11px] text-slate-500">Drinking Water Cell</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#176B5B] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a 
              href="https://www.jkpoliceeservices.gov.in/Login.aspx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#176B5B] transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block">J&K Police Portal</span>
                <span className="text-[11px] text-slate-500">Citizen e-Services</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#176B5B] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a 
              href="https://singlewindow.jk.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#176B5B] transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block">JK Single Window</span>
                <span className="text-[11px] text-slate-500">Business & Industry</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#176B5B] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Department Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search departments (e.g. Electricity, Water, Police, Ration)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#F6F9F7] border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all"
            />
          </div>

          {/* Channel Type Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 15 Departments ({GRIEVANCE_DEPARTMENTS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('unified')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'unified'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unified SAMADHAN Channel
            </button>
            <button
              onClick={() => setSelectedFilter('specific')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'specific'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Department-Specific Portals
            </button>
          </div>
        </div>

        {/* 15 Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map((dept, index) => {
            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#176B5B] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata strip (zero-pill discipline) */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#176B5B]">Dept #{index + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className={dept.isUnified ? 'text-slate-600' : 'text-[#F3A83B] font-semibold'}>
                      {dept.isUnified ? 'Unified SAMADHAN System' : 'Dedicated Portal'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Checked {dept.lastCheckedDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {dept.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Sector: {dept.category}
                  </p>

                  {/* Issues handled */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Common Grievances Handled:
                    </span>
                    <ul className="space-y-1">
                      {dept.handles.map((issue, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#176B5B] shrink-0 mt-1.5" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Guidance Note */}
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <strong className="font-semibold text-slate-800">Filing Instructions: </strong>
                    {dept.guidanceNote}
                  </div>

                  {/* Helpline info */}
                  <div className="mt-3 flex items-start gap-2 text-xs text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#176B5B] shrink-0 mt-0.5" />
                    <span className="font-medium">
                      Helpline: {dept.contactHelpline}
                    </span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-500">
                    <span>{dept.portalName.split('–')[0]}</span>
                  </div>
                  <a
                    href={dept.directComplaintUrl || dept.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <span>Lodge Grievance</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredDepartments.length === 0 && (
          <div className="text-center py-12 bg-[#F6F9F7] rounded-2xl border border-slate-200">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-800">No departments found</h3>
            <p className="text-xs text-slate-600 mt-1">
              Try searching with broader terms like "water", "electricity", "transport", or "police".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
              className="mt-3 px-4 py-1.5 text-xs font-semibold text-[#176B5B] bg-white border border-[#176B5B] rounded-lg cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
