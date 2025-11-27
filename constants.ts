import { AppData } from './types';

// ==========================================
// INSTRUCTIONS FOR ADDING PHOTOS:
// Replace the URL strings below with the direct links to your images.
// You can use image hosting services or direct links from the web.
// ==========================================

const CLASH_ROYALE_ASSETS = {
  // Replace with actual icon URL (approx 200x200)
  icon: 'https://play-lh.googleusercontent.com/gnSC6s8-6Tjc4uhvDW7nfrSJxpbhllzYhgX8y374N1LYvWBStn2YhozS9XXaz1T_Pi2q',
  
  // Replace with actual banner URL (approx 800x400)
  banner: 'https://picsum.photos/seed/clash-royale-banner/800/400',
  
  // Replace with actual screenshot URLs (portrait or landscape)
  screenshots: [
    'https://picsum.photos/seed/clash-gameplay-1/300/600',
    'https://picsum.photos/seed/clash-gameplay-2/300/600',
    'https://picsum.photos/seed/clash-gameplay-3/300/600',
  ]
};

const FLAPPY_DOG_ASSETS = {
  // Replace with actual icon URL
  // Using thumbnail endpoint for better reliability: https://drive.google.com/thumbnail?id=[ID]&sz=s1000
  icon: 'https://drive.google.com/thumbnail?id=1E_9dcQNrOlc8IpcYG49OQ0srhE_NkJ6u&sz=s1000',
  
  // Replace with actual banner URL
  banner: 'https://picsum.photos/seed/flappy-dog-banner/800/400',
  
  // Replace with actual screenshot URLs
  screenshots: [
    'https://picsum.photos/seed/flappy-gameplay-1/300/600',
    'https://picsum.photos/seed/flappy-gameplay-2/300/600',
    'https://picsum.photos/seed/flappy-gameplay-3/300/600',
  ]
};

export const APPS: AppData[] = [
  {
    id: 'clash-royale',
    title: 'Clash Royale',
    developer: 'Supercell',
    category: 'Estratégia',
    rating: 4.6,
    reviews: '34 mi',
    size: '450 MB',
    downloads: '500 mi+',
    ratedFor: '10+',
    icon: CLASH_ROYALE_ASSETS.icon,
    banner: CLASH_ROYALE_ASSETS.banner,
    description: 'Entre na Arena! Dos criadores de Clash of Clans vem um jogo multiplayer em tempo real com os Royales, seus personagens favoritos de Clash e muito, muito mais. Colecione e melhore dezenas de cartas com as tropas, feitiços e defesas de Clash of Clans que você conhece e ama, além dos Royales: Príncipes, Cavaleiros, Bebês Dragões e muito mais.',
    screenshots: CLASH_ROYALE_ASSETS.screenshots
  },
  {
    id: 'flappy-dog',
    title: 'Flappy Dog',
    developer: 'DotGears Indie',
    category: 'Arcade',
    rating: 4.2,
    reviews: '12 mil',
    size: '15 MB',
    downloads: '1 mi+',
    ratedFor: '3+',
    icon: FLAPPY_DOG_ASSETS.icon,
    banner: FLAPPY_DOG_ASSETS.banner,
    description: 'Toque para voar! Guie o cachorro fofo pelos canos neste clássico arcade renascido e viciante. Mecânica simples, dificuldade impossível. Quão longe você consegue ir? Desafie seus amigos e bata o recorde nesta aventura de corrida sem fim.',
    screenshots: FLAPPY_DOG_ASSETS.screenshots
  }
];