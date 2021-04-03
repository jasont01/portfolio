import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../context';
import ScrollDown from './ScrollDown';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { firstName, lastName } = hero;

  return (
    <section id='hero' className='jumbotron'>
      <Container>
        <div className='hero-title'>
          <Fade left duration={1200} delay={500} distance='30px'>
            <span className='first-name'>{firstName}</span>
          </Fade>
          <Fade bottom duration={1200} delay={500} distance='30px'>
            <span className='last-name'>{lastName}</span>
          </Fade>
          <Fade duration={1000} delay={2000}>
            <div className='hero-border'></div>
          </Fade>
        </div>
      </Container>
      <div id='scroll' className='scroll-wrapper'>
        <Fade duration={200} delay={3800}>
          <ScrollDown to='about' />
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
