import React, { useState } from 'react';
import { HelpCircle, X, Search, Sparkles, BookOpen } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary.ts';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter((item) =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.officialContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.simpleDefinition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 border border-slate-200 shadow-2xl space-y-6 max-h-[90vh] flex flex-col justify-between animate-in fade-in zoom-in-95"
        role="dialog"
        aria-label="Government Jargon Glossary"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3A83B]/20 flex items-center justify-center text-[#F3A83B]">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#104D43] font-display">
                Simple Language Glossary
              </h3>
              <p className="text-xs text-slate-500">
                Complicated government & legal terms explained in plain, everyday English
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Close glossary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search term (e.g. Domicile, DBT, PSGA, Jamabandi)..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all"
          />
        </div>

        {/* Glossary Terms List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {filteredTerms.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-[#F6F9F7] rounded-xl border border-slate-200/90 hover:border-[#176B5B] transition-colors space-y-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-base font-bold text-slate-900">
                  {item.term}
                </h4>
                <span className="text-[11px] text-slate-500 italic">
                  {item.officialContext}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {item.simpleDefinition}
              </p>

              <div className="p-2.5 bg-white rounded-lg border border-slate-100 text-xs text-slate-600">
                <strong className="text-[#176B5B] font-semibold">Practical Example: </strong>
                {item.practicalExample}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs">
              No matching terms found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Reviewed for J&K Citizens & Students</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#176B5B] text-white font-semibold rounded-lg hover:bg-[#104D43] cursor-pointer"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
