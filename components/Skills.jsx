import Image from 'next/image';
import React from 'react';
import dpai from '../public/assets/skills/dpai.png';
import google from '../public/assets/skills/google.png'

const Skills = () => {
  return (
    <section id='skills' className='w-full h-full mb-[100px]' style={{backgroundColor: "#ffff"}}>
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
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='py-4'>Experience & Certifications</h2>

        {/* EXPERIENCE SECTION */}
        <section id='experience'>
          <p className='text-xl tracking-widest uppercase text-[#ff9100] p-4'>
            Experience
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' style={{ marginBottom: '50px' }}>
            {/* SMARTQRTECHNOLOGIESPVTLTD */}
            <div className='h-full p-0' data-sr-id='17'>
              <div className='h-full p-4 rounded-xl hover:scale-105 ease-in duration-300' style={{ borderRadius: '1.5rem', backgroundColor: '#f1f3f4', boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                    <h3 className='pl-4' style={{ fontSize: '22px' }}>SMARTQR TECHNOLOGIES PVT LTD</h3>
                    <h4 className='pl-4' style={{ fontSize: '18px' }}>Machine Learning Engineer</h4>
                    <h5 className='p-4'>Pune, India · Jun 2025 – Present</h5>
                    <p className='p-4'>
                      • Engineered end-to-end Machine Learning solutions by developing and deploying TensorFlow models for image recognition and building scalable data pipelines.
                      <br />• Improved model robustness against image distortion by researching and implementing advanced computer vision algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CREATOR RESEARCHPVTLTD */}
            <div className='h-full p-0' data-sr-id='17'>
              <div className='h-full p-4 rounded-xl hover:scale-105 ease-in duration-300' style={{ borderRadius: '1.5rem', backgroundColor: '#f1f3f4', boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                    <h3 className='pl-4' style={{ fontSize: '22px' }}>CREATOR RESEARCH PVT LTD</h3>
                    <h4 className='pl-4' style={{ fontSize: '18px' }}>Full Stack Intern</h4>
                    <h5 className='p-4'>Remote · Aug 2024 – Dec 2024</h5>
                    <p className='p-4'>
                      • Architected a full-stack e-learning platform (live demo) using React, Node.js, and MongoDB, improving API response time by 40%.
                      <br />• Enhanced platform security with OAuth2 authorization and developed analytics dashboards that boosted course completion rates by 30%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* INTEGRATED ACTIVE MONITORING PVT LTD */}
            <div className='h-full p-0' data-sr-id='17'>
              <div className='h-full p-4 rounded-xl hover:scale-105 ease-in duration-300' style={{ borderRadius: '1.5rem', backgroundColor: '#f1f3f4', boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                    <h3 className='pl-4' style={{ fontSize: '22px' }}>INTEGRATED ACTIVE MONITORING PVT LTD</h3>
                    <h4 className='pl-4' style={{ fontSize: '18px' }}>Python Developer</h4>
                    <h5 className='p-4'>Pune, India · Aug 2023 – Apr 2024</h5>
                    <p className='p-4'>
                      • Developed an IoT backend and BLE Gateway Network on a Raspberry Pi server to enable real-time device connectivity and telemetry ingestion.
                      <br />• Implemented reliable BLE scanning and GATT interactions using Python (BLE library), and designed a lightweight message pipeline to forward sensor data to the cloud via MQTT/HTTP.
                      <br />• Implemented batching, compression and retry logic which improved system efficiency by 15% and reduced end-to-end data latency by 20%.
                      <br />• Wrote automated tests and monitoring scripts, documented the deployment on Raspberry Pi, and published code snippets and instructions for reproducible local setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id='certifications'>
          <p className='text-xl tracking-widest uppercase text-[#ff9100] p-4'>
            Certificates
          </p>

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
        </section>
      </div>
    </section>
  );
};

export default Skills;
