
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

const MINECRAFT_ASSETS = {
  icon: 'https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP',
  banner: 'https://picsum.photos/seed/minecraft-banner/800/400',
  screenshots: [
    'https://picsum.photos/seed/minecraft-gameplay-1/300/600',
    'https://picsum.photos/seed/minecraft-gameplay-2/300/600',
    'https://picsum.photos/seed/minecraft-gameplay-3/300/600',
  ]
};

const ARTES_ASSETS = {
  icon: 'https://picsum.photos/seed/artes-icon/200/200',
  banner: 'https://picsum.photos/seed/artes-banner/800/400',
  screenshots: [
    'https://picsum.photos/seed/artes-screen-1/300/600',
    'https://picsum.photos/seed/artes-screen-2/300/600',
    'https://picsum.photos/seed/artes-screen-3/300/600',
  ]
};

export const APPS: AppData[] = [
  {
    id: 'artes',
    title: 'Artes',
    developer: 'Estúdio Criativo',
    category: 'Arte e Design',
    rating: 4.8,
    reviews: '2 mi',
    size: '45 MB',
    downloads: '10 mi+',
    ratedFor: 'Livre',
    icon: ARTES_ASSETS.icon,
    banner: ARTES_ASSETS.banner,
    description: 'Um aplicativo incrível para criar, editar e compartilhar suas artes! Desenhe usando várias ferramentas de pincel, crie camadas incríveis e exporte em alta resolução.',
    screenshots: ARTES_ASSETS.screenshots,
    type: 'app'
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    developer: 'Mojang',
    category: 'Arcade',
    rating: 4.6,
    reviews: '5 mi',
    size: '150 MB',
    downloads: '50 mi+',
    ratedFor: '10+',
    icon: MINECRAFT_ASSETS.icon,
    banner: MINECRAFT_ASSETS.banner,
    description: 'Explore mundos infinitos e construa desde simples casas até grandiosos castelos. Jogue no modo criativo com recursos ilimitados ou minere fundo no mundo no modo sobrevivência, criando armas e armaduras para lutar contra criaturas perigosas.',
    screenshots: MINECRAFT_ASSETS.screenshots,
    type: 'game'
  },
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
    screenshots: CLASH_ROYALE_ASSETS.screenshots,
    type: 'game'
  },
  {
    id: 'flappy-dog',
    title: 'Flappy Dog',
    developer: 'DotGears Indie',
    category: 'Arcade',
    rating: 5.0,
    reviews: '12 mil',
    size: '15 MB',
    downloads: '1 mi+',
    ratedFor: '3+',
    icon: FLAPPY_DOG_ASSETS.icon,
    banner: FLAPPY_DOG_ASSETS.banner,
    description: 'Toque para voar! Guie o cachorro fofo pelos canos neste clássico arcade renascido e viciante. Mecânica simples, dificuldade impossível. Quão longe você consegue ir? Desafie seus amigos e bata o recorde nesta aventura de corrida sem fim.',
    screenshots: FLAPPY_DOG_ASSETS.screenshots,
    type: 'game'
  }
];
