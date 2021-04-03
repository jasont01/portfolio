import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context';
import Title from './Title';
import ProjectImg from './ProjectImg';

const Projects = ({ isDesktop }) => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id='projects'>
      <Container>
        <div className='project-wrapper'>
          <Title title='Projects' />
          {projects.map((project, idx) => {
            const {
              id,
              title,
              info,
              info2,
              url,
              repo,
              img,
              skillTags,
              footnote,
            } = project;
            const direction = idx % 2 ? 'row-reverse' : 'unset';
            return (
              <Row key={id} style={{ flexDirection: direction }}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={!isDesktop}
                    duration={1000}
                    delay={500}
                    distance='30px'
                  >
                    <div className='project-wrapper__text'>
                      <h3 className='project-wrapper__text-title'>
                        {title || 'Project Title'}
                      </h3>
                      <div className='skill-tags'>
                        {skillTags.map((tag) => {
                          return (
                            <div key={tag.id} className='skill-tag'>
                              <span className='tag-icon'>{tag.icon}</span>
                              <span className='tag-name'>{tag.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className='mb-4'>{info2 || ''}</p>
                      </div>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cta-btn'
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          className='cta-btn ml-3'
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                    {footnote && <div className='footnote'>{footnote}</div>}
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isDesktop}
                    duration={1000}
                    delay={1000}
                    distance='30px'
                  >
                    <div className='project-wrapper__image'>
                      <div className={`thumbnail ${direction}`}>
                        <ProjectImg alt={title} filename={img} />
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
