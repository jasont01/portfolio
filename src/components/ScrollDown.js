import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const ScrollDown = ({ to }) => {
  useEffect(() => {
    const scroll = document.getElementById('scroll');
    function onScroll() {
      if (window.scrollY > 100) {
        scroll.classList.add('hidden');
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div id='scroll' className='scroll-wrapper'>
      <Link to={to} smooth duration={1000}>
        <div className='box'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default ScrollDown;
