import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CookieBanner } from './components/CookieBanner';
import { LegalTabId } from './components/LegalSection';
import { HomePage } from './pages/HomePage';
import { SalonPage } from './pages/SalonPage';
import { TarifsPage } from './pages/TarifsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('accueil');
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTabId | null>(null);

  // Handle URL Hash navigation and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'salon' || hash === 'le-salon-de-coiffure') {
        setActivePage('salon');
      } else if (hash === 'tarifs' || hash === 'nos-tarifs') {
        setActivePage('tarifs');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'mentions-legales') {
        setActiveLegalTab('mentions');
        setTimeout(() => {
          document.getElementById('legal-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'confidentialite') {
        setActiveLegalTab('confidentialite');
        setTimeout(() => {
          document.getElementById('legal-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'cgv') {
        setActiveLegalTab('cgv');
        setTimeout(() => {
          document.getElementById('legal-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'cookies') {
        setActiveLegalTab('cookies');
        setTimeout(() => {
          document.getElementById('legal-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setActivePage('accueil');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
  };

  const handleOpenCookiePreferences = () => {
    setActiveLegalTab('cookies');
    setTimeout(() => {
      document.getElementById('legal-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-stone-800 pb-16 sm:pb-0 selection:bg-stone-200 selection:text-stone-900">
      {/* 1. Header (Impreza White Header with phone 01 60 17 33 10 & 4 page menu) */}
      <Header activePage={activePage} onNavigate={navigateTo} />

      {/* 2. Main Page Content */}
      <main className="flex-1" id="main-content">
        {activePage === 'accueil' && <HomePage onNavigate={navigateTo} />}
        {activePage === 'salon' && <SalonPage onNavigate={navigateTo} />}
        {activePage === 'tarifs' && <TarifsPage onNavigate={navigateTo} />}
        {activePage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* 3. Footer avec Espace Juridique sous forme d'onglets */}
      <Footer
        onNavigate={navigateTo}
        activeLegalTab={activeLegalTab}
        onSelectLegalTab={setActiveLegalTab}
      />

      {/* 4. Mobile Sticky Action Bar */}
      <MobileQuickBar onNavigate={navigateTo} />

      {/* 5. Bandeau de consentement aux cookies */}
      <CookieBanner onOpenPreferences={handleOpenCookiePreferences} />
    </div>
  );
}
