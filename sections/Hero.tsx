import { Box, createStyles } from '@mantine/core'
import Fade from '../components/Fade'
import { FaAngleDown } from 'react-icons/fa'

const useStyles = createStyles((theme) => ({
  hero: {
    fontSize: '5.6rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: '4rem',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: '3.6rem',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: '3.5rem',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '2.8rem',
    },
  },
}))

const Hero: React.FC = () => {
  const { classes } = useStyles()

  return (
    <Box
      component="section"
      id="top"
      sx={(theme) => ({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: theme.fn.gradient(),
      })}
    >
      <Box
        className={classes.hero}
        sx={{
          fontWeight: 700,
          marginBottom: '3.2rem',
          textAlign: 'left',
          position: 'relative',
          left: '3em',
        }}
      >
        <Fade y={30}>
          <Box
            component="span"
            sx={(theme) => ({
              position: 'absolute',
              color: theme.white,
              left: '1em',
              top: '.6em',
              zIndex: 1,
            })}
          >
            {'Thompson'}
          </Box>
        </Fade>
        <Fade x={-30}>
          <Box
            component="span"
            sx={(theme) => ({
              position: 'absolute',
              color: theme.colors.primary[0],
              zIndex: 2,
            })}
          >
            {'Jason'}
          </Box>
        </Fade>
        <Fade delay={2} duration={1}>
          <Box
            sx={(theme) => ({
              position: 'relative',
              left: '-.4em',
              border: `3px solid ${theme.white}`,
              height: '2.2em',
              width: '7.4em',
            })}
          ></Box>
        </Fade>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '1em',
          left: '46vw',
          fontSize: '4rem',
          color: theme.colors.primary[0],
        })}
      >
        <Fade delay={3.5} duration={2}>
          <FaAngleDown />
        </Fade>
      </Box>
    </Box>
  )
}
export default Hero
