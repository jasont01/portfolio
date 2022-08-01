import { nanoid } from 'nanoid'

// ICON IMPORTS
// https://react-icons.github.io/react-icons

// Font Awsome
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap,
  FaFacebook,
  FaDatabase,
} from 'react-icons/fa'

// Simple Icons
import {
  SiCss3,
  SiJavascript,
  SiNextDotJs,
  SiStyledComponents,
  SiRuby,
  SiRails,
  SiJest,
  SiMaterialUi,
  SiFirebase,
} from 'react-icons/si'

// HERO DATA
export const heroData = {
  title: '',
  firstName: 'Jason',
  lastName: 'Thompson',
  subtitle: '',
  cta: '',
}

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am an aspiring, self-taught front-end developer who is passionate about web development and software engineering.',
  paragraphTwo:
    'I create dynamic applications and sites and enjoy solving complex problems by coming up with intuitive & elegant solutions.',
  paragraphThree:
    'I am well-organized, results-driven and interested in working on ambitious projects with creative people.',
  resume: 'https://jasont-resume.netlify.app/', // if no resume, the button will not show up
}

// SKILLS
export const skillsData = [
  {
    id: nanoid(),
    name: 'React',
    icon: FaReact(),
  },
  {
    id: nanoid(),
    name: 'NextJS',
    icon: SiNextDotJs(),
  },
  {
    id: nanoid(),
    name: 'NodeJS',
    icon: FaNodeJs(),
  },
  {
    id: nanoid(),
    name: 'Git',
    icon: FaGitAlt(),
  },
  {
    id: nanoid(),
    name: 'GitHub',
    icon: FaGithub(),
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    icon: SiJavascript(),
  },
  { id: nanoid(), name: 'HTML', icon: FaHtml5() },
  {
    id: nanoid(),
    name: 'CSS',
    icon: SiCss3(),
  },
  {
    id: nanoid(),
    name: 'SASS',
    icon: FaSass(),
  },
  { id: nanoid(), name: 'Material-UI', icon: SiMaterialUi() },
  {
    id: nanoid(),
    name: 'Bootstrap',
    icon: FaBootstrap(),
  },
  {
    id: nanoid(),
    name: 'Styled Components',
    icon: SiStyledComponents(),
  },
  {
    id: nanoid(),
    name: 'Ruby',
    icon: SiRuby(),
  },
  {
    id: nanoid(),
    name: 'Rails',
    icon: SiRails(),
  },
  {
    id: nanoid(),
    name: 'Jest',
    icon: SiJest(),
  },
  {
    id: nanoid(),
    name: 'Linux',
    icon: FaLinux(),
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo-list.png',
    title: 'To-Do List',
    info: 'The ubiquitous javascript app',
    info2: 'Inspired by the background picture found on unsplash',
    url: 'https://jasont-todo-list.netlify.app',
    repo: 'https://github.com/jasont01/todo-list', // if no repo, the button will not show up
    skillTags: [
      {
        id: nanoid(),
        name: 'react',
        icon: FaReact(),
      },
      {
        id: nanoid(),
        name: 'node',
        icon: FaNodeJs(),
      },
      {
        id: nanoid(),
        name: 'firebase',
        icon: SiFirebase(),
      },
    ],
    footnote: '',
  },
  {
    id: nanoid(),
    img: 'memory-game.png',
    title: 'Memory Game',
    info: 'A simple memory game with a CriticalRole theme',
    info2:
      "The cards shuffle when you click on one. Get points for clicking on a card, but don't click the same card twice!",
    url: 'https://jasont01.github.io/memory-game/',
    repo: 'https://github.com/jasont01/memory-game',
    skillTags: [
      { id: nanoid(), name: 'react', icon: FaReact() },
      { id: nanoid(), name: 'sass', icon: FaSass() },
    ],
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
    skillTags: [
      {
        id: nanoid(),
        name: 'ruby',
        icon: SiRuby(),
      },
      {
        id: nanoid(),
        name: 'rails',
        icon: SiRails(),
      },
      {
        id: nanoid(),
        name: 'database',
        icon: FaDatabase(),
      },
      {
        id: nanoid(),
        name: 'bootstrap',
        icon: FaBootstrap(),
      },
      {
        id: nanoid(),
        name: 'facebook-api',
        icon: FaFacebook(),
      },
    ],
    footnote: "May take a moment to load. Hosted with heroku's hobby plan",
  },
  {
    id: nanoid(),
    img: 'odin-airlines.png',
    title: 'Odin Airlines',
    info: 'A mock flight booking app',
    info2: 'Where would you like to go?',
    url: 'https://odin-airlines.herokuapp.com/',
    repo: 'https://github.com/jasont01/odin-flight-booker',
    skillTags: [
      {
        id: nanoid(),
        name: 'ruby',
        icon: SiRuby(),
      },
      {
        id: nanoid(),
        name: 'rails',
        icon: SiRails(),
      },
      {
        id: nanoid(),
        name: 'database',
        icon: FaDatabase(),
      },
      {
        id: nanoid(),
        name: 'bootstrap',
        icon: FaBootstrap(),
      },
    ],
    footnote: "May take a moment to load. Hosted with heroku's hobby plan",
  },
]

// CONTACT DATA
export const contactData = {
  cta: 'Write me an e-mail at:',
  btn: '',
  email: 'contact@jasont.us',
}

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
}
