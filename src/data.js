import { nanoid } from 'nanoid';

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jason',
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jason@jasont.us',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jasont01',
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
      name: 'github',
      url: 'https://github.com/jasont01',
    },
  ],
};
