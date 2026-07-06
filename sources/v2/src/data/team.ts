import type { ImageMetadata } from 'astro';

import alexander from '../assets/team/alexander.webp';
import illia from '../assets/team/illia.webp';
import eduard from '../assets/team/eduard.webp';
import vitaliy from '../assets/team/vitaliy.webp';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata;
  tags: string[];
  links: { label: string; url: string }[];
}

export const TEAM: TeamMember[] = [
  {
    name: 'Alexander',
    role: 'Founder · Lead Developer · Game Designer',
    bio: 'Previously Unity developer at Creauctopus, shipping prototypes for CrazyLabs. Brings first-hand knowledge of publisher workflows, quality standards, and production expectations. Leads development strategy and personally verifies every team member’s competencies.',
    photo: alexander,
    tags: ['Unity', 'Game design', 'CrazyLabs pipeline', 'SDK integration', 'Business development'],
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/taratorkinofficial/' }],
  },
  {
    name: 'Illia Okolskyi',
    role: 'Senior Unity Dev · Team Lead · Game Designer',
    bio: 'Senior developer specializing in Android mobile games, including tower defense genre. Acts as team lead — managing the development process, defining architecture decisions, and ensuring quality from prototype to release. Also covers game design, shaping mechanics and game feel. 5+ years of Unity experience across mobile, WebGL, AR, and VR. English C1 certified.',
    photo: illia,
    tags: [
      'Android games',
      'Tower defense',
      'Team lead',
      'Game design',
      'C# / SOLID',
      'Unity Editor tools',
      'WebGL · AR · VR',
    ],
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/illia-okolskyi' }],
  },
  {
    name: 'Eduard Stepanysko',
    role: 'Unity Developer · Live-ops specialist',
    bio: 'Four years of commercial mobile game development focused on post-release and live-update workflows. Shipped Word Maker on both Google Play and App Store. Strong in ad and analytics SDK integration, rapid iteration, and fast bug turnaround under tight deadlines.',
    photo: eduard,
    tags: ['UnityAds', 'AdMob', 'IronSource', 'Firebase', 'Facebook SDK', 'Live-ops'],
    links: [
      { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01109d18c6fa5aff30' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/eduard-stepanysko-a5a486325/' },
    ],
  },
  {
    name: 'Vitaliy Ovsyanikov',
    role: '3D Artist · Animator · Level Designer · Game Designer',
    bio: 'Multidisciplinary artist responsible for UA creatives, ad videos, level design, and environment storytelling. Builds immersive, well-paced game spaces from layout to final visual polish. Studio experience at LumenStory. Delivers 5–6 original UA creatives and ad videos per prototype. Also contributes to game design.',
    photo: vitaliy,
    tags: [
      'Level design',
      'UA creatives',
      'Ad videos',
      'Blender',
      'Cinema4D',
      'After Effects',
      'Cinematics',
    ],
    links: [
      {
        label: 'Creative reel',
        url: 'https://www.youtube.com/playlist?list=PLeXi2ITrRnrOgyhj1sckgsTmCnygGHPuG',
      },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vitaliy-ovsyanikov-9a3221316/' },
      { label: 'Instagram', url: 'https://www.instagram.com/afteri1mage/' },
    ],
  },
];
