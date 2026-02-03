import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const ContactPhone = () => {
  const [open, setOpen] = useState(false);
  const phone = '+91 9823532281';

  return (
    <button
      type='button'
      aria-expanded={open}
      aria-label='Show phone number'
      onClick={() => setOpen((v) => !v)}
      className={`flex items-center transition-all duration-300 ease-in-out ${open ? 'w-56 rounded-xl px-3' : 'w-14 rounded-full'} justify-start`}
    >
      {/* icon container matches other icons when closed */}
      <div className={`flex items-center justify-center ${open ? 'p-3' : 'p-6'} rounded-full shadow-lg shadow-gray-400 cursor-pointer bg-white text-[#5651e5] hover:scale-110 ease-in duration-300`}> 
        <BsFillPersonLinesFill size={20} />
      </div>

      {/* sliding phone text */}
      <div className={`ml-3 overflow-hidden transition-all duration-300 ${open ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}>
        <span className='text-sm select-text text-black'>{phone}</span>
      </div>
    </button>
  );
};

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full' style={{backgroundColor:"#f8f9fa"}}>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] font-semibold'>
          Get In Touch
        </p>
        <h2 className='py-4 text-4xl md:text-5xl font-bold'>Let&apos;s Connect</h2>
        <p className='text-gray-600 max-w-2xl mb-12'>Have a question or want to collaborate? I'd love to hear from you. Feel free to reach out through any of the channels below.</p>
        
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Profile Card */}
          <div className='lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
            <div className='p-6'>
              <div className='mb-6'>
                <Image
                  className='rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
                  src={ContactImg}
                  alt='Divyam'
                />
              </div>
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Divyam Chandak</h2>
                <p className='text-[#ff9100] font-semibold mb-3'>Machine Learning Engineer</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Specializing in computer vision and scalable data pipelines. Certified by Google (AI/ML) and IBM (Data Engineering). Passionate about building intelligent systems.
                </p>
              </div>
              <div className='border-t pt-6'>
                <p className='text-xs uppercase tracking-widest font-semibold text-gray-700 mb-4'>Connect</p>
                <div className='flex items-center justify-between gap-3'>
                  <a
                    href='https://www.linkedin.com/in/divyam-chandak/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1'
                  >
                    <div className='rounded-lg bg-gray-100 p-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#ff9100] hover:to-[#ffb24d] hover:text-white transition-all duration-300 flex items-center justify-center'>
                      <FaLinkedinIn size={20} />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Divyam1202'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1'
                  >
                    <div className='rounded-lg bg-gray-100 p-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#ff9100] hover:to-[#ffb24d] hover:text-white transition-all duration-300 flex items-center justify-center'>
                      <FaGithub size={20} />
                    </div>
                  </a>
                  <a
                    href='mailto:chandakdivyam@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1'
                    onClick={(e) => {
                      e.preventDefault();
                      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=chandakdivyam@gmail.com';
                      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div className='rounded-lg bg-gray-100 p-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#ff9100] hover:to-[#ffb24d] hover:text-white transition-all duration-300 flex items-center justify-center'>
                      <AiOutlineMail size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-3 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <form className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  className='bg-gray-50 p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ff9100] focus:ring-2 focus:ring-[#ff9100]/20 transition-all'
                  type='text'
                  placeholder='Name'
                  required
                />
                <input
                  className='bg-gray-50 p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ff9100] focus:ring-2 focus:ring-[#ff9100]/20 transition-all'
                  type='email'
                  placeholder='Email'
                  required
                />
              </div>
              <textarea
                className='bg-gray-50 p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ff9100] focus:ring-2 focus:ring-[#ff9100]/20 transition-all'
                cols='30'
                rows='4'
                placeholder='Message'
                required
              ></textarea>
              <button
                type='submit'
                className='px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff9100] to-[#ffb24d] text-white font-semibold hover:shadow-lg transition-all duration-300 w-fit hover:scale-105'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className='flex justify-center pt-12'>
          <Link href='/'>
            <a className='group'>
              <div className='rounded-full shadow-lg bg-white p-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#ff9100] hover:to-[#ffb24d] hover:text-white hover:shadow-xl transition-all duration-300 ease-in'>
                <HiOutlineChevronDoubleUp
                  className='text-gray-700 group-hover:text-white group-hover:scale-125 transition-transform'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;


