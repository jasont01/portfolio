import {
  FaHtml5,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap,
  FaCodepen,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

import {
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiMaterialui,
  SiTypescript,
} from 'react-icons/si'

import projectImg from './assets/projectImages'

/**
 * SKILLS
 */
export const skills = [
  { name: 'React', icon: FaReact },
  { name: 'NodeJS', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'ExpressJS', icon: null },
  { name: 'NextJS', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'SASS', icon: FaSass },
  { name: 'MaterialUI', icon: SiMaterialui },
  { name: 'Mantine', icon: null },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Linux', icon: FaLinux },
]

/**
 * PROJECTS
 */
export const projects = [
  {
    title: 'Notes App',
    img: projectImg.webnotes,
    desc: 'A simple MERN-stack app for notes',
    url: 'https://webnotes.fly.dev',
    git: 'https://github.com/jasont01/notes',
    tags: [
      { name: 'react', icon: FaReact },
      { name: 'express', icon: null },
      { name: 'mongodb', icon: SiMongodb },
      { name: 'node', icon: FaNodeJs },
      { name: 'material-ui', icon: SiMaterialui },
    ],
    footnote: '',
  },
  {
    title: 'ToDo List',
    img: projectImg.todolist,
    desc: 'The ubiquitous javascript app. Inspired by the background picture found on unsplash',
    url: 'https://todolist.fly.dev',
    git: 'https://github.com/jasont01/todo-list',
    tags: [
      { name: 'react', icon: FaReact },
      { name: 'express', icon: null },
      { name: 'mongodb', icon: SiMongodb },
      { name: 'node', icon: FaNodeJs },
      { name: 'material-ui', icon: SiMaterialui },
    ],
    footnote: 'desktop only',
  },
  {
    title: 'Portfolio',
    img: projectImg.portfolio,
    desc: 'This site!',
    url: null,
    git: 'https://github.com/jasont01/portfolio',
    tags: [
      { name: 'typescript', icon: SiTypescript },
      { name: 'next', icon: SiNextdotjs },
      { name: 'mantine', icon: null },
    ],
    footnote: '',
  },
  {
    title: 'Memory Game',
    img: projectImg.memorygame,
    desc: 'A simple memory game with a CriticalRole theme. The cards shuffle when you click on one. Get points for clicking on a card, but dont click the same card twice!',
    url: 'https://jasont01.github.io/memory-game/',
    git: 'https://github.com/jasont01/memory-game',
    tags: [
      { name: 'react', icon: FaReact },
      { name: 'sass', icon: FaSass },
    ],
    footnote: '',
  },
]

/**
 * SOCIALS
 */
export const socials = [
  {
    name: 'github',
    url: 'https://github.com/jasont01',
    icon: FaGithub,
  },
  {
    name: 'codepen',
    url: 'https://codepen.io/jasont01',
    icon: FaCodepen,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jasont01/',
    icon: FaLinkedin,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/jasont01',
    icon: FaTwitter,
  },
]
