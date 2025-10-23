type Project = {
  src: string;
  alt: string;
  url: string;
  skills: string[];
  name: string;
  description: string;
};

export const projectListData: Project[] = [
  {
    src: '/assets/images/container/project-list/toyota-models.png',
    alt: 'toyota',
    url: 'https://toyota-lulu.vercel.app/',
    skills: ['React', 'Typescript', 'TailwindCss'],
    name: 'Toyota Lulu',
    description:
      'A Toyota website for my sister, showcasing my latest skills, such as ReactJs (NextJs), Typescript, TailwindCss.',
  },
  {
    src: '/assets/images/container/project-list/tindog.png',
    alt: 'tindog',
    url: 'https://fransyosuaa.github.io/tindog/',
    skills: ['Bootstrap', 'HTML', 'CSS'],
    name: 'Tindog',
    description:
      'A sleek and user-friendly online dating platform tailored for your beloved dog.',
  },
  {
    src: '/assets/images/container/project-list/mondrian-painting.png',
    alt: 'mondrian painting',
    url: 'https://fransyosuaa.github.io/mondrian-painting-with-grid/',
    skills: ['HTML', 'CSS'],
    name: 'Mondrian Painting',
    description:
      'Recreate the iconic Mondrian painting using the power of CSS Grid.',
  },
  {
    src: '/assets/images/container/project-list/html-portfolio.png',
    alt: 'simple online cv',
    url: 'https://fransyosuaa.github.io/html-portfolio/',
    skills: ['HTML', 'CSS'],
    name: 'Simple Online CV',
    description:
      'A professional and elegant online CV crafted with pure HTML and CSS.',
  },
  {
    src: '/assets/images/container/project-list/drum-kit.png',
    alt: 'drum kit',
    url: 'https://fransyosuaa.github.io/play-drum/',
    skills: ['HTML', 'JS', 'CSS'],
    name: 'Drum Kit',
    description:
      'Design and play a fun and interactive drum kit using pure JavaScript, adding a musical touch to your web page.',
  },
  {
    src: '/assets/images/container/project-list/image6.png',
    alt: 'landing page',
    url: '#',
    skills: ['React', 'HTML', 'CSS'],
    name: 'Landing Page',
    description:
      'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
  },
  // {
  //   src: '/assets/images/container/project-list/image1.png',
  //   alt: 'landing page',
  //   url: '#',
  //   skills: ['React', 'HTML', 'CSS'],
  //   name: 'Landing Page',
  //   description:
  //     'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
  // },
];
