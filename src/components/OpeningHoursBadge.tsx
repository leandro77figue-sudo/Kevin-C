import React, { useMemo } from 'react';
import { Clock, Scissors } from 'lucide-react';
import { SALON_HOURS } from '../data/salonData';

export const OpeningHoursBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const status = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const weekdayPart = parts.find((p) => p.type === 'weekday')?.value?.toLowerCase() || '';
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
      const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
      const decimalTime = hour + minute / 60;

      const dayMapping: { [key: string]: number } = {
        lundi: 0,
        mardi: 1,
        mercredi: 2,
        jeudi: 3,
        vendredi: 4,
        samedi: 5,
        dimanche: 6,
      };

      const dayIdx = dayMapping[weekdayPart];
      if (dayIdx === undefined || dayIdx === 0 || dayIdx === 6) {
        return { isOpen: false, text: 'Fermé actuellement', nextOpen: 'Ouvre mardi à 9h30' };
      }

      const currentDaySchedule = SALON_HOURS[dayIdx];
      if (!currentDaySchedule || !currentDaySchedule.isOpen) {
        return { isOpen: false, text: 'Fermé actuellement', nextOpen: 'Ouvre mardi à 9h30' };
      }

      const morning = currentDaySchedule.morning || [9.5, 12];
      const afternoon = currentDaySchedule.afternoon || [14, 19.5];

      const isMorningOpen = decimalTime >= morning[0] && decimalTime < morning[1];
      const isAfternoonOpen = decimalTime >= afternoon[0] && decimalTime < afternoon[1];

      if (isMorningOpen || isAfternoonOpen) {
        const closeHour = isMorningOpen ? '12h00' : `${Math.floor(afternoon[1])}h${(afternoon[1] % 1) * 60 || '00'}`;
        return { isOpen: true, text: 'Ouvert actuellement', closesAt: `Ferme à ${closeHour}` };
      } else if (decimalTime < morning[0]) {
        return { isOpen: false, text: 'Ouvre aujourd’hui à 9h30' };
      } else if (decimalTime >= morning[1] && decimalTime < afternoon[0]) {
        return { isOpen: false, text: 'Pause méridienne · Réouverture à 14h00' };
      } else {
        return { isOpen: false, text: 'Fermé pour la journée' };
      }
    } catch {
      return { isOpen: false, text: 'Mardi au Samedi dès 9h30' };
    }
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs text-stone-700 font-light">
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? 'bg-emerald-500' : 'bg-stone-400'
          }`}
        />
        <span>{status.text}</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs">
      <div className="p-6 border-b border-stone-200/80 flex items-center justify-between bg-[#faf9f6]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-stone-200/70 flex items-center justify-center text-stone-800">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-medium text-lg text-stone-900">
              Horaires d'ouverture
            </h3>
            <span className="text-xs text-stone-400 font-light">1 Cours des Lacs, Lognes</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 text-xs">
          <span
            className={`w-2 h-2 rounded-full ${
              status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'
            }`}
          />
          <span className={status.isOpen ? 'text-emerald-700 font-medium' : 'text-stone-500 font-light'}>
            {status.isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>
      </div>

      <div className="divide-y divide-stone-100 text-xs sm:text-sm">
        {SALON_HOURS.map((slot) => {
          const isClosed = !slot.isOpen;
          return (
            <div
              key={slot.day}
              className={`flex items-center justify-between px-6 py-3.5 transition-colors hover:bg-stone-50/50 ${
                isClosed ? 'bg-stone-50/30 text-stone-400' : 'text-stone-700'
              }`}
            >
              <span className="font-medium text-stone-900">{slot.day}</span>
              <span className={`tabular-nums ${isClosed ? 'text-stone-400 font-light' : 'font-medium text-stone-900'}`}>
                {slot.hours}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-5 bg-[#faf9f6] border-t border-stone-200/70 text-xs text-stone-600 flex items-center gap-2.5 font-light">
        <Scissors className="w-4 h-4 text-stone-900 shrink-0" />
        <p>
          Sans rendez-vous possible selon disponibilité, ou réservation par téléphone au <strong className="font-medium text-stone-900">01 60 17 33 10</strong>.
        </p>
      </div>
    </div>
  );
};
