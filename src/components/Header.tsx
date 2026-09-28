import React, { useState } from 'react';
import { Menu, X, Scissors, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'salon', label: 'Le Salon de Coiffure' },
    { id: 'tarifs', label: 'Nos Tarifs' },
    { id: 'contact', label: 'Contact & Accès' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Logo / Nom: KEVIN C + Minimalist Slanted Atelier Stamp */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('accueil')}
              className="group flex items-baseline gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-serif font-light tracking-[0.08em] text-stone-900 group-hover:text-stone-600 transition-colors uppercase leading-none">
                KEVIN C
              </span>
            </button>

            {/* Subtle editorial slanted stamp (un peu de travers mais épuré) */}
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-serif italic text-stone-500 border border-stone-200/80 rounded bg-[#faf9f6] transform -rotate-2 select-none">
              <Scissors className="w-3 h-3 text-[#947854] animate-shear" />
              <span>Artisan Coiffeur · Lognes</span>
            </span>
          </div>

          {/* Navigation Menu (Minimalist, generous spacing) */}
          <nav className="hidden lg:flex items-center space-x-10" aria-label="Navigation principale">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-[13px] uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'text-stone-950 font-medium'
                      : 'text-stone-500 hover:text-stone-950 font-light'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Clean Action Button on Desktop (Venir au salon) - No phone/prise de rdv in top dock */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-stone-900 hover:text-white border border-stone-900 hover:bg-stone-900 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xs hover:shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Venir au salon</span>
            </button>
          </div>

          {/* Mobile menu toggle only (clean minimalist mobile header without phone pill) */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  activePage === item.id
                    ? 'bg-stone-100 text-stone-950 font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-stone-200">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-stone-950 text-white font-medium text-sm shadow-xs cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#d4b996]" />
              <span>Venir au salon · Horaires & Accès</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
