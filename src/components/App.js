import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import { PortfolioProvider } from '../context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 769);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero isDesktop={isDesktop} />
      <About isDesktop={isDesktop} />
      <Projects isDesktop={isDesktop} />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
