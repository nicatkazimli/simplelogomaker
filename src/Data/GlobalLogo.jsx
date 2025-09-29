import { basicLogos } from '../Service/BasicLogos';
import { mediumLogos } from '../Service/MediumLogos';
import { premiumLogos } from '../Service/PremiumLogos';

export const logoArray = [
  ...basicLogos.map(logo => ({ ...logo, category: 'basic' })),
  ...mediumLogos.map(logo => ({ ...logo, category: 'medium' })),
  ...premiumLogos.map(logo => ({ ...logo, category: 'premium' }))
];
