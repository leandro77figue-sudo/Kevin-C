import { TarifItem } from '../types';

export const SALON_INFO = {
  name: 'Kevin C',
  fullName: 'Kevin C - Salon de Coiffure',
  tagline: 'Salon de coiffure à Lognes – Coupes, colorations & coiffure africaine',
  address: '1 Cours des Lacs',
  postalCode: '77185',
  city: 'Lognes',
  department: 'Seine-et-Marne (77)',
  country: 'France',
  phone: '01 60 17 33 10',
  phoneClean: '0160173310',
  phoneInternational: '+33160173310',
  establishedYear: 1997,
  yearsOfExperience: 'près de 30 ans',
  transport: 'À proximité immédiate de la gare RER A Lognes (moins de 3 minutes à pied)',
  coordinates: {
    lat: 48.8409417,
    lng: 2.6319719,
  },
  googleMapsUrl: 'https://www.google.com/maps/place/K%C3%A9vin+C/@48.8409417,2.6319719,17z/data=!4m6!3m5!1s0x47e60ff993a0e79d:0x3d1ba45b48ab43e2!8m2!3d48.8409417!4d2.6319719!16s%2Fg%2F1tfdy4gg',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1+Cours+des+Lacs+77185+Lognes',
};

export const SALON_HOURS = [
  { day: 'Lundi', hours: 'Fermé', isOpen: false },
  { day: 'Mardi', hours: '9h30 – 12h00 / 14h00 – 18h00', isOpen: true, morning: [9.5, 12], afternoon: [14, 18] },
  { day: 'Mercredi', hours: '9h30 – 12h00 / 14h00 – 19h30', isOpen: true, morning: [9.5, 12], afternoon: [14, 19.5] },
  { day: 'Jeudi', hours: '9h30 – 12h00 / 14h00 – 19h30', isOpen: true, morning: [9.5, 12], afternoon: [14, 19.5] },
  { day: 'Vendredi', hours: '9h30 – 12h00 / 14h00 – 19h30', isOpen: true, morning: [9.5, 12], afternoon: [14, 19.5] },
  { day: 'Samedi', hours: '9h30 – 12h00 / 14h00 – 19h30', isOpen: true, morning: [9.5, 12], afternoon: [14, 19.5] },
  { day: 'Dimanche', hours: 'Fermé', isOpen: false },
];

