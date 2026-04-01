import Image from 'next/image';
import React from 'react';

const experiences = [
  {
    company: 'SMARTQR TECHNOLOGIES PVT LTD',
    role: 'Machine Learning Engineer',
    location: 'Pune, India',
    period: 'Jun 2025 - Present',
    duration: 'Ongoing',
    achievements: [
      'Engineered end-to-end ML solutions with TensorFlow',
      'Improved model robustness with advanced computer vision',
    ],
  },
  {
    company: 'CREATOR RESEARCH PVT LTD',
    role: 'Full Stack Intern',
    location: 'Remote',
    period: 'Aug 2024 - Dec 2024',
    duration: '5 months',
    achievements: [
      'Architected a full-stack e-learning platform using React and Node.js',
      'Enhanced security with OAuth2 and boosted completion by 30%',
    ],
  },
  {
    company: 'INTEGRATED ACTIVE MONITORING PVT LTD',
    role: 'Python Developer',
    location: 'Pune, India',
    period: 'Aug 2023 - Apr 2024',
    duration: '9 months',
    achievements: [
      'Developed an IoT backend and BLE gateway network',
      'Improved system efficiency by 15% with batching and compression',
    ],
  },
];

const certifications = [
  {
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    image: '/assets/deloitte.jpeg',
    alt: 'Deloitte logo',
    period: 'Feb 2025',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Bd9QLbj9tE2hkm2MW_1739884741829_completion_certificate.pdf',
  },
  {
    title: 'IBM - Data Engineering Professional Certification',
    image: '/assets/ibm-logo-18914.png',
    alt: 'IBM logo',
    period: 'Nov 2024',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/EWPZX1ZBVEX2',
  },
  {
    title: 'Google - Android Developers Virtual Internship',
    image: '/assets/google.png',
    alt: 'Google logo',
    period: 'Apr 2024 - Jun 2024',
    href: 'https://drive.google.com/file/d/1-HyTsLAyLtimkzlaa37AlLGlmw3BDJZ9/view?usp=sharing',
  },
  {
    title: 'Google - AI/ML Virtual Internship',
    image: '/assets/google.png',
    alt: 'Google logo',
    period: 'Jan 2024 - Mar 2024',
    href: 'https://drive.google.com/file/d/12pKnGIuYNqOs8LyQrFJ4UmlSZ6JaCBUs/view?usp=sharing',
  },
  {
    title: 'Data Structures and Algorithms using Java',
    image: '/assets/java.png',
    alt: 'Java logo',
    period: 'Mar 2023',
    href: 'https://drive.google.com/file/d/127lDBx3SE41rJV9q68mJCVihTthS4O-J/view?usp=sharing',
  },
];

const Skills = () => {
  return (
    <section id='skills' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] mx-auto grid gap-10'>
        <div className='game-panel p-6 md:p-8'>
          <p className='section-kicker'>Career Tree</p>
          <h2 className='mt-3'>Experience Timeline</h2>
          <div className='grid lg:grid-cols-3 gap-6 mt-8'>
            {experiences.map((exp, idx) => (
              <article key={exp.company} className='game-panel-soft p-6'>
                <div className='flex items-center justify-between'>
                  <span className='hud-chip'>Stage {idx + 1}</span>
                  <span className='text-sm uppercase tracking-[0.16em] text-[#59f0c5]'>{exp.duration}</span>
                </div>
                <h3 className='text-2xl font-heading mt-5'>{exp.role}</h3>
                <p className='text-sm uppercase tracking-[0.18em] text-[#ff8a2a] mt-2'>{exp.company}</p>
                <div className='terminal-line mt-5 space-y-2'>
                  <p><span className='accent-text'>Location:</span> {exp.location}</p>
                  <p><span className='accent-text'>Period:</span> {exp.period}</p>
                </div>
                <ul className='mt-5 space-y-3'>
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className='terminal-line flex gap-3'>
                      <span className='text-[#59f0c5]'>+</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div id='certifications' className='game-panel p-6 md:p-8'>
          <p className='section-kicker'>Achievements</p>
          <h2 className='mt-3'>Certification Unlocks</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {certifications.map((cert) => (
              <article key={cert.title} className='game-panel-soft p-5 flex items-center gap-4'>
                <Image src={cert.image} width={52} height={52} alt={cert.alt} />
                <div>
                  <h3 className='text-lg font-heading'>{cert.title}</h3>
                  <p className='terminal-line mt-2'>{cert.period}</p>
                  <a href={cert.href} target='_blank' rel='noreferrer' className='inline-flex mt-3 text-[#59f0c5] uppercase tracking-[0.16em] text-sm font-semibold hover:text-[#ff8a2a]'>
                    View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
