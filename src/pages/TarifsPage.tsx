import React, { useState } from 'react';
import { Phone, Sparkles, Scissors, Wind, Palette, Info, Search } from 'lucide-react';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { TARIFS_DATA, SALON_INFO } from '../data/salonData';
import { PageId, TarifItem } from '../types';

import heroImg from '../assets/images/hero_salon_kevinc_1790528361809.jpg';

interface TarifsPageProps {
  onNavigate: (page: PageId) => void;
}

type CategoryKey = 'all' | 'soins' | 'coupes' | 'brushing' | 'colorations';

export const TarifsPage: React.FC<TarifsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryKey; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Toutes les prestations', icon: null },
    { id: 'soins', label: 'Soins', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'coupes', label: 'Coupes', icon: <Scissors className="w-3.5 h-3.5" /> },
    { id: 'brushing', label: 'Brushing', icon: <Wind className="w-3.5 h-3.5" /> },
    { id: 'colorations', label: 'Colorations & Techniques', icon: <Palette className="w-3.5 h-3.5" /> },
  ];

  const soinsItems = TARIFS_DATA.filter((i) => i.category === 'soins');
  const coupesItems = TARIFS_DATA.filter((i) => i.category === 'coupes');
  const brushingItems = TARIFS_DATA.filter((i) => i.category === 'brushing');
  const colorationsItems = TARIFS_DATA.filter((i) => i.category === 'colorations');

  const renderTableSection = (title: string, subtitle: string, items: TarifItem[]) => {
    const displayedItems = searchQuery
      ? items.filter((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()) || (i.description && i.description.toLowerCase().includes(searchQuery.toLowerCase())))
      : items;

    if (displayedItems.length === 0) return null;

    return (
      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden mb-12">
        <div className="bg-[#faf9f6] px-6 sm:px-8 py-6 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-light text-2xl sm:text-3xl text-stone-900">{title}</h3>
            <p className="text-xs sm:text-sm text-stone-500 font-light mt-1">{subtitle}</p>
          </div>
          <span className="text-[11px] font-medium text-stone-400 uppercase tracking-widest">
            {displayedItems.length} prestation{displayedItems.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="divide-y divide-stone-100">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:px-8 hover:bg-[#faf8f5] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-5"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-3">
                  <h4 className="font-serif font-medium text-stone-900 text-lg sm:text-xl">{item.name}</h4>
                  {item.isPopular && (
                    <span className="text-[10px] font-serif italic text-stone-600 bg-stone-100 border border-stone-300 px-2 py-0.5 rounded transform -rotate-1">
                      Populaire
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">{item.description}</p>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0">
                <span className="text-lg font-semibold text-stone-900 tabular-nums">
                  {item.price}
                </span>
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider text-stone-900 hover:text-white border border-stone-900 hover:bg-stone-900 transition-colors"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#faf9f6]">
      {/* Lydie Coiffure Dark Hero with Diagonal Cut */}
      <section className="bg-[#121110] text-white py-24 sm:py-32 relative overflow-hidden diagonal-cut-bottom">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImg}
            alt="Salon Kevin C tarifs"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#121110]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4b996] font-medium block">
            Grille Tarifaire Indicative · Lognes
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white text-balance">
            Nos Tarifs
          </h1>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Des tarifs justes, transparents et adaptés pour hommes, femmes et enfants à proximité de la gare de Lognes.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar & Search (Minimalist Segmented Control) */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 mb-12 pb-7 border-b border-stone-200/80">
            {/* Category Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-stone-950 shadow-xs font-semibold'
                        : 'text-stone-600 hover:text-stone-950'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher une prestation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>

          {/* Tables rendered by category */}
          {(selectedCategory === 'all' || selectedCategory === 'soins') && (
            renderTableSection(
              'Soins Capillaires',
              'Shampooing, nutrition intense et soins spécifiques cheveux afro',
              soinsItems
            )
          )}

          {(selectedCategory === 'all' || selectedCategory === 'coupes') && (
            renderTableSection(
              'Coupes & Coiffage',
              'Homme, femme (court, mi-long/long) et enfant',
              coupesItems
            )
          )}

          {(selectedCategory === 'all' || selectedCategory === 'brushing') && (
            renderTableSection(
              'Brushing & Mise en Forme',
              'Cheveux courts, mi-longs / frisés, longs / afro',
              brushingItems
            )
          )}

          {(selectedCategory === 'all' || selectedCategory === 'colorations') && (
            renderTableSection(
              'Colorations & Techniques',
              'Coloration racines, complète, mèches, balayage et lissage sur devis',
              colorationsItems
            )
          )}

          {/* Mandatory Prompt Note: Indicative Prices */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs relative">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 text-stone-900">
                <Info className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                <p className="font-semibold text-stone-900 mb-1">
                  Note d'information sur nos tarifs :
                </p>
                <p>
                  Les tarifs sont indicatifs et peuvent varier selon la longueur, la masse et la technicité de la prestation requise. N’hésitez pas à demander un <strong>devis personnalisé</strong> par téléphone au <a href={`tel:${SALON_INFO.phoneClean}`} className="font-bold text-stone-900 underline">{SALON_INFO.phone}</a> ou directement sur place au salon.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Direct Booking Card */}
          <div className="mt-8 p-8 rounded-3xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4b996] font-semibold mb-1">
                Une question sur une prestation ?
              </p>
              <h3 className="font-serif text-2xl font-bold">
                Appelez notre équipe au salon Kevin C
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light mt-1">
                Nous vous orientons et vous donnons une estimation précise selon votre chevelure.
              </p>
            </div>

            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-stone-950 font-semibold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors shrink-0 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-stone-900" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* CTA conversion */}
      <CallToActionBanner onNavigate={onNavigate} />
    </div>
  );
};
