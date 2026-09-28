import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { MapPin, Navigation, ExternalLink, Bus, Train, Phone, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

const GoogleMapsCanvas: React.FC = () => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(true);

  return (
    <Map
      mapId="DEMO_MAP_ID"
      defaultCenter={SALON_INFO.coordinates}
      defaultZoom={16}
      gestureHandling="cooperative"
      disableDefaultUI={false}
      className="w-full h-full"
      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
    >
      <AdvancedMarker
        ref={markerRef}
        position={SALON_INFO.coordinates}
        onClick={() => setInfowindowOpen((prev) => !prev)}
        title="Salon Kevin C - 1 Cours des Lacs, Lognes"
      >
        <Pin
          background="#121110"
          borderColor="#d4b996"
          glyphColor="#d4b996"
          scale={1.25}
        />
      </AdvancedMarker>

      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={280}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <div className="p-1 text-stone-900 font-sans space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#947854]">
              <Scissors className="w-3 h-3 text-[#947854]" />
              <span>Artisan Coiffeur</span>
            </div>
            <h4 className="font-serif font-bold text-base text-stone-950">
              Kevin C
            </h4>
            <p className="text-xs text-stone-600 font-light leading-snug">
              1 Cours des Lacs, 77185 Lognes
            </p>
            <p className="text-[11px] text-stone-500">
              Gare RER A Lognes (2 min à pied)
            </p>
            <div className="pt-2 flex items-center gap-2 border-t border-stone-200 mt-2">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-900 text-white text-[11px] font-medium"
              >
                <Phone className="w-3 h-3 text-[#d4b996]" />
                <span>{SALON_INFO.phone}</span>
              </a>
              <a
                href={SALON_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 text-[11px] font-medium hover:bg-stone-200 transition-colors"
              >
                <Navigation className="w-3 h-3 text-stone-700" />
                <span>Itinéraire</span>
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export const GoogleMapEmbed: React.FC = () => {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '';

  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs">
      <div className="p-6 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#faf9f6]">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#947854]">
            <MapPin className="w-4 h-4 text-stone-900" />
            <span>Google Maps · Lognes (77185)</span>
          </div>
          <p className="text-base font-serif font-medium text-stone-900 mt-1">
            {SALON_INFO.address}, {SALON_INFO.postalCode} {SALON_INFO.city}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-xs font-medium text-stone-800 transition-colors shadow-2xs hover:bg-stone-50"
          >
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            <span>Ouvrir dans Maps</span>
          </a>

          <a
            href={SALON_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-xs font-medium text-white transition-colors shadow-2xs"
          >
            <Navigation className="w-3.5 h-3.5 text-[#d4b996]" />
            <span>Itinéraire</span>
          </a>
        </div>
      </div>

      {/* Map Display: Google Maps Platform Interactive Map */}
      <div className="relative w-full h-[380px] sm:h-[440px] bg-stone-100">
        {apiKey ? (
          <APIProvider apiKey={apiKey} libraries={['marker']}>
            <GoogleMapsCanvas />
          </APIProvider>
        ) : (
          <iframe
            title="Carte Kevin C - 1 Cours des Lacs Lognes"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=2.6247168%2C48.8359417%2C2.6389719%2C48.8459417&layer=mapnik&marker=${SALON_INFO.coordinates.lat}%2C${SALON_INFO.coordinates.lng}`}
          />
        )}
      </div>

      {/* Transit information bar */}
      <div className="p-5 bg-[#faf9f6] border-t border-stone-200/70 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-600 font-light">
        <div className="flex items-center gap-2.5">
          <Train className="w-4 h-4 text-stone-700 shrink-0" />
          <span>
            <strong className="font-medium text-stone-900">RER A :</strong> Station Lognes (sortie Cours des Lacs, 2 min à pied)
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Bus className="w-4 h-4 text-stone-700 shrink-0" />
          <span>
            <strong className="font-medium text-stone-900">Bus :</strong> Lignes 211, 321, C arrêt Gare de Lognes
          </span>
        </div>
      </div>
    </div>
  );
};
