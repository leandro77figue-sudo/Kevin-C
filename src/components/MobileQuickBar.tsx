import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from '../types';

interface MobileQuickBarProps {
  onNavigate: (page: PageId) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onNavigate }) => {
  return (
    <aside
      aria-label="Barre d'action rapide mobile"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 sm:hidden shadow-lg flex items-center justify-between gap-2"
    >
      <a
        href={`tel:${SALON_INFO.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-900 active:bg-neutral-800 text-white font-semibold text-xs shadow-xs transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#c8a97e] shrink-0" />
        <span className="tabular-nums">Appeler : {SALON_INFO.phone}</span>
      </a>

      <button
        onClick={() => {
          onNavigate('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="py-2.5 px-3.5 rounded-xl border border-stone-300 active:bg-stone-100 text-neutral-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5 text-stone-500" />
        <span>Accès & Infos</span>
      </button>
    </aside>
  );
};
