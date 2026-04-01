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
      <div className={`flex items-center justify-center ${open ? 'p-3' : 'p-6'} rounded-full shadow-lg shadow-gray-400 cursor-pointer bg-white text-[#5651e5] hover:scale-110 ease-in duration-300`}>
        <BsFillPersonLinesFill size={20} />
      </div>

      <div className={`ml-3 overflow-hidden transition-all duration-300 ${open ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}>
        <span className='text-sm select-text text-black'>{phone}</span>
      </div>
    </button>
  );
};

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full' style={{ backgroundColor: '#f5f7fa' }}>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] font-bold'>Get In Touch</p>
        <h2 className='py-4 text-5xl md:text-6xl font-black'>Let&apos;s Connect</h2>
        <p className='text-gray-600 max-w-2xl mb-12 text-lg'>Have a question or want to collaborate? I&apos;d love to hear from you. Feel free to reach out through any of the channels below.</p>

        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-2 bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-shadow'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='Divyam Chandak contact profile'
                />
              </div>
              <div>
                <h2 className='py-2 font-name'>Divyam Chandak</h2>
                <p className='font-heading'>Machine Learning Engineer</p>
                <p className='py-4 font-summary'>
                  Machine Learning Engineer specializing in computer vision and scalable data pipelines. Certified by Google (AI/ML) and IBM (Data Engineering).
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/divyam-chandak/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Open LinkedIn profile'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Divyam1202'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Open GitHub profile'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href='mailto:chandakdivyam@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Send an email'
                    onClick={(e) => {
                      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=chandakdivyam@gmail.com';
                      const popup = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

                      if (popup) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>
                  <ContactPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a aria-label='Back to top'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
