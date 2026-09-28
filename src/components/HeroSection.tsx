import React from 'react';
import { Phone, Calendar, MapPin, Clock, Scissors, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_salon_kevinc_1790528361809.jpg';
import cutStylingImg from '../assets/images/salon_cut_styling_1790528375042.jpg';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#121110] text-white overflow-hidden flex items-center diagonal-cut-bottom pb-20 sm:pb-28">
      {/* Background Image with Dark Contrast Scrim (Lydie Coiffure minimal dark aesthetic) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Intérieur du salon de coiffure Kevin C à Lognes"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 transform scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110]/90 to-[#121110]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Minimalist kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-[#d4b996]">
              <Scissors className="w-3.5 h-3.5 text-[#d4b996] animate-shear" />
              <span>Salon de coiffure à Lognes</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Depuis 1997</span>
            </div>

            {/* Title: Kevin C */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white text-balance leading-[1.08]">
                Kevin C
              </h1>
              {/* Subtitle exact from user prompt */}
              <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-xl text-balance">
                Salon de coiffure à Lognes – Coupes, colorations & coiffure africaine
              </p>
            </div>

            {/* Quick Unboxed Metadata (Spacious, anti-pill) */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-stone-300 pt-1 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4b996] shrink-0" />
                <span>1 Cours des Lacs (Gare RER A)</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4b996] shrink-0" />
                <span>Mardi au Samedi dès 9h30</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Sans RDV selon disponibilité</span>
              </div>
            </div>

            {/* Primary Action Buttons: Minimalist & Balanced Proportions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-medium text-sm sm:text-base transition-colors shadow-lg shadow-black/25 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-stone-900" />
                <span>Prendre RDV : {SALON_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('tarifs')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-stone-200 hover:text-white border border-stone-800 font-medium text-sm sm:text-base transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Consulter nos tarifs</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 text-stone-300 hover:text-white font-medium text-sm sm:text-base transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Contact & Accès</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: "Un peu de travers mais optimisé" - Tilted Lookbook Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <div
              className="relative group tilt-card-right cursor-pointer"
              onClick={() => onNavigate('salon')}
            >
              {/* Photo Frame with subtle rotation */}
              <div className="w-[330px] h-[450px] rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-2xl relative">
                <img
                  src={cutStylingImg}
                  alt="Savoir-faire salon Kevin C"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#d4b996]">
                    Haute précision
                  </p>
                  <p className="font-serif text-xl font-medium">
                    Coupes, Brushing & Soins
                  </p>
                  <p className="text-xs text-stone-400 font-light">
                    Près de 30 ans d'expertise à Lognes
                  </p>
                </div>
              </div>

              {/* Chic Slanted Stamp overlay (de travers mais épuré) */}
              <div className="absolute -top-3 -right-3 bg-stone-950/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-xl border border-stone-800 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-[#d4b996]">
                  Depuis
                </span>
                <span className="font-serif font-medium text-lg leading-none">
                  1997
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
