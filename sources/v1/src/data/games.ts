import type { ImageMetadata } from 'astro';

import cinemaworld from '../assets/games/cinemaworld.webp';
import wordmaker from '../assets/games/wordmaker.webp';
import kingslanding from '../assets/games/kingslanding.webp';
import foodbattles from '../assets/games/foodbattles.webp';
import magicboxdefender from '../assets/games/magicboxdefender.webp';
import battlegangs from '../assets/games/battlegangs.webp';
import colonydefender from '../assets/games/colonydefender.webp';
import timetochill from '../assets/games/timetochill.webp';
import harborkeepers from '../assets/games/harborkeepers.webp';
import balloontravel from '../assets/games/balloontravel.webp';
import spacetrouble from '../assets/games/spacetrouble.webp';
import virusrunner from '../assets/games/virusrunner.webp';
import rageofgiants from '../assets/games/rageofgiants.webp';
import frontline from '../assets/games/frontline.webp';
import prismatrix from '../assets/games/prismatrix.webp';
import nilevalley from '../assets/games/nilevalley.webp';
import matchland from '../assets/games/matchland.webp';
import crossstitchcoloringbook from '../assets/games/crossstitchcoloringbook.webp';
import crossstitchcoloringart from '../assets/games/crossstitchcoloringart.webp';
import crossstitchmandala from '../assets/games/crossstitchmandala.webp';

export type GameGroup = 'collab' | 'studio' | 'experience';

export interface Game {
  title: string;
  description: string;
  cover: ImageMetadata;
  group: GameGroup;
  badge?: string;
  isNew?: boolean;
  googlePlay?: string;
  appStore?: string;
  external?: { label: string; url: string };
}

export const GROUPS: Record<GameGroup, { label: string; note: string }> = {
  collab: {
    label: 'Collaborations',
    note: 'Shipped with partner studios & publishers',
  },
  studio: {
    label: 'Studio titles',
    note: 'Built and published under our own brand',
  },
  experience: {
    label: 'Team experience',
    note: 'Titles our people shipped before joining',
  },
};

