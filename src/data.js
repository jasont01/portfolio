import { nanoid } from 'nanoid';

// HERO DATA
export const heroData = {
  title: '',
  firstName: 'Jason',
  lastName: 'Thompson',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// SKILLS
export const skillsData = [
  { id: nanoid(), name: 'HTML', icon: 'icon_html.svg' },
  {
    id: nanoid(),
    name: 'CSS',
    icon: 'icon_css.svg',
  },
  {
    id: nanoid(),
    name: 'SASS',
    icon: 'icon_sass.svg',
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    icon: 'icon_javascript.svg',
  },
  {
    id: nanoid(),
    name: 'React',
    icon: 'icon_react.svg',
  },
  {
    id: nanoid(),
    name: 'NextJS',
    icon: 'icon_next.svg',
  },
  {
    id: nanoid(),
    name: 'Styled Components',
    icon: 'icon_styledComponents.svg',
  },
  {
    id: nanoid(),
    name: 'NodeJS',
    icon: 'icon_nodejs.svg',
  },
  {
    id: nanoid(),
    name: 'Git',
    icon: 'icon_git.svg',
  },
  {
    id: nanoid(),
    name: 'GitHub',
    icon: 'icon_github.svg',
  },
  {
    id: nanoid(),
    name: 'Linux',
    icon: 'icon_linux.svg',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo-list.png',
    title: 'To-Do List',
    info: 'The ubiquitous javascript app',
    info2: 'Inspired by the background picture found on unsplash',
    url: 'https://jasont01.github.io/todo-list',
    repo: 'https://github.com/jasont01/todo-list', // if no repo, the button will not show up
    footnote: '',
  },
  {
    id: nanoid(),
    img: 'memory-game.png',
    title: 'Memory Game',
    info: 'A simple memory based game',
    info2: '',
    url: 'https://jasont01.github.io/memory-game/',
    repo: 'https://github.com/jasont01/memory-game',
    footnote: '',
  },
  {
    id: nanoid(),
    img: 'fauxbook.png',
    title: 'Fauxbook',
    info: 'A Facebook Clone',
    info2: '',
    url: 'https://odin-fauxbook.herokuapp.com/',
    repo: 'https://github.com/jasont01/odin-facebook',
    footnote: 'May take a moment to load. Hosted on heroku using their hobby plan',
  },
  {
    id: nanoid(),
    img: 'odin-airlines.png',
    title: 'Odin Airlines',
    info: 'A mock flight booking app',
    info2: 'Created with Ruby on Rails',
    url: 'https://odin-airlines.herokuapp.com/',
    repo: 'https://github.com/jasont01/odin-flight-booker',
    footnote: 'May take a moment to load. Hosted on heroku using their hobby plan',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Write me an e-mail at:',
  btn: '',
  email: 'contact@jasont.us',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jasont01',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jasont01',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jasont01/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jasont01',
    },
  ],
};