export const TARIFS_DATA: TarifItem[] = [
  // Soins
  {
    id: 'soin-shampooing',
    name: 'Shampooing',
    price: 'à partir de 5 €',
    category: 'soins',
    description: 'Nettoyage doux adapté à la nature de votre cuir chevelu.',
  },
  {
    id: 'soin-hydratant',
    name: 'Soin hydratant',
    price: 'à partir de 12 €',
    category: 'soins',
    description: 'Bain de nutrition profond pour redonner souplesse et éclat.',
    isPopular: true,
  },
  {
    id: 'soin-afro',
    name: 'Soin spécifique cheveux afro',
    price: 'à partir de 15 €',
    category: 'soins',
    description: 'Formule hautement nourrissante adaptée aux boucles serrées, frisées et crépues.',
    isPopular: true,
  },

  // Coupes
  {
    id: 'coupe-homme',
    name: 'Coupe homme',
    price: 'à partir de 18 €',
    category: 'coupes',
    description: 'Coupe aux ciseaux ou tondeuse, finitions nuque et contours soignés.',
    isPopular: true,
  },
  {
    id: 'coupe-femme-court',
    name: 'Coupe femme (cheveux courts)',
    price: 'à partir de 28 €',
    category: 'coupes',
    description: 'Structure, dégradé ou coupe graphique adaptée à votre morphologie.',
  },
  {
    id: 'coupe-femme-long',
    name: 'Coupe femme (cheveux mi-longs / longs)',
    price: 'à partir de 35 €',
    category: 'coupes',
    description: 'Épointage, création de volume, frange ou transformation de ligne.',
    isPopular: true,
  },
  {
    id: 'coupe-enfant',
    name: 'Coupe enfant',
    price: 'à partir de 15 €',
    category: 'coupes',
    description: 'Accueil doux et coupe rapide pour les plus jeunes (-12 ans).',
  },

  // Brushing
  {
    id: 'brushing-court',
    name: 'Brushing cheveux courts',
    price: '18 €',
    category: 'brushing',
    description: 'Mise en forme soignée et séchage structuré.',
  },
  {
    id: 'brushing-mi-long',
    name: 'Brushing cheveux mi-longs / frisés',
    price: '25 €',
    category: 'brushing',
    description: 'Lissage souple ou travail des ondulations et boucles.',
    isPopular: true,
  },
  {
    id: 'brushing-long-afro',
    name: 'Brushing cheveux longs / afro',
    price: '30 €',
    category: 'brushing',
    description: 'Démêlage soigné, thermo-protection et séchage haute brillance.',
  },

  // Colorations & Techniques
  {
    id: 'color-racines',
    name: 'Coloration racines',
    price: 'à partir de 35 €',
    category: 'colorations',
    description: 'Couverture optimale des repousses et cheveux blancs.',
  },
  {
    id: 'color-complete',
    name: 'Coloration complète',
    price: 'à partir de 55 €',
    category: 'colorations',
    description: 'Richesse des reflets, brillance et tenue longue durée.',
    isPopular: true,
  },
  {
    id: 'color-meches',
    name: 'Mèches / Balayage',
    price: 'sur devis',
    category: 'colorations',
    description: 'Effet lumière sur-mesure (soleil, contrastes, fondu naturel).',
  },
  {
    id: 'color-lissage',
    name: 'Lissage / Défrisage',
    price: 'sur devis',
    category: 'colorations',
    description: 'Traitement lissant professionnel et défrisage maîtrisé pour cheveux texturés.',
    isPopular: true,
  },
];

export const SPECIALITES = [
  {
    id: 'mixte',
    title: 'Coiffure homme, femme & enfant',
    description: 'Des coupes adaptées à toutes les générations et tous les styles, du classique chic aux tendances actuelles.',
    iconName: 'Scissors',
  },
  {
    id: 'afro',
    title: 'Coiffure africaine & cheveux texturés',
    description: 'Une véritable expertise reconnue sur cheveux afro, crépus et frisés : soins nourrissants, défrisage, tresses et mise en valeur de la boucle naturelle.',
    iconName: 'Sparkles',
  },
  {
    id: 'mariage',
    title: 'Coiffure de mariage & événements',
    description: 'Chignons élaborés, coiffages sophistiqués et tresses de cérémonie pour sublimer votre jour J.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'sans-rdv',
    title: 'Sans rendez-vous selon disponibilité',
    description: 'Passez nous voir au salon au 1 Cours des Lacs à Lognes : nous vous accueillons avec plaisir si un fauteuil est disponible.',
    iconName: 'Clock',
  },
];

export const TESTIMONIALS = [
  {
    author: 'Aïssatou D.',
    location: 'Lognes',
    comment: 'Client fidèle depuis 8 ans. Kevin maîtrise parfaitement les cheveux afro et sait exactement comment hydrater et tailler mes boucles sans les abîmer. Une ambiance toujours chaleureuse !',
    rating: 5,
  },
  {
    author: 'Marc V.',
    location: 'Torcy / Noisiel',
    comment: 'Coupe homme impeccable à chaque visite. Propre, rapide, tarifs très corrects et équipe conviviale à 2 pas du RER Lognes. Je recommande les yeux fermés.',
    rating: 5,
  },
  {
    author: 'Sophie L.',
    location: 'Lognes (Cours des Lacs)',
    comment: 'Coiffure de mariage magnifique réalisée l\'an passé, et je continue d\'y faire mes brushings et colorations. Une adresse précieuse dans le quartier !',
    rating: 5,
  },
];
