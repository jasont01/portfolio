import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import PortfolioContext from '../context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className='footer navbar-static-bottom'>
      <Container>
        <span className='back-to-top'>
          <Link to='hero' smooth duration={1000}>
            <i className='fa fa-angle-up fa-2x' aria-hidden='true' />
          </Link>
        </span>
        <div className='social-links'>
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <Flip>
          <div className='logo'>
            <span className='first'>J</span>
            <span className='last'>T</span>
            <div className='logo-border'></div>
          </div>
        </Flip>
        <p className='footer__text'>
          © {new Date().getFullYear()} -{' '}
          <a
            href='https://github.com/jasont01'
            target='_blank'
            rel='noopener noreferrer'
          >
            Jason Thompson
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
