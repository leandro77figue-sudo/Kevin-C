import React, { useState } from 'react';
import { Scissors, Clock, Phone, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

interface HairDiagnosticProps {
  onNavigate: (page: PageId) => void;
}

interface ProfileData {
  id: string;
  name: string;
  badge: string;
  icon: string;
  tiltClass: string;
  textureDescription: string;
  recommendedCut: string;
  recommendedCare: string;
  duration: string;
  estimatedPrice: string;
  keyAdvice: string;
  actionTarifCategory: 'soins' | 'coupes' | 'brushing' | 'colorations';
}

export const HairDiagnosticInteractive: React.FC<HairDiagnosticProps> = ({ onNavigate }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>('afro');

  const profiles: ProfileData[] = [
    {
      id: 'afro',
      name: 'Cheveux Crépus & Frisés (4A - 4C)',
      badge: 'Spécialité Cheveux Afro',
      icon: '🌿',
      tiltClass: 'tilt-card-left',
      textureDescription: 'Boucles serrées nécessitant une hydratation maximale sans casser la structure naturelle du cheveu.',
      recommendedCut: 'Coupe sur cheveux secs ou étirés, élimination des pointes fourchues sans rétrécissement visible.',
      recommendedCare: 'Soin spécifique cheveux afro à base d’agents relipidants + bain de vapeur.',
      duration: '45 à 90 min',
      estimatedPrice: 'Dès 15 € (soin) · 30 € (brushing/lissage)',
      keyAdvice: 'Privilégier un espacement doux des shampooings et sceller l’hydratation avec des beurres végétaux.',
      actionTarifCategory: 'soins',
    },
    {
      id: 'boucles',
      name: 'Cheveux Bouclés (2C - 3C)',
      badge: 'Définition & Ressort',
      icon: '✨',
      tiltClass: 'tilt-card-right',
      textureDescription: 'Ondulations ou boucles en spirale qui ont tendance à frisoter sous l’effet de l’humidité.',
      recommendedCut: 'Coupe dégradée pour répartir les volumes harmonieusement et alléger la masse.',
      recommendedCare: 'Soin hydratant profond avec séchage au diffuseur pour fixer le dessin de la boucle.',
      duration: '35 à 60 min',
      estimatedPrice: 'Dès 12 € (soin) · 25 € (brushing boucles)',
      keyAdvice: 'Éviter les brossages à sec pour préserver la définition de vos ondulations naturelles.',
      actionTarifCategory: 'soins',
    },
    {
      id: 'lisses',
      name: 'Cheveux Lisses & Fins (1A - 2B)',
      badge: 'Volume & Brillance',
      icon: '✂️',
      tiltClass: 'tilt-card-left',
      textureDescription: 'Fibres droites ou légèrement souples en recherche de tenue, de texture et de reflets.',
      recommendedCut: 'Coupe structurée, effilage maîtrisé ou carré précis pour apporter de la matière.',
      recommendedCare: 'Shampooing purifiant et soin léger volumateur non alourdissant.',
      duration: '30 à 45 min',
      estimatedPrice: 'Dès 28 € (femme court) · 18 € (homme)',
      keyAdvice: 'Rincer à l’eau tiède et appliquer un spray texturisant sur racines humides.',
      actionTarifCategory: 'coupes',
    },
    {
      id: 'colores',
      name: 'Cheveux Colorés & Méchés',
      badge: 'Protection Couleur',
      icon: '🎨',
      tiltClass: 'tilt-card-right',
      textureDescription: 'Sensibilisés par les oxydations, nécessitant fixation des pigments et brillance intense.',
      recommendedCut: 'Pointes régulières pour maintenir une ligne dense et lumineuse.',
      recommendedCare: 'Protocole scellant anti-affadissement avec gloss ou patine ravivante.',
      duration: '60 à 120 min',
      estimatedPrice: 'Dès 35 € (racines) · 55 € (complète)',
      keyAdvice: 'Utiliser un protecteur thermique avant chaque séchage ou brushing.',
      actionTarifCategory: 'colorations',
    },
  ];

  const current = profiles.find((p) => p.id === selectedProfileId) || profiles[0];

  return (
    <section className="py-24 sm:py-32 bg-[#faf9f6] border-b border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimalist */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#947854]">
            <Scissors className="w-3.5 h-3.5 text-[#947854] animate-shear" />
            <span>Guide Personnalisé du Cheveu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 tracking-tight">
            Quelle est la Nature de Vos Cheveux ?
          </h2>
          <p className="text-base text-stone-500 font-light leading-relaxed">
            Sélectionnez votre texture pour découvrir la coupe et le rituel préconisés par nos artisans coiffeurs à Lognes.
          </p>
        </div>

        {/* 4 Interactive Selector Cards - "Un peu de travers mais optimisé" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14">
          {profiles.map((p) => {
            const isSelected = p.id === selectedProfileId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedProfileId(p.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${p.tiltClass} ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xl ring-1 ring-stone-900 -translate-y-1.5'
                    : 'bg-white text-stone-800 border-stone-200/80 hover:border-stone-400 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{p.icon}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#d4b996]" />
                    )}
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-widest block mb-1.5 ${
                    isSelected ? 'text-[#d4b996]' : 'text-[#947854]'
                  }`}>
                    {p.badge}
                  </span>
                  <h3 className="font-serif font-medium text-base leading-snug">
                    {p.name.split('(')[0]}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-stone-300 font-light' : 'text-stone-500 font-light'}>
                    Voir conseil
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnosis Result Card - Spacious & Clean */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-7 mb-8">
            <div className="space-y-1">
              <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#947854] block">
                Conseil personnalisé Kevin C
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900">
                {current.name}
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-light text-stone-600 bg-stone-50 px-3.5 py-1.5 rounded-lg border border-stone-200 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                <span>Durée : {current.duration}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 text-sm">
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wide mb-1.5">
                  <Scissors className="w-3.5 h-3.5 text-stone-900" />
                  <span>Coupe Préconisée</span>
                </div>
                <p className="text-stone-600 leading-relaxed font-light text-xs sm:text-sm">
                  {current.recommendedCut}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wide mb-1.5">
                  <Check className="w-3.5 h-3.5 text-stone-900" />
                  <span>Soin Spécifique en Salon</span>
                </div>
                <p className="text-stone-600 leading-relaxed font-light text-xs sm:text-sm">
                  {current.recommendedCare}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wide mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-900" />
                  <span>Conseil d'Artisan Coiffeur</span>
                </div>
                <p className="text-stone-600 leading-relaxed font-light text-xs sm:text-sm">
                  {current.keyAdvice}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf9f6] border border-stone-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-medium tracking-wider text-stone-400 block">Tarif estimatif</span>
                  <span className="text-sm sm:text-base font-semibold text-stone-900">{current.estimatedPrice}</span>
                </div>
                <span className="text-xs text-stone-400 font-light">Selon longueur</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-xs text-stone-400 font-light">
              Diagnostic sur-mesure lors de votre venue au <strong className="font-medium text-stone-700">1 Cours des Lacs, Lognes</strong>.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate('tarifs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                Grille des Tarifs
              </button>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium uppercase tracking-wider transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4b996]" />
                <span>Prendre RDV</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
