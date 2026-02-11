import Image from 'next/image';
import React from 'react';
import dpai from '../public/assets/skills/dpai.png';
import google from '../public/assets/skills/google.png'

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: 'SMARTQR TECHNOLOGIES PVT LTD',
      role: 'Machine Learning Engineer',
      location: 'Pune, India',
      period: 'Jun 2025 – Present',
      duration: '0 mons',
      achievements: [
        'Engineered end-to-end ML solutions with TensorFlow',
        'Improved model robustness with advanced computer vision'
      ]
    },
    {
      company: 'CREATOR RESEARCH PVT LTD',
      role: 'Full Stack Intern',
      location: 'Remote',
      period: 'Aug 2024 – Dec 2024',
      duration: '5 mons',
      achievements: [
        'Architected full-stack e-learning platform using React & Node.js',
        'Enhanced security with OAuth2 and boosted completion by 30%'
      ]
    },
    {
      company: 'INTEGRATED ACTIVE MONITORING PVT LTD',
      role: 'Python Developer',
      location: 'Pune, India',
      period: 'Aug 2023 – Apr 2024',
      duration: '9 mons',
      achievements: [
        'Developed IoT backend and BLE Gateway Network',
        'Improved system efficiency by 15% with batching & compression'
      ]
    }
  ];

  return (
    <section id='experience' className='w-full py-20' style={{backgroundColor: '#f5f7fa'}}>
      <div className='max-w-[1240px] mx-auto px-2'>
        <div className='text-center mb-12'>
          <p className='text-xl tracking-widest uppercase text-[#ff9100] font-bold'>Experience</p>
          <h2 className='text-5xl md:text-6xl font-black mt-4'>Career Journey</h2>
          <p className='text-gray-600 text-lg mt-4 max-w-2xl mx-auto'>My professional journey and key milestones</p>
        </div>

        {/* Vertical Timeline - Simple Style */}
        <div className='relative max-w-3xl mx-auto'>
          {/* Left connecting line */}
          <div className='absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff9100] via-[#ffb24d] to-[#ff9100]'></div>

          {/* Timeline items */}
          <div className='space-y-8'>
            {experiences.map((exp, idx) => (
              <div key={idx} className='relative pl-24 md:pl-32'>
                {/* Timeline dot */}
                <div className='absolute left-0 md:left-1 top-2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#ff9100] to-[#ffb24d] flex items-center justify-center border-4 border-white shadow-lg'>
                  <span className='text-white font-black text-lg'>{idx + 1}</span>
                </div>

                {/* Content card */}
                <div className='bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ff9100] hover:-translate-y-1'>
                  <div className='mb-4'>
                    <h3 className='text-[#ff9100] text-sm font-bold uppercase tracking-widest'>{exp.company}</h3>
                    <p className='text-xl md:text-2xl font-black text-gray-900 mt-1'>{exp.role}</p>
                  </div>

                  <div className='space-y-2 mb-4 text-sm text-gray-600'>
                    <p className='flex items-center gap-2'>
                      <span className='text-[#ff9100]'>📍</span>
                      {exp.location}
                    </p>
                    <p className='flex items-center gap-2'>
                      <span className='text-[#ff9100]'>📅</span>
                      {exp.period}
                    </p>
                    <p className='flex items-center gap-2'>
                      <span className='text-[#ff9100]'>⏱️</span>
                      {exp.duration}
                    </p>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <p className='text-xs uppercase tracking-widest font-bold text-gray-700 mb-3'>Key Achievements</p>
                    <ul className='space-y-2'>
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className='flex gap-2 text-sm text-gray-700'>
                          <span className='text-[#ff9100] font-bold flex-shrink-0'>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id='skills' className='w-full h-full mb-[100px]' style={{backgroundColor: "#f5f7fa"}}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          20% { transform: translateX(-1px); }
          40% { transform: translateX(1px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
        .vibrate:hover {
          animation: vibrate 0.35s linear;
        }
      `}</style>
      
      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Certifications Section */}
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-2 py-20'>
        <h3 className='py-4 text-4xl font-bold mb-4'>Certifications</h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Deloitte */}
            <div className='p-0 shadow-xl hover:scale-105 ease-in duration-300' data-sr-id='17' style={{ borderRadius: '1.5rem' }}>
              <div className='p-4' style={{ borderRadius: '1.5rem', background: ' #f2f2f2' }}>
                <div className='flex flex-col items-start'>
                  <h3 className='text-left' style={{ fontSize: '20px' }}>Deloitte Australia - Data Analytics Job Simulation</h3>
                </div>
              </div>
              <div className='p-4 rounded-b-xl flex items-center justify-center gap-4' style={{ borderRadius: '1.5rem' }}>
                <Image className='vibrate' src={'/assets/deloitte.jpeg'} width={48} height={48} alt='deloitte' />
                <div className='text-sm text-left'>
                  <div>Feb 2025</div>
                  <div className='mt-1'><a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Bd9QLbj9tE2hkm2MW_1739884741829_completion_certificate.pdf' target='_blank' rel='noreferrer' className='text-blue-600 underline'>Certificate 🔗</a></div>
                </div>
              </div>
            </div>

            {/* IBM */}
            <div className='p-0 shadow-xl hover:scale-105 ease-in duration-300' data-sr-id='17' style={{ borderRadius: '1.5rem' }}>
              <div className='p-4' style={{ borderRadius: '1.5rem', background: ' #f2f2f2' }}>
                <div className='flex flex-col items-start'>
                  <h3 className='text-left' style={{ fontSize: '20px' }}>IBM - Data Engineering Professional Certification</h3>
                </div>
              </div>
              <div className='p-4 rounded-b-xl flex items-center justify-center gap-4' style={{ borderRadius: '1.5rem' }}>
                <Image className='vibrate' src={'/assets/ibm-logo-18914.png'} width={48} height={48} alt='ibm' />
                <div className='text-sm text-left'>
                  <div>Nov 2024</div>
                  <div className='mt-1'><a href='https://www.coursera.org/account/accomplishments/professional-cert/certificate/EWPZX1ZBVEX2' target='_blank' rel='noreferrer' className='text-blue-600 underline'>Certificate 🔗</a></div>
                </div>
              </div>
            </div>

            {/* Google Android Internship */}
            <div className='p-0 shadow-xl hover:scale-105 ease-in duration-300' data-sr-id='17' style={{ borderRadius: '1.5rem' }}>
              <div className='p-4' style={{ borderRadius: '1.5rem', background: ' #f2f2f2' }}>
                <div className='flex items-center gap-3'>
                  <h3 className='text-left' style={{ fontSize: '20px' }}>Google - Android Developers Virtual Internship</h3>
                </div>
              </div>
              <div className='p-4 rounded-b-xl flex items-center justify-center gap-4' style={{ borderRadius: '1.5rem' }}>
                <Image className='vibrate' src={'/assets/google.png'} width={48} height={48} alt='google' />
                <div className='text-sm text-left'>
                  <div>Apr 2024 – Jun 2024</div>
                  <div className='mt-1'><a href='https://drive.google.com/file/d/1-HyTsLAyLtimkzlaa37AlLGlmw3BDJZ9/view?usp=sharing' target='_blank' rel='noreferrer' className='text-blue-600 underline'>Certificate 🔗</a></div>
                </div>
              </div>
            </div>

            {/* Google AI/ML Internship */}
            <div className='p-0 shadow-xl hover:scale-105 ease-in duration-300' data-sr-id='17' style={{ borderRadius: '1.5rem' }}>
              <div className='p-4' style={{ borderRadius: '1.5rem', background: ' #f2f2f2' }}>
                <div className='flex items-center gap-3'>
                  <h3 className='text-left' style={{ fontSize: '20px' }}>Google - AI/ML Virtual Internship</h3>
                </div>
              </div>
              <div className='p-4 rounded-b-xl flex items-center justify-center gap-4' style={{ borderRadius: '1.5rem' }}>
                <Image className='vibrate' src={'/assets/google.png'} width={48} height={48} alt='google' />
                <div className='text-sm text-left'>
                  <div>Jan 2024 – Mar 2024</div>
                  <div className='mt-1'><a href='https://drive.google.com/file/d/12pKnGIuYNqOs8LyQrFJ4UmlSZ6JaCBUs/view?usp=sharing' target='_blank' rel='noreferrer' className='text-blue-600 underline'>Certificate 🔗</a></div>
                </div>
              </div>
            </div>

            {/* DSA using Java */}
            <div className='p-0 shadow-xl hover:scale-105 ease-in duration-300' data-sr-id='17' style={{ borderRadius: '1.5rem' }}>
              <div className='p-4' style={{ borderRadius: '1.5rem', background: ' #f2f2f2' }}>
                <div className='flex flex-col items-start'>
                  <h3 className='text-left' style={{ fontSize: '20px' }}>Data Structures and Algorithms using Java</h3>
                </div>
              </div>
              <div className='p-4 rounded-b-xl flex items-center justify-center gap-4' style={{ borderRadius: '1.5rem' }}>
                <Image className='vibrate' src={'/assets/java.png'} width={48} height={48} alt='java' />
                <div className='text-sm text-left'>
                  <div>Mar 2023</div>
                  <div className='mt-1'><a href='https://drive.google.com/file/d/127lDBx3SE41rJV9q68mJCVihTthS4O-J/view?usp=sharing' target='_blank' rel='noreferrer' className='text-blue-600 underline'>Certificate 🔗</a></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Skills;
