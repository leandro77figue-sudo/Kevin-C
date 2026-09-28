import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings2 } from 'lucide-react';

interface CookieBannerProps {
  onOpenPreferences: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPreferences }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('kevinc_cookie_consent');
      if (!consent) {
        // Small delay so it animates smoothly into view
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage issues
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        'kevinc_cookie_consent',
        JSON.stringify({ necessary: true, analytics: true, date: new Date().toISOString() })
      );
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleRefuseAll = () => {
    try {
      localStorage.setItem(
        'kevinc_cookie_consent',
        JSON.stringify({ necessary: true, analytics: false, date: new Date().toISOString() })
      );
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setIsVisible(false);
    onOpenPreferences();
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Bandeau de consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#191817] text-white p-5 rounded-2xl border border-stone-700/80 shadow-2xl backdrop-blur-md animate-fade-in"
    >
      <div className="flex items-start gap-3.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-[#d4b996]">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 pr-2">
          <h4 className="font-serif text-base font-light text-white tracking-wide">
            Respect de votre vie privée
          </h4>
          <p className="text-xs text-stone-300 font-light leading-relaxed mt-1">
            Ce site utilise des cookies techniques indispensables à son fonctionnement et respecte la réglementation RGPD. Vous pouvez choisir vos préférences à tout moment.
          </p>
        </div>
        <button
          onClick={handleRefuseAll}
          className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Fermer le bandeau"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800 text-xs">
        <button
          onClick={handleAcceptAll}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-medium transition-colors cursor-pointer"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Accepter</span>
        </button>

        <button
          onClick={handleRefuseAll}
          className="flex-1 inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-light transition-colors cursor-pointer"
        >
          <span>Refuser</span>
        </button>

        <button
          onClick={handleCustomize}
          className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white transition-colors cursor-pointer"
          title="Personnaliser les cookies"
        >
          <Settings2 className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Personnaliser</span>
        </button>
      </div>
    </div>
  );
};
