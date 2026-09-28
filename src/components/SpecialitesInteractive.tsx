import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  ArrowRight, 
  Phone, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

import cutStylingImg from '../assets/images/salon_cut_styling_1790528375042.jpg';
import afroHaircareImg from '../assets/images/salon_afro_haircare_1790528386730.jpg';
import weddingColorImg from '../assets/images/salon_wedding_color_1790528397924.jpg';
import walkinImg from '../assets/images/salon_walkin_welcome_1790533567565.jpg';

interface SpecialitesInteractiveProps {
  onNavigate: (page: PageId) => void;
}

interface SpecialtyItem {
  id: string;
  title: string;
  kicker: string;
  subtitle: string;
  image: string;
  tiltClass: string;
  priceHint: string;
  tags: string[];
  highlights: string[];
  ctaText: string;
  stamp?: string;
}

export const SpecialitesInteractive: React.FC<SpecialitesInteractiveProps> = ({ onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('afro');

  const specialties: SpecialtyItem[] = [
    {
      id: 'mixte',
      title: 'Homme, Femme & Enfant',
      kicker: 'Coiffure Mixte & Famille',
      subtitle: 'L’art du trait précis, du dégradé soigné et de la mise en valeur de votre morphologie.',
      image: cutStylingImg,
      tiltClass: 'tilt-card-left',
      priceHint: 'Dès 15 € (enfant) · 18 € (homme) · 28 € (femme)',
      tags: ['Dégradé ciseaux', 'Coupe enfant douce', 'Brushing structuré'],
      highlights: [
        'Diagnostic attentif de la texture et de la pousse',
        'Contour net et finitions soignées',
        'Accueil chaleureux pour toute la famille',
      ],
      ctaText: 'Voir les tarifs coupes',
      stamp: 'Indispensable',
    },
    {
      id: 'afro',
      title: 'Coiffure Africaine & Textures',
      kicker: 'Spécialité Signature',
      subtitle: 'Savoir-faire pointu sur cheveux crépus, frisés et bouclés (types 3A à 4C).',
      image: afroHaircareImg,
      tiltClass: 'tilt-card-right',
      priceHint: 'Soin afro dès 15 € · Brushing dès 30 €',
      tags: ['Boucles 3A-4C', 'Nutrition intense', 'Zéro casse'],
      highlights: [
        'Zéro casse : respect absolu de la fibre capillaire',
        'Bains d’huiles et masques gainants haute nutrition',
        'Tressage précis, tissage soigné et lissage soyeux',
      ],
      ctaText: 'Découvrir nos soins afro',
      stamp: 'Expertise 30 ans',
    },
    {
      id: 'mariage',
      title: 'Mariage & Événements',
      kicker: 'Cérémonie & Fête',
      subtitle: 'Chignons élaborés, attaches romantiques et coiffages de cérémonie sur-mesure.',
      image: weddingColorImg,
      tiltClass: 'tilt-card-left',
      priceHint: 'Sur devis personnalisé après échange',
      tags: ['Chignons bohèmes', 'Ondulations wavy', 'Essai sur-mesure'],
      highlights: [
        'Harmonie parfaite avec votre tenue et accessoires',
        'Séance d’essai préalable pour ajuster chaque détail',
        'Tenue garantie résistante à toute la journée de fête',
      ],
      ctaText: 'Demander un devis mariage',
      stamp: 'Sur-mesure',
    },
    {
      id: 'sans-rdv',
      title: 'Sans Rendez-Vous',
      kicker: 'Disponibilité Rapide',
      subtitle: 'Flexibilité au quotidien : passez nous voir selon l’affluence en salon.',
      image: walkinImg,
      tiltClass: 'tilt-card-right',
      priceHint: 'Selon disponibilité en salon',
      tags: ['Mardi au samedi dès 9h30', 'Gare RER A', 'Café d’accueil'],
      highlights: [
        'Prise en charge spontanée sans rendez-vous',
        'Conseils personnalisés dès votre arrivée',
        'Cadre convivial au 1 Cours des Lacs',
      ],
      ctaText: 'Venir au salon',
      stamp: 'Flexibilité',
    },
  ];

  const activeData = specialties.find((s) => s.id === selectedSpecialty) || specialties[1];

  return (
    <section className="py-24 sm:py-32 bg-[#faf9f6] border-b border-stone-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimalist Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-200/70">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#947854]">
              <Scissors className="w-3.5 h-3.5 text-[#947854] animate-shear" />
              <span>Savoir-Faire & Spécialités</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 tracking-tight">
              L'Art du Cheveu à Lognes
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-sm sm:text-base text-stone-500 font-light leading-relaxed">
              Une gestuelle soignée pour chaque nature capillaire. Cliquez sur une spécialité pour explorer notre approche artisanale.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid - "Un peu de travers mais optimisé" (Editorial Lookbook Tilt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {specialties.map((item) => {
            const isSelected = item.id === selectedSpecialty;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedSpecialty(item.id)}
                className={`group relative bg-white rounded-2xl border cursor-pointer select-none transition-all duration-300 p-6 flex flex-col justify-between ${
                  isSelected
                    ? 'border-stone-900 shadow-xl ring-1 ring-stone-900 -translate-y-1.5'
                    : 'border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-400'
                } ${item.tiltClass}`}
              >
                {/* Photo Header */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-5 bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Subtle Slanted Stamp on Card */}
                  {item.stamp && (
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-stone-900 text-[10px] font-serif italic px-2 py-0.5 rounded shadow-xs transform -rotate-2 border border-stone-200">
                      {item.stamp}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-stone-200 font-medium block">
                      {item.kicker}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-1.5 mb-6">
                  <h3 className="font-serif font-medium text-lg text-stone-900 group-hover:text-stone-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Card Footer: Quiet Price & Toggle */}
                <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-500">
                    {item.priceHint.split('·')[0]}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 group-hover:bg-stone-200'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Active indicator dot */}
                {isSelected && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-stone-900 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Specialty Detail Panel (Minimalist Editorial Drawer - Spacious) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left detail description */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#947854] font-medium block">
                  Détail de la prestation · {activeData.kicker}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-light text-stone-900">
                  {activeData.title}
                </h3>
                <p className="text-base text-stone-600 font-light leading-relaxed">
                  {activeData.subtitle}
                </p>
              </div>

              {/* Minimalist highlights list */}
              <div className="space-y-3.5 pt-1">
                {activeData.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm text-stone-700">
                    <div className="w-5 h-5 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-stone-900" />
                    </div>
                    <span className="font-light">{point}</span>
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center gap-4">
                <div className="bg-[#faf9f6] px-5 py-3 rounded-xl border border-stone-200/80">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">
                    Tarif indicatif
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-stone-900">
                    {activeData.priceHint}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('tarifs')}
                  className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{activeData.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="px-5 py-3.5 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-900 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#947854]" />
                  <span>{SALON_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right detail visual with chic slant overlay */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-md tilt-card-right">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-[#d4b996] font-medium">
                      Kevin C Coiffure
                    </p>
                    <p className="font-serif text-lg font-medium">
                      1 Cours des Lacs, 77185 Lognes
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
