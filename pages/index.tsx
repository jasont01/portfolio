import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../sections/Hero'

import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

import { skills, projects, socials } from '../data'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason Thompson | Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer socials={socials} />
    </>
  )
}

export default Home
