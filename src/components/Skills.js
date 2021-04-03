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
                <div key={id} className='skill_item'>
                  <Flip left cascade delay={1000}>
                    <div className='skill_item_inner_wrapper'>
                      <img src={`/icons/${icon}`} alt={name} />
                      <h4 className='skill_name'>{name}</h4>
                    </div>
                  </Flip>
                </div>
              );
            })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
