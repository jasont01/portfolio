import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context';

const Hero = ({ isDesktop }) => {
  const { hero } = useContext(PortfolioContext);
  const { title, firstName, lastName, subtitle } = hero;

  return (
    <section id='hero' className='jumbotron'>
      <Container>
        <div className='hero-title'>
          <Fade left duration={1200} delay={500} distance='30px'>
            <span className='first-name'>Jason</span>
          </Fade>
          <Fade bottom duration={1200} delay={500} distance='30px'>
            <span className='last-name'>Thompson</span>
          </Fade>
          <Fade duration={1000} delay={2000}>
            <div className='hero-border'></div>
          </Fade>
        </div>
      </Container>
      <div className='scroll-wrapper'>
        <Fade duration={200} delay={3800}>
          <Link to='about' smooth duration={1000}>
            <div className='box'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
