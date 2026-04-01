import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Models from '../components/Models'
import Blogs from '../components/Research'
import Newsletter from '../components/Newsletter'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Divyam Chandak</title>
        <meta name="description" content="Portfolio Website of Divyam Chandak." />
      </Head>
    <Main />
    <About />
  <Models />
  <Skills />
    <Projects />
  <Blogs />
    <Newsletter/>
    <Contact />
    </div>
  )
}


