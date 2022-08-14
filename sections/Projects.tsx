import { Box, Grid, Title, Text } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import Button from '../components/Button'
import Fade from '../components/Fade'
import Tag from '../components/Tag'

type Props = {
  projects: {
    title: string
    img: StaticImageData
    desc: string
    url: string | null
    git: string | null
    tags: { name: string; icon: IconType | null }[]
    footnote: string
  }[]
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundColor: theme.black,
        color: theme.white,
        boxShadow: theme.shadows.xl,
        padding: '5rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Title
        sx={(theme) => ({
          color: theme.colors.primary[0],
          textTransform: 'uppercase',
        })}
      >
        Projects
      </Title>
      {projects.map((project, idx) => (
        <Grid
          key={project.title}
          my="5em"
          sx={{
            display: 'flex',
            flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
            width: '90%',
            maxWidth: '1200px',
          }}
        >
          <Grid.Col lg={4}>
            <Fade x={idx % 2 === 0 ? -30 : 30}>
              <Title mb={'.2em'}>{project.title}</Title>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', fontSize: '.8em' }}>
                {project.tags.map((tag) => (
                  <Tag key={tag.name} name={tag.name}>
                    {tag.icon && (
                      <Box sx={{ width: '16px', height: '16px' }}>
                        <tag.icon />
                      </Box>
                    )}
                  </Tag>
                ))}
              </Box>
              <Text sx={{ maxWidth: '100%' }}>{project.desc}</Text>
              <Box mt="2em" mb="1em">
                {project.url && <Button link={project.url}>See Live</Button>}
                {project.git && <Button link={project.git}>Source Code</Button>}
              </Box>
              <Text size="xs" sx={{ maxWidth: '70%' }}>
                {project.footnote}
              </Text>
            </Fade>
          </Grid.Col>
          <Grid.Col lg={8}>
            <Fade x={idx % 2 === 0 ? 30 : -30} y={30}>
              <Image
                style={{ borderRadius: '95% 5% 95% 5% / 5% 95% 5% 95%' }}
                src={project.img}
                width={600}
                height={400}
              />
            </Fade>
          </Grid.Col>
        </Grid>
      ))}
    </Box>
  )
}
export default Projects
