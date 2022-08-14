import { Box, Center, Container, Divider, Text } from '@mantine/core'
import Image from 'next/image'
import { IconType } from 'react-icons'
import { FaAngleUp } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll'
import Flip from '../components/Flip'

type Props = {
  socials: { name: string; url: string; icon: IconType }[]
}

const Footer: React.FC<Props> = ({ socials }) => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundColor: theme.black,
        color: theme.white,
        boxShadow: theme.shadows.xl,
        padding: '5rem 0',
      })}
    >
      <Center sx={{ flexDirection: 'column' }}>
        <Box
          sx={(theme) => ({
            color: theme.colors.primary[0],
            fontSize: '3rem',
            transition: 'all 0.2s ease-in',
            '&:hover': {
              color: theme.colors.primary[0],
              transform: 'translateY(-3px)',
            },
          })}
        >
          <Link to="top" smooth duration={1000}>
            <FaAngleUp />
          </Link>
        </Box>
        <Container sx={{ display: 'flex', marginTop: '1rem' }}>
          {socials.map((social) => (
            <Box
              key={social.name}
              sx={(theme) => ({
                margin: '1rem 1em',
                fontSize: '3rem',
                transition: 'all 0.2s ease-in',
                '&:hover': {
                  color: theme.colors.primary[0],
                  transform: 'translateY(-3px)',
                },
              })}
            >
              <a
                href={social.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={social.name}
              >
                <social.icon />
              </a>
            </Box>
          ))}
        </Container>
        <Divider
          sx={{
            border: 0,
            borderTop: '2px solid rgba(255,255,255,.1)',
            marginBottom: '1rem',
            marginTop: '1rem',
            width: '50%',
          }}
        />
        <Box sx={{ padding: '1rem' }}>
          <Flip>
            <Image src={logo} width={80} height={80} />
          </Flip>
        </Box>
        <Text align="center">© {new Date().getFullYear()} Jason Thompson</Text>
        <Text align="center">All rights reserved</Text>
      </Center>
    </Box>
  )
}
export default Footer
