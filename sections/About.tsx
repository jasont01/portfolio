import Image from 'next/image'
import { Box, Grid, Title, Text, Container } from '@mantine/core'
import Fade from '../components/Fade'
import profileImg from '../assets/profile.jpg'
import Button from '../components/Button'
import { Link } from 'react-scroll'

const About: React.FC = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundColor: theme.black,
        color: theme.white,
        boxShadow: theme.shadows.xl,
        paddingTop: '5em',
        paddingBottom: '8em',
      })}
    >
      <Container size={'xl'}>
        <Fade delay={0.3}>
          <Title
            sx={(theme) => ({
              color: theme.colors.primary[0],
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '1.5em',
            })}
          >
            About Me
          </Title>
        </Fade>
        <Grid>
          <Grid.Col md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Fade y={30} delay={0.6}>
              <Box
                sx={{
                  borderRadius: '100%',
                  overflow: 'hidden',
                  width: 350,
                }}
              >
                <Image
                  src={profileImg}
                  width={350}
                  height={350}
                  alt="profile image"
                />
              </Box>
            </Fade>
          </Grid.Col>
          <Grid.Col
            md={6}
            sx={(theme) => ({
              display: 'flex',
              fontSize: '1.8rem',
              alignItems: 'center',
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                marginTop: '1em',
                padding: '0 2em',
                fontSize: '1.5rem',
              },
            })}
          >
            <Fade x={-30} delay={1}>
              <Box>
                <Text mb="2em">
                  {
                    'I am an aspiring, self-taught front-end developer who is passionate about web development and software engineering.'
                  }
                </Text>
                <Text mb="2em">
                  {
                    'I create dynamic applications and sites and enjoy solving complex problems by coming up with intuitive & elegant solutions.'
                  }
                </Text>
                <Text mb="2em">
                  {
                    'I am well-organized, results-driven and interested in working on ambitious projects with creative people.'
                  }
                </Text>
                {/* <Button link="https://jasont-resume.netlify.app/">
                  Resume
                </Button> */}
                <Link to={'contact'} smooth duration={1000}>
                  <Button anchor={false}>Contact</Button>
                </Link>
              </Box>
            </Fade>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
export default About
