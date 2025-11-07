import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Models from '../components/Models'
import Research from '../components/Research'
import Patent from '../components/Patents'
import Newsletter from '../components/Newsletter'



export default function Home() {
  return (
    <div style={{backgroundColor:"#ffff"}}>
      <Head>
        <title>Divyam Chandak Dixit</title>
        <meta name="description" content="Portfolio Website of Divyam Chandak Dixit." />
        <link rel="icon" href="public/fav.png" />
      </Head>
    <Main />
    <About />
    <Models />
    <Patent />
    <Skills />
    <Projects />
    <Research />
    <Newsletter/>
    <Contact />
    </div>
  )
}

