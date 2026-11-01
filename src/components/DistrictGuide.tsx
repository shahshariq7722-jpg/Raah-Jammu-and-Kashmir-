import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  ExternalLink, 
  Phone, 
  Hospital, 
  Building, 
  MapPin, 
  X,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DISTRICTS_DATA } from '../data/districts.ts';
import { DistrictInfo } from '../data/types.ts';

export const DistrictGuide: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<'all' | 'Kashmir' | 'Jammu'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDistrictModal, setActiveDistrictModal] = useState<DistrictInfo | null>(null);

  const filteredDistricts = DISTRICTS_DATA.filter((district) => {
    const matchesDivision = selectedDivision === 'all' || district.division === selectedDivision;
    const matchesSearch = 
      district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.headquarters.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDivision && matchesSearch;
  });

  return (
    <section className="py-12 bg-[#F6F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B5B] bg-[#176B5B]/10 px-3 py-1 rounded-full mb-3">
            <Compass className="w-4 h-4 text-[#F3A83B]" />
            <span>Comprehensive 20-District Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#104D43] font-display">
            District Information Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Direct access to official district administration portals (NIC), DC office complexes, emergency control rooms, and public hospital directories across all 20 districts of Jammu & Kashmir.
          </p>
        </div>

        {/* Division Filter and District Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Division Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            <button
              onClick={() => setSelectedDivision('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedDivision === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 20 Districts
            </button>
            <button
              onClick={() => setSelectedDivision('Kashmir')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedDivision === 'Kashmir'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kashmir Division (10)
            </button>
            <button
              onClick={() => setSelectedDivision('Jammu')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedDivision === 'Jammu'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jammu Division (10)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by district name (e.g. Baramulla, Doda)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-[#176B5B] focus:outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDistricts.map((district) => (
            <div
              key={district.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#176B5B] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Division metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#176B5B]">
                    {district.division} Division
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>HQ: {district.headquarters}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#176B5B] transition-colors">
                  {district.name} District
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {district.description}
                </p>

                {/* Key Contacts */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#176B5B] shrink-0 mt-0.5" />
                    <span>DC Office: {district.dcOfficeContact}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hospital className="w-3.5 h-3.5 text-[#F3A83B] shrink-0 mt-0.5" />
                    <span className="truncate">{district.hospitals[0]}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveDistrictModal(district)}
                  className="text-xs font-semibold text-[#176B5B] hover:text-[#104D43] cursor-pointer"
                >
                  View Details
                </button>
                <a
                  href={district.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#176B5B]/10 hover:bg-[#176B5B] text-[#176B5B] hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>NIC Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth District Details */}
        {activeDistrictModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 border border-slate-200 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{activeDistrictModal.division} Division</span>
                    <span aria-hidden="true">·</span>
                    <span>Administrative Headquarters: {activeDistrictModal.headquarters}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#104D43] mt-1 font-display">
                    {activeDistrictModal.name} District
                  </h3>
                </div>
                <button
                  onClick={() => setActiveDistrictModal(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeDistrictModal.description}
              </p>

              {/* Verified Contact Details */}
              <div className="bg-[#F6F9F7] rounded-xl p-4 border border-slate-200/90 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Deputy Commissioner Office:</span>
                  <span className="text-slate-900 font-medium">{activeDistrictModal.dcOfficeContact}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                  <span className="font-semibold text-slate-800">Emergency Control Room / Helpline:</span>
                  <span className="text-slate-900 font-medium">{activeDistrictModal.controlRoomHelpline}</span>
                </div>
              </div>

              {/* Major Hospitals Directory */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Hospital className="w-4 h-4 text-[#176B5B]" />
                  <span>Public Healthcare & Referral Hospitals</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeDistrictModal.hospitals.map((hosp, i) => (
                    <li key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#176B5B] shrink-0" />
                      <span>{hosp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Public Administrative Offices */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#F3A83B]" />
                  <span>Key Administrative Offices & Complexes</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeDistrictModal.keyOffices.map((office, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{office}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Modal Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Verified District Administration Data
                </span>
                <a
                  href={activeDistrictModal.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Visit {activeDistrictModal.name} NIC Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
