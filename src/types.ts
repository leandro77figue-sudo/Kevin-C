export type PageId = 'accueil' | 'salon' | 'tarifs' | 'contact';

export interface TarifItem {
  id: string;
  name: string;
  price: string;
  category: 'soins' | 'coupes' | 'brushing' | 'colorations';
  description?: string;
  isPopular?: boolean;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  prestation?: string;
  dateSouhaitee?: string;
  message: string;
}
