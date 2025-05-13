type FAQData = {
  question: string;
  answer: string;
};

export const faqData: FAQData[] = [
  {
    question: 'How do you ensure websites load quickly and efficiently?',
    answer:
      'I prioritize performance from the start by optimizing assets, minimizing HTTP requests, lazy-loading content, and using modern build tools. I also follow best practices like code splitting, image optimization, and caching strategies to ensure fast load times across all devices.',
  },
  {
    question: `What's your approach to front-end development?`,
    answer:
      'I focus on building clean, scalable, and accessible user interfaces. I follow a component-driven approach, leverage modern JavaScript frameworks, and ensure responsive design to provide a consistent user experience across devices.',
  },
  {
    question: 'What kind of projects do you specialize in?',
    answer:
      'I specialize in building dynamic web applications, custom dashboards, and front-end systems with complex state management. I often work on projects that require strong UX, performance optimization, and seamless integration with back-end APIs.',
  },
  {
    question: 'How do you handle project deadlines?',
    answer:
      'I use clear planning, realistic estimations, and agile methodologies to manage timelines effectively. I prioritize communication, break tasks into manageable milestones, and proactively address blockers to ensure projects stay on track.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'My stack typically includes React, TypeScript, Redux, HTML/CSS, and modern tooling like Vite or Webpack. On the back end, I work with Node.js, Express, and Sequelize or Mongoose for database access. I also use Git and CI/CD tools to streamline development and deployment.',
  },
];
