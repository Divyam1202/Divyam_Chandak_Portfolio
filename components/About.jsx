import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.png';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20' style={{backgroundColor:"#f5f7fa"}}>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-12'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff9100] font-bold'>
          Who I Am
          </p>
          <h2 className='py-4 text-5xl md:text-6xl font-black'>About Me</h2>
          <p className='py-4 text-gray-700 text-justify text-lg leading-relaxed'>
          I'm Divyam Chandak — a Machine Learning Engineer specializing in computer vision and language models. I build scalable ML systems and open-source models (published on Hugging Face) that bridge research and production.
          <br/><br/>
          My day-to-day work covers model development (PyTorch/TensorFlow), dataset engineering, and deploying models to production environments. I focus on reproducible experiments, readable code, and pragmatic model design that solves real-world problems.
          <br/><br/>
          I actively publish and maintain open-source projects on Hugging Face and GitHub, write technical articles, and present talks to share what I learn. If you'd like to collaborate or have questions, please reach out — I'm happy to help.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl hover:shadow-2xl rounded-xl flex items-center justify-center p-0 hover:scale-105 ease-in duration-300 border border-gray-100'>
          {/* Provide explicit width/height and object-cover so Next/Image renders predictably */}
          <Image src={AboutImg} width={360} height={360} className='rounded-xl object-cover' alt='Portrait of Divyam Chandak' />
        </div>
      </div>
    </div>
  );
};

export default About;