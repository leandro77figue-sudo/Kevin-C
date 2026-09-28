import React, { useState, useRef, useCallback } from 'react';
import { Scissors, Check, ArrowRight, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

import beforeImg from '../assets/images/hair_transformation_before_1790537676904.jpg';
import afterImg from '../assets/images/hair_transformation_after_1790537696318.jpg';

interface LookbookTransformationProps {
  onNavigate: (page: PageId) => void;
}

export const LookbookTransformation: React.FC<LookbookTransformationProps> = ({ onNavigate }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-stone-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimalist */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#947854]">
            <Scissors className="w-3.5 h-3.5 text-[#947854] animate-shear" />
            <span>Métamorphose & Soin Ciblé</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 tracking-tight">
            L'Excellence du Cheveu en Action
          </h2>
          <p className="text-base text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Faites glisser le curseur pour apprécier la transformation : réhydratation en profondeur, définition du cheveu texturé et coupe structurée.
          </p>
        </div>

        {/* Interactive Comparison Card - Spacious & Clean */}
        <div className="bg-[#faf9f6] rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden max-w-5xl mx-auto relative">
          
          {/* Subtle slanted stamp (de travers mais discret) */}
          <div className="absolute top-4 right-4 z-20 hidden sm:block bg-white text-stone-900 text-xs font-serif italic px-3 py-1 rounded shadow-xs border border-stone-200/80 transform rotate-2">
            Résultat Réel en Salon
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Interactive Image Split Slider (Left Column) */}
            <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-center">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-stone-300 shadow-inner group"
                role="slider"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(5, prev - 5));
                  if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(95, prev + 5));
                }}
              >
                {/* AFTER IMAGE (Underneath, full width) */}
                <img
                  src={afterImg}
                  alt="Cheveux hydratés et soignés après passage chez Kevin C"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />

                {/* BEFORE IMAGE (Clipped on top according to slider percentage) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={beforeImg}
                    alt="Cheveux avant soin chez Kevin C"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
                </div>

                {/* Divider Line & Handle (Hair cutting guide line) */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg border border-stone-300 flex items-center justify-center text-stone-800">
                    <Scissors className="w-4 h-4 text-stone-900 animate-shear" />
                  </div>
                </div>

                {/* Overlaid markers */}
                <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
                  <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-xs">
                    Avant · Fibre déshydratée
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
                  <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-xs">
                    Après · Soin & Brushing
                  </span>
                </div>
              </div>

              {/* Slider Quick Controls */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-stone-500 px-2">
                <button
                  type="button"
                  onClick={() => setSliderPosition(15)}
                  className="hover:text-stone-900 font-medium cursor-pointer py-1 px-2.5 rounded hover:bg-stone-200/50 transition-colors"
                >
                  Vue Avant
                </button>
                <span className="text-[11px] text-stone-400">
                  Glissez pour comparer
                </span>
                <button
                  type="button"
                  onClick={() => setSliderPosition(85)}
                  className="hover:text-stone-900 font-medium cursor-pointer py-1 px-2.5 rounded hover:bg-stone-200/50 transition-colors"
                >
                  Vue Après
                </button>
              </div>
            </div>

            {/* Description & Technical Breakdown (Right Column) */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-white border-t lg:border-t-0 lg:border-l border-stone-200/80">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#947854] block">
                    Étude de cas · Salon Kevin C
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900">
                    Protocole Nutrition & Structuration
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    Sur ce cheveu texturé sensibilisé, notre équipe a combiné un bain nutritif végétal et une coupe sculptée aux ciseaux sans perte de longueur superflue.
                  </p>
                </div>

                {/* Minimalist Authentic Benefit Cards (No fake percentages) */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-[#faf9f6] border border-stone-200/80">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-stone-400 block">Soin</span>
                    <span className="font-serif text-lg font-medium text-stone-900">Bain Relipidant</span>
                    <p className="text-xs text-stone-500 mt-0.5 font-light">Nutrition intense</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#faf9f6] border border-stone-200/80">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-stone-400 block">Résultat</span>
                    <span className="font-serif text-lg font-medium text-stone-900">Fibre Souple</span>
                    <p className="text-xs text-stone-500 mt-0.5 font-light">Boucle gainée & soyeuse</p>
                  </div>
                </div>

                {/* Steps included */}
                <div className="space-y-2.5 pt-1 text-xs text-stone-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-stone-900 shrink-0" />
                    <span>Diagnostic préalable de texture et porosité</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-stone-900 shrink-0" />
                    <span>Soin spécifique cheveux afro avec massage crânien</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-stone-900 shrink-0" />
                    <span>Coupe d'égalisation et conseils de routine sur-mesure</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4b996]" />
                  <span>Prendre RDV</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('tarifs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-800 font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Nos Tarifs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
