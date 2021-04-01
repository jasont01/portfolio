import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context';

const Hero = ({ isDesktop }) => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id='hero' className='jumbotron'>
      <Container>
        <Fade
          left={isDesktop}
          bottom={!isDesktop}
          duration={1000}
          delay={500}
          distance='30px'
        >
          <h1 className='hero-title'>
            {title || 'Hi, my name is'}{' '}
            <span className='text-color-main'>{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
      </Container>
      <Fade bottom={true} duration={800} delay={1000} distance='30px'>
        <Link to='about' smooth duration={1000}>
          <div class='box'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </Fade>
    </section>
  );
};

export default Hero;
