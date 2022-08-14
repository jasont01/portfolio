import { Box, Center, Title, Container, useMantineTheme } from '@mantine/core'
import { IconType } from 'react-icons'
import Fade from '../components/Fade'
import Flip from '../components/Flip'

type Props = {
  skills: { name: string; icon: IconType | null }[]
}

const Skills: React.FC<Props> = ({ skills }) => {
  const theme = useMantineTheme()
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundImage: theme.fn.gradient(),
        padding: '5rem 0',
      })}
    >
      <Center sx={{ flexDirection: 'column' }}>
        <Title
          sx={(theme) => ({
            color: theme.colors.primary[0],
            textTransform: 'uppercase',
            textShadow: '6px 5px #1b1b1b',
          })}
        >
          Skills
        </Title>
        <Container
          size={'xl'}
          sx={(theme) => ({
            color: theme.white,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          })}
        >
          {skills.map((skill) => (
            <Fade key={skill.name} y={30} delay={0.5} duration={0.6}>
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '10rem',
                  height: '10rem',
                  margin: '2em',
                  borderRadius: '2rem',
                  background: theme.black,
                  boxShadow: theme.shadows.xl,
                })}
              >
                <Flip delay={0.8} deg={180}>
                  <Box
                    sx={{
                      fontSize: '3em',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all .2s ease-in-out',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  >
                    {skill.icon && (
                      <skill.icon color={theme.colors.primary[0]} />
                    )}
                    <Title order={6}>{skill.name}</Title>
                  </Box>
                </Flip>
              </Box>
            </Fade>
          ))}
        </Container>
      </Center>
    </Box>
  )
}
export default Skills
