import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../context';
import Title from './Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id='contact'>
      <Container>
        <Title title='Contact' />
        <Fade bottom duration={1000} delay={800} distance='30px'>
          <div className='contact-wrapper'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='cta-btn cta-btn_dark'
              href={`mailto:${email}`}
            >
              {btn || "Let's Talk"}
            </a>

            <div className='contact-wrapper__text'>
              {cta || 'Would you like to work with me?'}

              <div>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-email'
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
              <p className='contact-seperator'>-OR-</p>
              <p className='contact-social'>
                Reach me through the social media links below
              </p>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
