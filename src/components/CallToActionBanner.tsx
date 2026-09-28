import React from 'react';
import { Phone, MapPin, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

interface CallToActionBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#121110] text-white py-20 lg:py-28 border-t border-stone-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#1a1817] border border-stone-800 p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle slanted stamp (de travers mais discret) */}
          <div className="absolute top-5 right-5 hidden sm:block bg-stone-900 border border-stone-700 text-[#d4b996] text-[10px] font-serif italic px-3 py-1 rounded shadow-xs transform rotate-2">
            Salon Indépendant · Lognes
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#d4b996]">
                <Scissors className="w-3.5 h-3.5 text-[#d4b996] animate-shear" />
                <span>Coiffure à Lognes · 1 Cours des Lacs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight text-balance">
                Prenez rendez-vous dès maintenant par téléphone ou rendez-nous visite au salon.
              </h2>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
                Une envie de changement, un rafraîchissement ou une coiffure d’exception ? Notre équipe vous accueille avec écoute et professionnalisme.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-medium text-sm sm:text-base transition-colors shadow-lg shadow-black/25 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-stone-950" />
                <span>{SALON_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-stone-700 font-medium text-sm sm:text-base transition-colors whitespace-nowrap cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#d4b996]" />
                <span>Venir au salon</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
