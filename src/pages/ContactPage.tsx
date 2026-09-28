import React from 'react';
import { Phone, MapPin, Train, Car, Sparkles, Navigation, Clock, Scissors, Coffee, CreditCard } from 'lucide-react';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { OpeningHoursBadge } from '../components/OpeningHoursBadge';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

import heroImg from '../assets/images/hero_salon_kevinc_1790528361809.jpg';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf9f6]">
      {/* Editorial Hero with Diagonal Cut */}
      <section className="bg-[#121110] text-white py-24 sm:py-32 relative overflow-hidden diagonal-cut-bottom">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImg}
            alt="Salon Kevin C à Lognes"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#121110]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4b996] font-medium block">
            Artisan Coiffeur · Lognes (77185)
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white text-balance">
            Contacter le salon Kevin C
          </h1>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Directement par téléphone au <span className="font-semibold text-white">01 60 17 33 10</span> ou sur place au 1 Cours des Lacs à Lognes.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introductory Paragraphs */}
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-stone-900 leading-snug">
              Pour contacter Kevin C ou venir au salon de coiffure, rien de plus simple !
            </h2>
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              Vous pouvez nous joindre directement par téléphone au{' '}
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="font-medium text-stone-950 underline underline-offset-4 hover:text-[#947854] transition-colors"
              >
                01 60 17 33 10
              </a>{' '}
              pour prendre rendez-vous, vous renseigner sur nos prestations ou poser vos questions. Vous pouvez également vous présenter directement au salon situé 1 Cours des Lacs à Lognes, à deux pas de la gare RER A.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Coordonnées Complètes & Accès */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Carte Principale : Téléphone & Adresse Directe */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-xs relative overflow-hidden">
                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 text-[11px] font-serif italic text-stone-500 bg-[#faf9f6] px-3 py-1 rounded border border-stone-200/80 transform rotate-1 select-none">
                  <Scissors className="w-3 h-3 text-[#947854] animate-shear" />
                  <span>Artisan Coiffeur Indépendant</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block mb-2">
                      Coordonnées directes
                    </span>
                    <h3 className="font-serif font-light text-3xl sm:text-4xl text-stone-900">
                      Salon Kevin C
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                        <MapPin className="w-4 h-4 text-[#947854]" />
                        <span>Adresse du salon</span>
                      </div>
                      <p className="text-stone-700 text-sm font-light leading-relaxed">
                        1 Cours des Lacs<br />
                        77185 Lognes, France<br />
                        <span className="text-xs text-stone-400">À 2 minutes à pied de la gare RER A</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                        <Phone className="w-4 h-4 text-[#947854]" />
                        <span>Téléphone direct</span>
                      </div>
                      <a
                        href={`tel:${SALON_INFO.phoneClean}`}
                        className="text-2xl font-serif font-medium text-stone-900 hover:text-[#947854] block tabular-nums transition-colors"
                      >
                        01 60 17 33 10
                      </a>
                      <p className="text-xs text-stone-400 font-light">
                        Appel direct non surtaxé · Prise de RDV rapide
                      </p>
                    </div>
                  </div>

                  {/* Actions directes */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${SALON_INFO.phoneClean}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <Phone className="w-4 h-4 text-[#d4b996]" />
                      <span>Appeler le 01 60 17 33 10</span>
                    </a>

                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=1+Cours+des+Lacs+77185+Lognes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 font-medium text-xs uppercase tracking-wider transition-colors bg-white"
                    >
                      <Navigation className="w-3.5 h-3.5 text-stone-600" />
                      <span>Itinéraire Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Carte Informations Pratiques & Modalités d'accueil */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block mb-1">
                    Modalités d'accueil
                  </span>
                  <h4 className="font-serif font-light text-2xl text-stone-900">
                    Votre visite au salon
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-stone-200 flex items-center justify-center text-stone-800">
                      <Sparkles className="w-5 h-5 text-[#947854]" />
                    </div>
                    <h5 className="font-medium text-stone-900 text-sm">Avec ou sans RDV</h5>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      Réservation par téléphone conseillée. Accueil sans RDV selon disponibilités.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-stone-200 flex items-center justify-center text-stone-800">
                      <Coffee className="w-5 h-5 text-[#947854]" />
                    </div>
                    <h5 className="font-medium text-stone-900 text-sm">Diagnostic & Écoute</h5>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      Conseil personnalisé et diagnostic de vos cheveux offert à chaque venue.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-stone-200 flex items-center justify-center text-stone-800">
                      <CreditCard className="w-5 h-5 text-[#947854]" />
                    </div>
                    <h5 className="font-medium text-stone-900 text-sm">Paiements acceptés</h5>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      Cartes bancaires (CB, Visa, Mastercard) et espèces acceptées.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Horaires & Transports */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Horaires Badge interactif */}
              <OpeningHoursBadge />

              {/* Accès, Transports & Stationnement */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block mb-1">
                    Venir à Lognes
                  </span>
                  <h4 className="font-serif font-light text-2xl text-stone-900">
                    Accès & Transports
                  </h4>
                </div>

                <div className="space-y-4 text-sm font-light text-stone-600">
                  <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                    <Train className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-900">RER A – Gare de Lognes</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Le salon est situé à seulement 2 minutes à pied de la sortie Cours des Lacs / Place des Colliberts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                    <Car className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-900">En Voiture & Stationnement</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Accès rapide depuis l'A4 et la Francilienne (N104). Parkings publics et stationnements gratuits à proximité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-900">Accueil du Mardi au Samedi</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        En continu toute la semaine dès 9h30. Fermé le dimanche et le lundi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Google Maps Centrée sur 1 Cours des Lacs, Lognes */}
          <div className="mt-20">
            <div className="mb-8 space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#947854] font-medium block">
                Localisation en temps réel
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-stone-900">
                Plan d'accès interactif à Lognes
              </h3>
            </div>
            <GoogleMapEmbed />
          </div>

        </div>
      </section>

      {/* CTA conversion */}
      <CallToActionBanner onNavigate={onNavigate} />
    </div>
  );
};
