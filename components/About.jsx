import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.png';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20' style={{backgroundColor:"#f8f9fa"}}>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff9100] font-semibold'>
          Who I Am
          </p>
          <h2 className='py-4 text-4xl md:text-5xl font-bold'>About Me</h2>
          <p className='py-4 text-gray-700 pr-[130px] text-justify text-base leading-relaxed' style={{fontSize:"16px"}}>
          I'm Divyam Chandak — a Machine Learning Engineer specializing in computer vision and language models. I build scalable ML systems and open-source models (published on Hugging Face) that bridge research and production.
          <br/><br/>
          My day-to-day work covers model development (PyTorch/TensorFlow), dataset engineering, and deploying models to production environments. I focus on reproducible experiments, readable code, and pragmatic model design that solves real-world problems.
          <br/><br/>
          I actively publish and maintain open-source projects on Hugging Face and GitHub, write technical articles, and present talks to share what I learn. If you'd like to collaborate or have questions, please reach out — I'm happy to help.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-lg hover:shadow-xl transition-shadow rounded-lg flex items-center justify-center p-0 hover:scale-105 ease-in duration-300'>
          {/* Provide explicit width/height and object-cover so Next/Image renders predictably */}
          <Image src={AboutImg} width={360} height={360} className='rounded-lg object-cover' alt='Portrait of Divyam Chandak' />
        </div>
      </div>
    </div>
  );
};

export default About;