/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ResourceExplorer } from './components/ResourceExplorer.tsx';
import { SmartGuide } from './components/SmartGuide.tsx';
import { GrievanceDirectory } from './components/GrievanceDirectory.tsx';
import { DistrictGuide } from './components/DistrictGuide.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { Footer } from './components/Footer.tsx';
import { SavedBookmarksDrawer } from './components/SavedBookmarksDrawer.tsx';
import { GlossaryModal } from './components/GlossaryModal.tsx';
import { SuggestResourceModal } from './components/SuggestResourceModal.tsx';
import { RECENT_ANNOUNCEMENTS } from './data/announcements.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Accessibility & Preferences
  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');
  const [simpleLanguageMode, setSimpleLanguageMode] = useState<boolean>(false);

  // Modals & Drawers
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState<boolean>(false);

  // Bookmarked Resource IDs saved locally in browser
  const [savedResourceIds, setSavedResourceIds] = useState<string[]>(() => {
    try {
      const local = localStorage.getItem('raah_jk_saved_bookmarks');
      return local ? JSON.parse(local) : ['res-nsp', 'res-eunnat', 'res-pmjay'];
    } catch {
      return ['res-nsp', 'res-eunnat', 'res-pmjay'];
    }
  });

  // Sync bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('raah_jk_saved_bookmarks', JSON.stringify(savedResourceIds));
    } catch (e) {
      console.warn('Could not save bookmarks to localStorage', e);
    }
  }, [savedResourceIds]);

  const handleToggleBookmark = (id: string) => {
    setSavedResourceIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllBookmarks = () => {
    setSavedResourceIds([]);
  };

  // Quick category selection from Hero
  const handleSelectQuickCategory = (catId: string) => {
    if (catId === 'grievance') {
      setActiveTab('grievances');
    } else if (catId === 'district') {
      setActiveTab('districts');
    } else {
      setSelectedCategory(catId);
      setActiveTab('resources');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Search submission from Hero
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setActiveTab('resources');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Font size class mapping
  const fontSizeClass = {
    normal: 'text-[15px]',
    medium: 'text-[16.5px]',
    large: 'text-[18px]'
  }[fontSize];

  return (
    <div className={`min-h-screen flex flex-col bg-[#F6F9F7] text-slate-800 ${fontSizeClass}`}>
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedResourceIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSuggestModal={() => setIsSuggestModalOpen(true)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        simpleLanguageMode={simpleLanguageMode}
        setSimpleLanguageMode={setSimpleLanguageMode}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onSelectCategory={handleSelectQuickCategory}
              announcements={RECENT_ANNOUNCEMENTS}
            />

            {/* Smart Guide preview showcase on Home */}
            <div className="border-t border-slate-200/80">
              <SmartGuide
                onToggleBookmark={handleToggleBookmark}
                savedResourceIds={savedResourceIds}
                simpleLanguageMode={simpleLanguageMode}
              />
            </div>

            {/* Public Grievance highlights */}
            <div className="border-t border-slate-200/80">
              <GrievanceDirectory
                onOpenGlossary={() => setIsGlossaryOpen(true)}
              />
            </div>

            {/* District Directory */}
            <div className="border-t border-slate-200/80">
              <DistrictGuide />
            </div>

            {/* About Platform & Creator Attribution */}
            <AboutSection 
              onOpenSuggestModal={() => setIsSuggestModalOpen(true)} 
            />
          </>
        )}

        {activeTab === 'resources' && (
          <ResourceExplorer
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onToggleBookmark={handleToggleBookmark}
            savedResourceIds={savedResourceIds}
            simpleLanguageMode={simpleLanguageMode}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        )}

        {activeTab === 'smart-guide' && (
          <div className="pt-4">
            <SmartGuide
              onToggleBookmark={handleToggleBookmark}
              savedResourceIds={savedResourceIds}
              simpleLanguageMode={simpleLanguageMode}
            />
          </div>
        )}

        {activeTab === 'grievances' && (
          <div className="pt-4">
            <GrievanceDirectory
              onOpenGlossary={() => setIsGlossaryOpen(true)}
            />
          </div>
        )}

        {activeTab === 'districts' && (
          <div className="pt-4">
            <DistrictGuide />
          </div>
        )}

        {activeTab === 'about' && (
          <AboutSection 
            onOpenSuggestModal={() => setIsSuggestModalOpen(true)} 
          />
        )}
      </main>

      {/* Footer with Creator Attribution & Disclaimers */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSuggestModal={() => setIsSuggestModalOpen(true)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
      />

      {/* Slide-over Saved Bookmarks Drawer */}
      <SavedBookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedResourceIds={savedResourceIds}
        onRemoveBookmark={handleToggleBookmark}
        onClearAllBookmarks={handleClearAllBookmarks}
      />

      {/* Simple Language Mode & Government Terms Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* Suggest Resource & Creator Feedback Modal */}
      <SuggestResourceModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
      />

    </div>
  );
}
