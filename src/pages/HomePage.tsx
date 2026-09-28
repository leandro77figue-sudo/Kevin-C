import React from 'react';
import { Phone, ArrowRight, CheckCircle2, Scissors } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { OpeningHoursBadge } from '../components/OpeningHoursBadge';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { SpecialitesInteractive } from '../components/SpecialitesInteractive';
import { LookbookTransformation } from '../components/LookbookTransformation';
import { HairDiagnosticInteractive } from '../components/HairDiagnosticInteractive';
import { SALON_INFO, TARIFS_DATA } from '../data/salonData';
import { PageId } from '../types';

import cutStylingImg from '../assets/images/salon_cut_styling_1790528375042.jpg';
import afroHaircareImg from '../assets/images/salon_afro_haircare_1790528386730.jpg';
import weddingColorImg from '../assets/images/salon_wedding_color_1790528397924.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const previewTarifs = TARIFS_DATA.filter((t) => t.isPopular).slice(0, 6);

  return (
    <div className="bg-[#faf9f6]">
      {/* 1. Hero Section (Lydie Coiffure Dark Hero Style with Razor Parting Angle) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Bloc Principal : Découvrez le salon Kevin C (Texte exact du prompt) */}
      <section className="py-24 sm:py-32 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Story prose exact from prompt */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium">
                  Bienvenue à Lognes (77185)
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 leading-[1.15]">
                  Découvrez le salon Kevin C
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                <p>
                  Retrouvez notre équipe de professionnels de la coiffure au cœur de Lognes, à proximité de la gare RER A. Situé au <strong className="font-semibold text-stone-900">1 Cours des Lacs</strong>, notre salon de coiffure vous accueille dans un cadre convivial et chaleureux depuis près de 30 ans.
                </p>
                <p>
                  Fort de son expérience, <strong className="font-semibold text-stone-900">Kevin C Lognes</strong> prend en main votre chevelure en respectant vos envies et vos exigences. Dynamique ou classique, moderne ou traditionnel, quel que soit le style désiré, nous réalisons votre coupe pour un résultat soigné et personnalisé.
                </p>
                <p className="text-stone-800 font-normal">
                  Conscient que votre chevelure vous est importante, l’équipe de Kevin C fera son maximum pour que vous repartiez avec le sourire et une coiffure qui vous ressemble.
                </p>
              </div>

              {/* Minimalist Trust Points (Spacious, unboxed) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-700">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#947854] shrink-0" />
                  <span>Près de 30 ans d’expérience à Lognes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#947854] shrink-0" />
                  <span>Maîtrise des cheveux européens & afro</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#947854] shrink-0" />
                  <span>Sans rendez-vous selon disponibilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#947854] shrink-0" />
                  <span>À 2 min à pied de la gare RER A</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('salon')}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-stone-900 text-white font-medium text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
                >
                  <span>En savoir plus sur le salon</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-stone-300 text-stone-900 font-medium text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#947854]" />
                  <span>{SALON_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase - "Un peu de travers mais optimisé" */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative group tilt-card-left max-w-sm sm:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                  <img
                    src={cutStylingImg}
                    alt="Coiffure et coupe de précision chez Kevin C Lognes"
                    referrerPolicy="no-referrer"
                    className="w-full h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4b996] font-semibold block">
                      Artisan Coiffeur
                    </span>
                    <p className="font-serif text-xl font-medium leading-snug">
                      Écoute, minutie et savoir-faire pour toutes chevelures
                    </p>
                    <p className="text-xs text-stone-300 font-light">
                      1 Cours des Lacs, 77185 Lognes
                    </p>
                  </div>
                </div>

                {/* Slanted Atelier Seal (de travers mais discret et propre) */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-lg hidden sm:flex items-center gap-3 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center text-white font-medium font-serif text-base">
                    30
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-stone-400">Fidélité</p>
                    <p className="text-xs font-semibold text-stone-900">À Lognes depuis 1997</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Spécialités Mises en Avant - Format Interactif avec Cartes Tilted */}
      <SpecialitesInteractive onNavigate={onNavigate} />

      {/* 4. Effet Visuel Spécialisé Coiffure : Avant / Après Cheveux & Soin */}
      <LookbookTransformation onNavigate={onNavigate} />

      {/* 5. Effet Visuel Interactif : Diagnostic Morpho & Texture Cheveux */}
      <HairDiagnosticInteractive onNavigate={onNavigate} />

      {/* 6. Showcase Galerie Visuelle avec Savoir-Faire (Asymmetrical Slanted Grid) */}
      <section className="py-24 sm:py-32 bg-[#121110] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4b996] font-medium block">
                Galerie & Ambiance
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
                Le Geste Juste au Cœur de Lognes
              </h2>
            </div>
            <p className="text-stone-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
              Des produits professionnels et une attention minutieuse portée à chaque texture capillaire.
            </p>
          </div>

          {/* 3 Offset / Slanted Lookbook Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden border border-stone-800 group relative shadow-2xl tilt-card-left">
              <img
                src={cutStylingImg}
                alt="Coupe homme et femme salon Kevin C"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-medium text-white">Coupes & Brushing</h4>
                  <p className="text-xs text-stone-300 font-light">Précision des ciseaux et finitions nettes</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 group relative shadow-2xl md:translate-y-5">
              <img
                src={afroHaircareImg}
                alt="Soin spécifique cheveux afro et texturés"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-medium text-white">Expertise Cheveux Afro</h4>
                  <p className="text-xs text-stone-300 font-light">Hydratation profonde et soins gainants</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 group relative shadow-2xl tilt-card-right">
              <img
                src={weddingColorImg}
                alt="Colorations et coiffure événementielle"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-medium text-white">Mariage & Nuances</h4>
                  <p className="text-xs text-stone-300 font-light">Chignons travaillés et reflets sur-mesure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Aperçu des Tarifs (Minimalist Table Cards - Spacious) */}
      <section className="py-24 sm:py-32 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block">
                Transparence & clarté
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900">
                Nos Tarifs Principaux
              </h2>
              <p className="text-stone-500 text-sm sm:text-base font-light">
                Tarifs clairs et accessibles pour un salon de quartier chaleureux à Lognes.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('tarifs')}
              className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Consulter l'ensemble de la grille</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewTarifs.map((item) => (
              <div
                key={item.id}
                className="bg-[#faf9f6] rounded-2xl p-7 border border-stone-200/80 hover:border-stone-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif font-medium text-stone-900 text-lg">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-stone-900 whitespace-nowrap tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-stone-500 font-light mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                    {item.category === 'soins' && 'Soin capillaire'}
                    {item.category === 'coupes' && 'Coupe & Coiffage'}
                    {item.category === 'brushing' && 'Brushing'}
                    {item.category === 'colorations' && 'Technique'}
                  </span>
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="text-xs font-semibold text-stone-900 hover:underline"
                  >
                    Réserver &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Localisation & Horaires (Google Maps + Horaires - Spacious) */}
      <section className="py-24 sm:py-32 bg-[#faf9f6] border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block">
              Nous Situer
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900">
              Au Cœur de Lognes, Tout Près de la Gare
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light">
              1 Cours des Lacs, 77185 Lognes — À 2 minutes à pied de la gare RER A Lognes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-8">
              <GoogleMapEmbed />
            </div>
            <div className="lg:col-span-4">
              <OpeningHoursBadge />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Conversion Récurrente */}
      <CallToActionBanner onNavigate={onNavigate} />
    </div>
  );
};
