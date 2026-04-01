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
      className={`flex items-center transition-all duration-300 ease-in-out ${open ? 'w-56 rounded-2xl px-3' : 'w-14 rounded-2xl'} justify-start bg-transparent`}
    >
      <div className={`flex items-center justify-center ${open ? 'p-3' : 'p-4'} rounded-2xl border border-[rgba(89,240,197,0.22)] bg-[rgba(8,18,35,0.9)] text-white hover:scale-110 ease-in duration-300`}>
        <BsFillPersonLinesFill size={20} />
      </div>

      <div className={`ml-3 overflow-hidden transition-all duration-300 ${open ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}>
        <span className='text-sm select-text text-white'>{phone}</span>
      </div>
    </button>
  );
};

const Contact = () => {
  return (
    <section id='contact' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] m-auto w-full game-panel p-6 md:p-8'>
        <p className='section-kicker font-bold'>Party Invite</p>
        <h2 className='py-4 text-5xl md:text-6xl font-black'>Let&apos;s Team Up</h2>
        <p className='terminal-line max-w-2xl mb-12'>Have a question, idea, or interesting mission? Reach out and let&apos;s build something sharp, useful, and memorable.</p>

        <div className='grid lg:grid-cols-[0.8fr_1.2fr] gap-8'>
          <div className='game-panel-soft overflow-hidden border border-[rgba(89,240,197,0.18)]'>
            <Image className='w-full h-auto object-cover' src={ContactImg} alt='Divyam Chandak contact profile' />
          </div>

          <div className='game-panel-soft p-6'>
            <div className='flex flex-wrap gap-3 mb-5'>
              <span className='hud-chip'>Open to collaboration</span>
              <span className='hud-chip'>AI systems</span>
              <span className='hud-chip'>Product-minded builds</span>
            </div>

            <h3 className='text-3xl font-name'>Divyam Chandak</h3>
            <p className='mt-2 uppercase tracking-[0.2em] text-[#59f0c5] text-sm'>Machine Learning Engineer</p>
            <p className='terminal-line mt-5'>
              Machine Learning Engineer specializing in computer vision and scalable data pipelines. Certified by Google (AI/ML) and IBM (Data Engineering).
            </p>

            <div className='mt-8'>
              <p className='uppercase tracking-[0.2em] text-sm text-[#ff8a2a] mb-4'>Choose Your Channel</p>
              <div className='flex flex-wrap items-center gap-4'>
                <a href='https://www.linkedin.com/in/divyam-chandak/' target='_blank' rel='noreferrer' aria-label='Open LinkedIn profile'>
                  <div className='rounded-2xl border border-[rgba(89,240,197,0.22)] bg-[rgba(8,18,35,0.9)] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href='https://github.com/Divyam1202' target='_blank' rel='noreferrer' aria-label='Open GitHub profile'>
                  <div className='rounded-2xl border border-[rgba(89,240,197,0.22)] bg-[rgba(8,18,35,0.9)] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
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
                  <div className='rounded-2xl border border-[rgba(89,240,197,0.22)] bg-[rgba(8,18,35,0.9)] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
                <ContactPhone />
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center pt-12'>
          <Link href='/'>
            <a aria-label='Back to top'>
              <div className='rounded-2xl border border-[rgba(89,240,197,0.22)] bg-[rgba(8,18,35,0.9)] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#59f0c5]' size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