export const GAMES: Game[] = [
  // — Collaborations —
  {
    title: 'My Cinema World',
    description: 'Simulation/management for cinema fans. Build and manage your dream cinema empire.',
    cover: cinemaworld,
    group: 'collab',
    badge: '5M+ downloads',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.creauctopus.cinemaworld',
    appStore: 'https://apps.apple.com/us/app/my-cinema-world/id6479268268',
  },
  {
    title: 'Word Maker: Words Games Puzzle',
    description: 'Word Maker — a word game app. Challenge your vocabulary with fun puzzles.',
    cover: wordmaker,
    group: 'collab',
    badge: '5M+ downloads',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.aaaudi.wordmaker',
  },
  {
    title: 'Kings Landing',
    description: 'A strategy/management title. Rule your kingdom and expand your territory.',
    cover: kingslanding,
    group: 'collab',
    badge: '100K+ downloads',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.Creauctopus.KingsLanding',
    appStore: 'https://apps.apple.com/us/app/kings-landing-idle-arcade/id6478125091',
  },
  {
    title: 'Food Battles',
    description: 'Competitive cooking arcade. Battle chefs in fast-paced culinary challenges.',
    cover: foodbattles,
    group: 'collab',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.creauctopus.foodbattles',
  },
  {
    title: 'Magic Box Defender',
    description: 'Tower defense style action. Defend your realm with magical powers.',
    cover: magicboxdefender,
    group: 'collab',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.creauctopus.magicboxdefender',
    appStore: 'https://apps.apple.com/us/app/magic-box-defender/id6753757246',
  },
  {
    title: 'Battle Gangs',
    description: 'Action / strategy hybrid. Lead your gang to victory in street battles.',
    cover: battlegangs,
    group: 'collab',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.creauctopus.battlesimulator',
    appStore: 'https://apps.apple.com/us/app/battle-gangs/id6752643126',
  },

  // — Studio titles —
  {
    title: 'Colony Defender',
    description:
      'A light strategy. Manage a growing settlement, build units from cards, and survive monster waves.',
    cover: colonydefender,
    group: 'studio',
    isNew: true,
    googlePlay: 'https://play.google.com/store/apps/details?id=com.taratorkinofficial.colonydefender',
    appStore: 'https://apps.apple.com/us/app/myrion-bastion/id6761761954',
  },
  {
    title: 'Time To Chill',
    description: 'Merge cocktails and unlock stylish tropical destinations.',
    cover: timetochill,
    group: 'studio',
    isNew: true,
    googlePlay: 'https://play.google.com/store/apps/details?id=com.taratorkinofficial.timetochill',
  },
  {
    title: 'Harbor Keepers',
    description: 'Tower defense — protect your island from pirate invasions.',
    cover: harborkeepers,
    group: 'studio',
    isNew: true,
    googlePlay: 'https://play.google.com/store/apps/details?id=com.taratorkinofficial.harborkeepers',
    appStore: 'https://apps.apple.com/us/app/harbor-keepers/id6762597951',
  },
  {
    title: 'Balloon Travel 3D',
    description: 'A relaxing balloon arcade. Float through beautiful landscapes.',
    cover: balloontravel,
    group: 'studio',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.TaratorkinOfficial.BalloonTravel3D',
    appStore: 'https://apps.apple.com/us/app/balloon-travel-3d/id6763124242',
  },
  {
    title: 'Space Trouble 3D',
    description: 'Fast-paced space runner with explosive obstacles.',
    cover: spacetrouble,
    group: 'studio',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.TaratorkinOfficial.SpaceThrone3D',
    appStore: 'https://apps.apple.com/us/app/space-trouble-3d/id6762308603',
  },
  {
    title: 'Virus Runner',
    description: 'Dynamic runner with progression. Evolve and survive.',
    cover: virusrunner,
    group: 'studio',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.TaratorkinOfficial.VirusRunner',
    appStore: 'https://apps.apple.com/us/app/neurophage-runner/id6763154550',
  },

  // — Team experience —
  {
    title: 'Rage Of Giants',
    description: 'Island wars and giant battles. Unleash epic destruction.',
    cover: rageofgiants,
    group: 'experience',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.DVGGames.RageOfGiantsIslandsWars',
  },
  {
    title: 'Frontline: Steel and Blood',
    description: 'Strategy title — external listing. Command your army.',
    cover: frontline,
    group: 'experience',
    external: {
      label: 'Listing',
      url: 'https://www.bluestacks.com/apps/strategy/frontline-steel-and-blood-on-pc.html',
    },
  },
  {
    title: 'Prismatrix',
    description: 'Puzzle / arcade experiment. Solve colorful challenges.',
    cover: prismatrix,
    group: 'experience',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.GaForCompany.Prismatrix',
  },
  {
    title: 'Nile Valley: Farm Adventure',
    description: 'City builder with idle farming, set in ancient Egypt.',
    cover: nilevalley,
    group: 'experience',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.eightkgames.nilevalley',
  },
  {
    title: 'Matchland: Build a Theme Park',
    description: 'Match-3 game with theme park build meta-game.',
    cover: matchland,
    group: 'experience',
    external: {
      label: 'App Store (archive)',
      url: 'https://web.archive.org/web/20240518013613/https://apps.apple.com/us/app/matchland-build-a-theme-park/id1445039832',
    },
  },
  {
    title: 'Cross-Stitch: Coloring Book',
    description: 'Relaxing pixel-art cross-stitch coloring book.',
    cover: crossstitchcoloringbook,
    group: 'experience',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.playcus.crossstitchcoloringbook',
  },
  {
    title: 'Cross Stitch Coloring Art',
    description: 'Cross-stitch coloring art for casual creativity.',
    cover: crossstitchcoloringart,
    group: 'experience',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.playcus.crosstitchcoloringart',
  },
  {
    title: 'Cross Stitch Coloring Mandala',
    description: 'Mandala cross-stitch coloring with calming progression.',
    cover: crossstitchmandala,
    group: 'experience',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.playcus.crossstitch.coloring.mandala',
  },
];
