import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.png';

const aboutStats = [
  'Research to production mindset',
  'Open-source builder',
  'Computer vision and LLM workflows',
];

const About = () => {
  return (
    <section id='about' className='w-full px-3 py-14 md:py-20'>
      <div className='max-w-[1240px] m-auto grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center'>
        <div className='game-panel p-6 md:p-8'>
          <p className='section-kicker'>Player Bio</p>
          <h2 className='py-4 text-5xl md:text-6xl font-black'>About This Build</h2>
          <p className='terminal-line'>
            I&apos;m Divyam Chandak, a Machine Learning Engineer specializing in computer vision and language models. I build scalable ML systems and open-source models published on Hugging Face that bridge research and production.
          </p>
          <p className='terminal-line mt-4'>
            My day-to-day work covers model development with PyTorch and TensorFlow, dataset engineering, and deploying models to production environments. I focus on reproducible experiments, readable code, and pragmatic model design that solves real-world problems.
          </p>
          <p className='terminal-line mt-4'>
            I actively publish and maintain open-source projects on Hugging Face and GitHub, write technical articles, and present talks to share what I learn. If you&apos;d like to collaborate or have questions, please reach out. I&apos;m happy to help.
          </p>

          <div className='flex flex-wrap gap-3 mt-8'>
            {aboutStats.map((item) => (
              <span key={item} className='hud-chip'>{item}</span>
            ))}
          </div>
        </div>

        <div className='game-panel-soft p-4 md:p-6'>
          <div className='rounded-[1.2rem] overflow-hidden border border-[rgba(89,240,197,0.18)] float-card'>
            <Image src={AboutImg} width={420} height={420} className='w-full h-auto object-cover' alt='Portrait of Divyam Chandak' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
