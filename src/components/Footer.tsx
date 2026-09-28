import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ArrowUpRight, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';
import { LegalSection, LegalTabId } from './LegalSection';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  activeLegalTab?: LegalTabId | null;
  onSelectLegalTab?: (tab: LegalTabId | null) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  activeLegalTab = null,
  onSelectLegalTab,
}) => {
  // Par défaut, fermé (null) : affiché uniquement quand on clique dessus
  const [currentLegalTab, setCurrentLegalTab] = useState<LegalTabId | null>(activeLegalTab);

  useEffect(() => {
    if (activeLegalTab !== undefined) {
      setCurrentLegalTab(activeLegalTab);
    }
  }, [activeLegalTab]);

  const handleTabChange = (tab: LegalTabId | null) => {
    setCurrentLegalTab(tab);
    if (onSelectLegalTab) onSelectLegalTab(tab);
  };

  return (
    <footer className="bg-[#121110] text-stone-400 border-t border-stone-800/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        {/* 4 Colonnes Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-light text-white tracking-wider uppercase block">
              KEVIN C
            </span>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              Salon de coiffure à Lognes au 1 Cours des Lacs depuis {SALON_INFO.establishedYear}. Coiffure mixte, spécialiste chevelure africaine, bouclée et frisée, coupes tendances et coiffures de mariage.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#d4b996]">
                <Scissors className="w-3.5 h-3.5 animate-shear" />
                <span>Près de 30 ans de passion & de fidélité</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('accueil');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('salon');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Le Salon Kevin C
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tarifs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Nos Tarifs & Prestations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact & Accès
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordonnées & Accès */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Nous trouver
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4b996] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  {SALON_INFO.address}<br />
                  {SALON_INFO.postalCode} {SALON_INFO.city} (France)<br />
                  <span className="text-stone-500 text-xs">Gare RER A Lognes (2 min à pied)</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4b996] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="text-white hover:text-[#d4b996] font-medium tabular-nums transition-colors"
                >
                  {SALON_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white font-medium transition-colors"
                >
                  <span>Voir sur Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Horaires d'ouverture */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Horaires
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-light">
              <div className="flex justify-between py-1 border-b border-stone-800/80">
                <span className="text-stone-400">Mardi</span>
                <span className="text-stone-200 tabular-nums">9h30–12h / 14h–18h</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/80">
                <span className="text-stone-400">Mer. au Sam.</span>
                <span className="text-stone-200 tabular-nums">9h30–12h / 14h–19h30</span>
              </div>
              <div className="flex justify-between py-1 text-stone-500">
                <span>Dim. & Lundi</span>
                <span className="text-stone-500">Fermé</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-stone-500 font-light leading-relaxed">
              Sans rendez-vous possible selon disponibilité en salon.
            </p>
          </div>

        </div>

        {/* Bloc Juridique Discret sous forme d'onglets (affiché UNIQUEMENT au clic) */}
        <div className="pt-8 border-t border-stone-800/80">
          <LegalSection
            activeTab={currentLegalTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Pied de page final : Contact & Copyright */}
        <div className="pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© 2026 Somboun PASOMSOUK – KEVIN C – Tous droits réservés</p>

          <div className="flex items-center gap-4 text-stone-400">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact & Accès
            </button>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span>1 Cours des Lacs, 77185 Lognes</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span>01 60 17 33 10</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
