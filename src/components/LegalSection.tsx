import React, { useState, useEffect } from 'react';
import { Building2, Shield, Lock, Scale, Cookie, Check, X, ChevronDown } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export type LegalTabId = 'infos' | 'mentions' | 'confidentialite' | 'cgv' | 'cookies';

interface LegalSectionProps {
  activeTab?: LegalTabId | null;
  onTabChange?: (tab: LegalTabId | null) => void;
}

export const LegalSection: React.FC<LegalSectionProps> = ({
  activeTab: externalActiveTab,
  onTabChange,
}) => {
  // Par défaut, fermé (null) : quand on clique dessus ça les affiche, mais pas autrement
  const [internalActiveTab, setInternalActiveTab] = useState<LegalTabId | null>(null);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  // Sync external tab if provided
  useEffect(() => {
    if (externalActiveTab !== undefined) {
      setInternalActiveTab(externalActiveTab);
    }
  }, [externalActiveTab]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('kevinc_cookie_consent');
      if (stored) {
        const parsed = JSON.parse(stored);
        setAnalyticsConsent(Boolean(parsed.analytics));
      }
    } catch {
      // Ignore
    }
  }, []);

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleToggleTab = (tabId: LegalTabId) => {
    const nextTab = activeTab === tabId ? null : tabId;
    if (onTabChange) {
      onTabChange(nextTab);
    } else {
      setInternalActiveTab(nextTab);
    }

    if (nextTab !== null) {
      setTimeout(() => {
        document.getElementById('legal-content-container')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  const handleClose = () => {
    if (onTabChange) {
      onTabChange(null);
    } else {
      setInternalActiveTab(null);
    }
  };

  const handleSaveCookiePreferences = () => {
    try {
      localStorage.setItem(
        'kevinc_cookie_consent',
        JSON.stringify({ necessary: true, analytics: analyticsConsent, date: new Date().toISOString() })
      );
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2500);
    } catch {
      // Ignore
    }
  };

  const tabs: { id: LegalTabId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'infos', label: 'Informations Entreprise', icon: Building2 },
    { id: 'mentions', label: 'Mentions Légales', icon: Shield },
    { id: 'confidentialite', label: 'Politique de Confidentialité', icon: Lock },
    { id: 'cgv', label: 'CGV', icon: Scale },
    { id: 'cookies', label: 'Cookies', icon: Cookie },
  ];

  return (
    <div className="w-full text-stone-300" id="legal-section">
      
      {/* Barre d'onglets discrets */}
      <nav aria-label="Informations légales et réglementaires" className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleToggleTab(tab.id)}
              aria-expanded={isSelected}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-light transition-all cursor-pointer ${
                isSelected
                  ? 'bg-stone-800 text-white border border-[#d4b996]/70 shadow-sm'
                  : 'bg-stone-900/60 hover:bg-stone-850 text-stone-400 hover:text-stone-200 border border-stone-800/80 hover:border-stone-700'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4b996]' : 'text-stone-500'}`} />
              <span>{tab.label}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  isSelected ? 'rotate-180 text-[#d4b996]' : 'text-stone-600'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Contenu affiché UNIQUEMENT quand un onglet est cliqué */}
      {activeTab !== null && (
        <div
          id="legal-content-container"
          className="mt-6 bg-[#161514] rounded-2xl border border-stone-800/90 p-6 sm:p-8 shadow-2xl animate-fade-in text-xs sm:text-sm font-light leading-relaxed"
        >
          {/* Header du panneau avec bouton Fermer */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4b996]" />
              <h4 className="font-serif text-lg text-white font-normal">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h4>
            </div>

            <button
              onClick={handleClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-stone-400 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Fermer</span>
            </button>
          </div>

          {/* 1. Onglet Informations Entreprise */}
          {activeTab === 'infos' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b996] font-medium block">
                  Éléments juridiques officiels
                </span>
                <p className="text-stone-400 text-xs mt-1">
                  Données d'enregistrement officiel de l'entreprise KEVIN C.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-stone-800 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-stone-850/80 text-stone-300 border-b border-stone-800 text-xs font-medium uppercase tracking-wider">
                      <th className="py-3 px-4 sm:px-6 w-1/3 text-stone-400">Élément</th>
                      <th className="py-3 px-4 sm:px-6">Détail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-stone-300 text-xs sm:text-sm">
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Dénomination</td>
                      <td className="py-3 px-4 sm:px-6 font-serif text-base text-[#d4b996]">KEVIN C</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Forme juridique</td>
                      <td className="py-3 px-4 sm:px-6">Entrepreneur individuel</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Exploitant</td>
                      <td className="py-3 px-4 sm:px-6 text-white font-medium">Somboun PASOMSOUK</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">SIREN</td>
                      <td className="py-3 px-4 sm:px-6 font-mono text-stone-200">414 253 518</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">SIRET</td>
                      <td className="py-3 px-4 sm:px-6 font-mono text-stone-200">414 253 518 00016</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">N° TVA intracommunautaire</td>
                      <td className="py-3 px-4 sm:px-6 font-mono text-stone-200">FR58414253518</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Adresse</td>
                      <td className="py-3 px-4 sm:px-6">1 Cours des Lacs, 77185 Lognes</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Activité</td>
                      <td className="py-3 px-4 sm:px-6">Coiffure (NAF 9602A)</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Création</td>
                      <td className="py-3 px-4 sm:px-6">21 octobre 1997</td>
                    </tr>
                    <tr className="hover:bg-stone-800/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-white">Statut</td>
                      <td className="py-3 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-950 text-emerald-300 border border-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. Onglet Mentions Légales */}
          {activeTab === 'mentions' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b996] font-medium block">
                  Obligatoire – LCEN (Loi n° 2004-575)
                </span>
                <p className="text-stone-400 text-xs mt-1">
                  Mentions légales et d'identification de l'éditeur du site.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                  <h5 className="font-serif text-base text-white font-medium">Éditeur du site</h5>
                  <p className="text-stone-300 leading-relaxed">
                    <strong className="text-white">Somboun PASOMSOUK</strong><br />
                    Exerçant sous le nom commercial <strong className="text-[#d4b996]">KEVIN C</strong><br />
                    Entrepreneur individuel<br />
                    Adresse : 1 Cours des Lacs, 77185 Lognes<br />
                    SIREN : 414 253 518<br />
                    SIRET : 414 253 518 00016<br />
                    N° TVA intracommunautaire : FR58414253518
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                  <h5 className="font-serif text-base text-white font-medium">Directeur de la publication & Contact</h5>
                  <p className="text-stone-300 leading-relaxed">
                    <strong>Directeur de la publication :</strong> Somboun PASOMSOUK<br />
                    <strong>Téléphone :</strong>{' '}
                    <a href={`tel:${SALON_INFO.phoneClean}`} className="text-white underline hover:text-[#d4b996]">
                      01 60 17 33 10
                    </a><br />
                    <strong>Email :</strong> contact@kevinc-coiffure.fr<br />
                    <strong>Adresse :</strong> 1 Cours des Lacs, 77185 Lognes
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                <h5 className="font-serif text-base text-white font-medium">Hébergeur du site</h5>
                <p className="text-stone-300 leading-relaxed">
                  <strong>Google Cloud EMEA Limited</strong><br />
                  Adresse : 70 Sir John Rogerson's Quay, Dublin 2, Irlande<br />
                  Téléphone : +353 1 436 1000<br />
                  Serveurs situés au sein de l'Union Européenne.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                <h5 className="font-serif text-base text-white font-medium">Propriété intellectuelle</h5>
                <p className="text-stone-300 leading-relaxed">
                  L’ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de <strong>Somboun PASOMSOUK / KEVIN C</strong>, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
                </p>
              </div>
            </div>
          )}

          {/* 3. Onglet Politique de Confidentialité */}
          {activeTab === 'confidentialite' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b996] font-medium block">
                  RGPD – Obligatoire
                </span>
                <p className="text-stone-400 text-xs mt-1">
                  Traitement et protection de vos données personnelles.
                </p>
              </div>

              <div className="space-y-4 text-stone-300">
                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Responsable du traitement</h5>
                  <p>
                    Somboun PASOMSOUK – KEVIN C<br />
                    1 Cours des Lacs, 77185 Lognes<br />
                    Email : contact@kevinc-coiffure.fr
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Données collectées</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Via contact téléphonique ou demande de rendez-vous : nom, prénom, email, téléphone.</li>
                    <li>Via prise de rendez-vous (si outil utilisé) : données de réservation.</li>
                    <li>Cookies techniques et éventuellement analytiques.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Finalités</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Répondre aux demandes de contact et de rendez-vous.</li>
                    <li>Gérer les réservations et le suivi client.</li>
                    <li>Améliorer le fonctionnement du site (statistiques anonymisées).</li>
                    <li>Envoi d’informations commerciales uniquement avec consentement préalable.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Base légale</h5>
                  <p>Consentement, exécution d’un contrat (prestation de coiffure), intérêt légitime.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Durée de conservation</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Données de contact :</strong> 3 ans maximum après le dernier échange.</li>
                    <li><strong>Données de rendez-vous :</strong> durée légale de conservation comptable et fiscale.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Vos droits (RGPD)</h5>
                  <p className="mb-2">
                    Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité.
                  </p>
                  <p className="text-xs text-stone-400">
                    Pour exercer vos droits : contactez-nous par email (<a href="mailto:contact@kevinc-coiffure.fr" className="underline hover:text-white">contact@kevinc-coiffure.fr</a>) ou courrier au 1 Cours des Lacs, 77185 Lognes. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.cnil.fr</a>).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Cookies</h5>
                  <p className="text-xs text-stone-400">
                    Ce site utilise des cookies techniques nécessaires au fonctionnement. Les cookies analytiques ou marketing ne sont déposés qu’après votre consentement via le bandeau cookies.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Onglet CGV */}
          {activeTab === 'cgv' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b996] font-medium block">
                  Fortement recommandée
                </span>
                <h4 className="font-serif text-2xl font-light text-white mt-1">
                  Conditions Générales de Vente (CGV)
                </h4>
              </div>

              <div className="space-y-4 text-stone-300">
                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Prestataire</h5>
                  <p>
                    Somboun PASOMSOUK – KEVIN C<br />
                    Entrepreneur individuel · 1 Cours des Lacs, 77185 Lognes<br />
                    SIREN 414 253 518 – SIRET 414 253 518 00016
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Prestations</h5>
                  <p>Services de coiffure (coupe, coloration, brushing, soins, coiffure afro, etc.).</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Prix</h5>
                  <p>Les prix affichés sur le site sont en euros TTC. Ils peuvent être modifiés à tout moment.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Réservation</h5>
                  <p>Les rendez-vous peuvent être pris par téléphone au 01 60 17 33 10 ou sur place au salon.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Annulation / Report</h5>
                  <p>
                    Toute annulation ou report doit être signalé au moins 24 heures à l’avance. En cas d’absence non justifiée ou d’annulation tardive, le salon se réserve le droit de facturer tout ou partie de la prestation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Paiement</h5>
                  <p>Paiement sur place (espèces, carte bancaire).</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Droit de rétractation</h5>
                  <p className="text-xs text-stone-400">
                    Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux prestations de services pleinement exécutées avant la fin du délai de rétractation ou dont l’exécution a commencé avec l’accord du client (prestation de coiffure sur rendez-vous).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
                  <h5 className="font-semibold text-white mb-1">Réclamations & Médiateur</h5>
                  <p className="mb-2">
                    Toute réclamation peut être adressée par email ou courrier au salon.
                  </p>
                  <p className="text-xs text-stone-400">
                    En cas de litige, le client peut recourir gratuitement à un médiateur de la consommation :<br />
                    <strong>CM2C (Centre de la Médiation de la Consommation de Conciliateurs de Justice)</strong> – <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.cm2c.net</a> · 14 rue Saint-Jean, 75017 Paris.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. Onglet Cookies */}
          {activeTab === 'cookies' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b996] font-medium block">
                  Bandeau Cookies + Politique Cookies (obligatoire)
                </span>
                <h4 className="font-serif text-2xl font-light text-white mt-1">
                  Gestion des Cookies & Préférences
                </h4>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white text-sm">Cookies strictement nécessaires</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Toujours actifs
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-light">
                      Nécessaires au bon fonctionnement du site, à l’affichage sécurisé et à la mémorisation de vos choix.
                    </p>
                  </div>
                  <div className="text-stone-500 text-xs italic shrink-0">Obligatoire</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-medium text-white text-sm">Cookies de mesure d'audience</span>
                    <p className="text-xs text-stone-400 font-light">
                      Déposés uniquement après votre consentement afin d'analyser anonymement la fréquentation.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4b996]"></div>
                  </label>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSaveCookiePreferences}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4b996] hover:bg-[#c4a885] text-stone-950 font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Enregistrer mes choix</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAnalyticsConsent(true);
                    try {
                      localStorage.setItem(
                        'kevinc_cookie_consent',
                        JSON.stringify({ necessary: true, analytics: true, date: new Date().toISOString() })
                      );
                      setSavedNotification(true);
                      setTimeout(() => setSavedNotification(false), 2500);
                    } catch {
                      // Ignore
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-light transition-colors cursor-pointer"
                >
                  <span>Accepter tout</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAnalyticsConsent(false);
                    try {
                      localStorage.setItem(
                        'kevinc_cookie_consent',
                        JSON.stringify({ necessary: true, analytics: false, date: new Date().toISOString() })
                      );
                      setSavedNotification(true);
                      setTimeout(() => setSavedNotification(false), 2500);
                    } catch {
                      // Ignore
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-700 hover:border-stone-600 text-stone-400 hover:text-stone-200 text-xs font-light transition-colors cursor-pointer"
                >
                  <span>Refuser tout</span>
                </button>

                {savedNotification && (
                  <span className="text-emerald-400 text-xs flex items-center gap-1.5 animate-fade-in">
                    <Check className="w-3.5 h-3.5" />
                    <span>Choix enregistrés !</span>
                  </span>
                )}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
