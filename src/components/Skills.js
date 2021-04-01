import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from './Title';
import PortfolioContext from '../context';
import Flip from 'react-reveal/Flip';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id='skills'>
      <Container>
        <Title title='Skills' />
        <Fade bottom duration={1000} delay={600} distance='30px'>
          <div className='skills-wrapper'>
            {skills.map((skill) => {
              const { id, name, icon } = skill;
              return (
                <Flip left cascade delay={2000}>
                  <div key={id} className='skill_item'>
                    <img src={`/icons/${icon}`} alt={name} />
                    <h2 className='skill_name'>{name}</h2>
                  </div>
                </Flip>
              );
            })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
