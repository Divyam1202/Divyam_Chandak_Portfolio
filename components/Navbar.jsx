import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#Models', label: 'Models' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#blogs', label: 'Blogs' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };

    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  const handleNav = () => {
    setNav((current) => !current);
  };

  return (
    <div
      style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.88)' }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-lg z-[100] ease-in-out duration-300 border-b border-gray-100'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a aria-label='Go to homepage'>
            <Image
              src='/fav.png'
              alt='Divyam Chandak logo'
              width={48}
              height={48}
              className='cursor-pointer'
            />
          </a>
        </Link>

        <div>
          <ul className='hidden md:flex text-gray-800'>
            {navLinks.map((link) => (
              <li key={link.href} className='ml-10 text-sm uppercase hover:border-b border-[#ff9100]'>
                <Link href={link.href}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>

          <button
            type='button'
            aria-label='Open navigation menu'
            onClick={handleNav}
            className='md:hidden bg-transparent shadow-none rounded-none text-gray-800'
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'hidden'}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a aria-label='Go to homepage'>
                  <Image src='/fav.png' width={40} height={40} alt='Divyam Chandak logo' />
                </a>
              </Link>
              <button
                type='button'
                aria-label='Close navigation menu'
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-white text-gray-800'
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Developing ML as a passion</p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <nav className='uppercase'>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a onClick={() => setNav(false)} className='block py-4 text-sm'>
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#ff9100]'>Let&#39;s Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/divyam-chandak/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open LinkedIn profile'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Divyam1202'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open GitHub profile'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <a
                    onClick={() => setNav(false)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'
                    aria-label='Jump to contact section'
                  >
                    <AiOutlineMail />
                  </a>
                </Link>
                <a
                  href='tel:+919823532281'
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'
                  aria-label='Call Divyam Chandak'
                >
                  <AiOutlinePhone />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
