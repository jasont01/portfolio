import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        white: 'cornsilk',
        black: '#1b1b1b',
        colors: {
          primary: ['#bada55'],
        },
        defaultGradient: {
          from: '#141E30',
          to: '#243B55',
          deg: 135,
        },
        fontFamily: 'Montserrat',
        fontFamilyMonospace: 'Source Code Pro',
        shadows: {
          xl: 'inset -5px 5px 10px #0b0b0b, inset 5px -5px 10px #2b2b2b',
        },
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
