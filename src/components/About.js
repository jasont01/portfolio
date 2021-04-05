import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import PortfolioContext from '../context';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Title from './Title';

const About = ({ isDesktop }) => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section id='about'>
      <Container>
        <Title title='About Me' />
        <Row className='about-wrapper'>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance='30px'>
              <div className='about-wrapper__image'>
                <StaticImage
                  src={`../images/profile.jpg`}
                  width={350}
                  alt='profile'
                  className='profile-img'
                />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={!isDesktop}
              duration={1000}
              delay={1000}
              distance='30px'
            >
              <div className='about-wrapper__info'>
                <p className='about-wrapper__info-text'>
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className='about-wrapper__info-text'>
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                {paragraphThree && (
                  <p className='about-wrapper__info-text'>{paragraphThree}</p>
                )}
                <span className='d-flex mt-3'>
                  {resume && (
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='cta-btn mr-3'
                      href={resume}
                    >
                      Résumé
                    </a>
                  )}
                  <Link
                    to={'contact'}
                    smooth
                    duration={1000}
                    className='cta-btn'
                  >
                    Contact
                  </Link>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
