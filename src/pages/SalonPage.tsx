import React from 'react';
import { Phone, MapPin, Award, Heart, Scissors, Clock } from 'lucide-react';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { OpeningHoursBadge } from '../components/OpeningHoursBadge';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

import heroImg from '../assets/images/hero_salon_kevinc_1790528361809.jpg';
import cutImg from '../assets/images/salon_cut_styling_1790528375042.jpg';
import afroImg from '../assets/images/salon_afro_haircare_1790528386730.jpg';

interface SalonPageProps {
  onNavigate: (page: PageId) => void;
}

export const SalonPage: React.FC<SalonPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf9f6]">
      {/* Lydie Coiffure Dark Hero with Diagonal Cut */}
      <section className="bg-[#121110] text-white py-24 sm:py-32 relative overflow-hidden diagonal-cut-bottom">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImg}
            alt="Salon Kevin C"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#121110]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4b996] font-medium block">
            Présentation du salon · Depuis 1997
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white text-balance">
            Salon de coiffure à Lognes
          </h1>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            1 Cours des Lacs, 77185 Lognes — Un espace chaleureux dédié à la beauté de vos cheveux depuis près de 30 ans.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 sm:py-32 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Text adapted exactly as instructed */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block">
                  Notre Histoire & Savoir-faire
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-snug">
                  L'expertise artisanale au service de vos envies
                </h2>
              </div>

              {/* Exact content from prompt */}
              <div className="prose prose-neutral text-base sm:text-lg text-stone-600 leading-relaxed space-y-5 font-light">
                <p>
                  <strong className="font-semibold text-stone-900">Kevin C</strong> est un salon de coiffure situé à <strong className="font-semibold text-stone-900">Lognes (77185)</strong>, dans le département de Seine-et-Marne. Depuis 1997, nous accueillons une clientèle fidèle dans une ambiance chaleureuse et professionnelle.
                </p>
                <p>
                  Notre salon propose des prestations pour <strong className="font-semibold text-stone-900">hommes, femmes et enfants</strong>. Nous sommes particulièrement habitués à travailler les <strong className="font-semibold text-stone-900">cheveux afro et frisés</strong>, ainsi qu’à réaliser des <strong className="font-semibold text-stone-900">coiffures de mariage</strong>.
                </p>
                <p>
                  Que vous veniez pour une simple coupe d’entretien, une coloration, un brushing ou une transformation complète, notre équipe met son savoir-faire à votre service.
                </p>
              </div>

              {/* Pillars / Values (Spacious minimalist cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-stone-100">
                <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                  <Award className="w-5 h-5 text-stone-900 mb-3" />
                  <h4 className="font-serif font-medium text-stone-900 text-base">Proximité & Écoute</h4>
                  <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">Un accueil familial et attentif pour chaque client.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                  <Scissors className="w-5 h-5 text-stone-900 mb-3" />
                  <h4 className="font-serif font-medium text-stone-900 text-base">Toutes Chevelures</h4>
                  <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">Expertise confirmée sur cheveux européens et texturés.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                  <Heart className="w-5 h-5 text-stone-900 mb-3" />
                  <h4 className="font-serif font-medium text-stone-900 text-base">Sans Rendez-Vous</h4>
                  <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">Possibilité de prise en charge selon l'affluence du salon.</p>
                </div>
              </div>

              {/* Direct Booking Call */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-stone-900 text-white font-medium text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#d4b996]" />
                  <span>Prendre RDV : {SALON_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-stone-300 text-stone-900 font-medium text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span>Contact & Plan d'accès</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Composition with Editorial Tilt (De travers) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group tilt-card-right">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white">
                  <img
                    src={afroImg}
                    alt="Salon Kevin C intérieur"
                    className="w-full h-84 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="p-6">
                    <p className="font-serif font-medium text-stone-900 text-lg">
                      Kevin C · 1 Cours des Lacs, 77185 Lognes
                    </p>
                    <p className="text-xs text-stone-400 font-light mt-1">
                      À quelques pas de la station RER A Lognes
                    </p>
                  </div>
                </div>

                {/* Slanted Atelier Stamp */}
                <div className="absolute -top-3 -left-3 bg-stone-900 text-white text-[11px] font-serif italic px-3 py-1.5 rounded-lg shadow-lg transform -rotate-3">
                  Atelier Coiffure depuis 1997
                </div>
              </div>

              {/* Secondary photo with slight opposite tilt */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 hidden sm:block tilt-card-left">
                <img
                  src={cutImg}
                  alt="Coiffure Kevin C"
                  className="w-full h-48 object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Opening Hours & Map Section */}
      <section className="py-24 sm:py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 space-y-6">
              <OpeningHoursBadge />
              <div className="p-7 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                <h4 className="font-serif font-medium text-stone-900 text-lg">
                  Accès & Transports
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Idéalement situé sur le Cours des Lacs à Lognes, à 2 minutes de marche de la gare RER A (station Lognes). Places de stationnement à proximité immédiate.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* CTA conversion */}
      <CallToActionBanner onNavigate={onNavigate} />
    </div>
  );
};
