import React from 'react';
import { Bookmark, X, Trash2, ExternalLink, ArrowRight, Share2, Printer } from 'lucide-react';
import { ALL_RESOURCES } from '../data/resources.ts';
import { ResourceItem } from '../data/types.ts';

interface SavedBookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedResourceIds: string[];
  onRemoveBookmark: (id: string) => void;
  onClearAllBookmarks: () => void;
}

export const SavedBookmarksDrawer: React.FC<SavedBookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedResourceIds,
  onRemoveBookmark,
  onClearAllBookmarks,
}) => {
  if (!isOpen) return null;

  const savedResources = ALL_RESOURCES.filter((res) => savedResourceIds.includes(res.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Saved Resources Drawer"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#F3A83B] fill-[#F3A83B]" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Saved Resources
              </h3>
              <p className="text-xs text-slate-500">
                Stored locally in this browser ({savedResources.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {savedResources.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-3">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-800">
                No saved resources yet
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Click the bookmark icon on any scholarship, government service, or portal to save it here for quick offline reference.
              </p>
            </div>
          ) : (
            savedResources.map((res) => (
              <div
                key={res.id}
                className="p-4 bg-[#F6F9F7] rounded-xl border border-slate-200/90 hover:border-[#176B5B] transition-colors space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-[#176B5B] uppercase tracking-wider block">
                      {res.subcategory}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                      {res.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => onRemoveBookmark(res.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {res.description}
                </p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{res.feeType}</span>
                  <a
                    href={res.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#176B5B] hover:text-[#104D43] flex items-center gap-1"
                  >
                    <span>Open Official Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedResources.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
            <button
              onClick={onClearAllBookmarks}
              className="text-xs text-rose-600 hover:text-rose-800 font-medium cursor-pointer"
            >
              Clear All
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                title="Print your saved links"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print List</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-semibold bg-[#176B5B] text-white rounded-lg hover:bg-[#104D43] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
