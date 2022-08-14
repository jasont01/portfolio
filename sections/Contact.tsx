import { Box, Title, Text, Center } from '@mantine/core'
import Button from '../components/Button'

const Contact: React.FC = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={(theme) => ({
        backgroundImage: theme.fn.gradient(),
        padding: '5rem 0',
        color: theme.white,
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
          Contact
        </Title>

        <Box my="2em">
          <Button dark={true} size="2rem" link="mailto:contact@jasont.us">
            {"Let's Talk"}
          </Button>
        </Box>

        <Box sx={{ fontSize: '2rem', textAlign: 'center' }}>
          <Text>{'Write me an email at:'}</Text>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'mailto:contact@jasont.us'}
          >
            <Text
              sx={(theme) => ({
                fontFamily: 'Amatic SC, cursive',
                fontSize: '4em',
                '&:hover': { color: theme.colors.primary[0] },
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  fontSize: '2.5em',
                },
              })}
            >
              {'contact@jasont.us'}
            </Text>
          </a>
          <Text m="2em">-OR-</Text>
          <Text>Reach me through the social media links below</Text>
        </Box>
      </Center>
    </Box>
  )
}
export default Contact
