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
    <div id='contact' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
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
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Divyam1202'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href='mailto:chandakdivyam@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    onClick={(e) => {
                      // open Gmail compose in a new tab when possible; fall back to mailto
                      try {
                        e.preventDefault();
                        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=chandakdivyam@gmail.com';
                        // open Gmail compose in a new tab/window
                        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
                      } catch (err) {
                        // if anything goes wrong, allow the mailto link to act as fallback
                        // (no-op here — default href will be followed because we didn't prevent it)
                      }
                    }}
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>
                  {/* contact icon: expands into a rounded pill to reveal phone number */}
                  <ContactPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
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


