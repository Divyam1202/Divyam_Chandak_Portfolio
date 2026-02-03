import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import hugging from '../public/assets/huggingface.png'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import NavBar from '../components/Navbar'


const Main = () => {
  const viewportRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const list = viewport.querySelector('.scroll-list');
    if (!list) return;

    // We'll run a pixel-based animation (requestAnimationFrame) so variable
    // item heights are handled naturally and the scroll speed stays constant.
    const items = Array.from(list.children || []);
    const total = items.length || 0;
    const uniqueCount = Math.max(1, Math.ceil(total / 2));

    let rafId = null;
    let lastTs = 0;
    let offset = 0; // pixels scrolled

    // Desired on-screen time per item (seconds). Adjust to taste.
    const secondsPerItem = 2.5;

    const startAnimation = () => {
      // ensure CSS animation (if present) is disabled when JS controls motion
      list.style.animation = 'none';

      // recompute measurements
      const heights = [];
      for (let i = 0; i < uniqueCount; i++) {
        const el = items[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        heights.push(Math.ceil(r.height));
      }

      // cumulative heights for finding current item by offset
      const cumulative = [];
      for (let i = 0; i < heights.length; i++) {
        cumulative[i] = (cumulative[i-1] || 0) + heights[i];
      }

      const listHalfHeight = list.scrollHeight / 2; // since content is duplicated
      const avgItemHeight = heights.length ? Math.round(heights.reduce((a,b)=>a+b,0)/heights.length) : 32;

      // pixels per second so each item (avg) is visible for secondsPerItem
      const pxPerSec = Math.max(10, avgItemHeight / secondsPerItem);

      // set initial viewport height to the first item's height (so single-line items aren't huge)
      if (heights[0]) {
        viewport.style.transition = 'height 180ms linear';
        viewport.style.height = `${heights[0]}px`;
      }

      // animation loop with per-item viewport adaptation
      lastTs = performance.now();
      let lastIndex = -1;
      const step = (ts) => {
        const delta = ts - lastTs;
        lastTs = ts;
        offset += (pxPerSec * delta) / 1000; // px
        // wrap when scrolled past one copy
        if (offset >= listHalfHeight) offset -= listHalfHeight;
        list.style.transform = `translate3d(0, -${offset}px, 0)`;

        // determine which item is currently at the top of the viewport
        const pos = offset % listHalfHeight;
        let idx = 0;
        while (idx < cumulative.length && pos >= cumulative[idx]) idx++;
        if (idx !== lastIndex) {
          lastIndex = idx;
          const targetHeight = heights[idx] || avgItemHeight;
          // animate viewport height to the current item's height
          viewport.style.height = `${targetHeight}px`;
        }

        rafId = requestAnimationFrame(step);
      };

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(step);
    };

    const stopAnimation = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    // start after layout/fonts/images settle
    const init = () => {
      // slight delay to allow fonts to swap
      setTimeout(startAnimation, 120);
    };

    init();
    window.addEventListener('resize', () => {
      stopAnimation();
      // restart to recompute sizes
      setTimeout(startAnimation, 80);
    });
    window.addEventListener('load', () => {
      stopAnimation();
      setTimeout(startAnimation, 80);
    });

    return () => {
      stopAnimation();
      window.removeEventListener('resize', startAnimation);
      window.removeEventListener('load', startAnimation);
    };
  }, []);

  return (
<div id="home" className="w-full h-screen text-center flex flex-col" style={{background: "linear-gradient(135deg, #f5f7fa 0%, #f0f4f9 50%, #ffffff 100%)", backgroundAttachment: "fixed"}}>
      <NavBar/>
      <div className='max-w-[900px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
          <p className='uppercase text-sm tracking-widest text-[#ff9100] font-bold animate-pulse'>
            Crafting Intelligent Solutions  
          </p><br></br><br></br>
          <h1 className='py-4 font-name text-6xl md:text-7xl font-black bg-gradient-to-r from-[#0f172a] via-[#1a2d4d] to-[#ff9100] bg-clip-text text-transparent'>Divyam Chandak</h1>

          {/* static intro removed — details are shown in the scrolling ticker below */}

          {/* Scrollable lines (cycles short details/certifications). Remove if you prefer no animation. */}
          <div className='max-w-[500px] mx-auto mt-4'>
            <div className='scroll-viewport' ref={viewportRef}>
              <div className='scroll-list'>
                {/* primary list - user provided lines */}
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Machine Learning Engineer</div>
                  <div className='text-sm mt-0 opacity-90'>@SmartQR Technologies</div>
                </div>
                <div className='scroll-item'>ML Algorithms, Computer Vision (TensorFlow, OpenCV)</div>
                <div className='scroll-item'>Scalable Data Pipelines.</div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Ex MERN Stack Intern</div>
                  <div className='text-sm mt-0 opacity-90'>@ Creator Research</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Ex Python Intern</div>
                  <div className='text-sm mt-0 opacity-90'>@ IAM</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div>Google AI/ML, IBM Data Engineering</div>
                  <div className='mt-0'>&amp;</div>
                  <div>Deloitte Data Analytics certifications</div>
                </div>

                {/* duplicate the full set for a smooth infinite loop */}
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Machine Learning Engineer</div>
                  <div className='text-sm mt-0 opacity-90'>@SmartQR Technologies</div>
                </div>
                <div className='scroll-item'>ML Algorithms, Computer Vision (TensorFlow, OpenCV)</div>
                <div className='scroll-item'>Scalable Data Pipelines.</div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Ex MERN Stack Intern</div>
                  <div className='text-sm mt-0 opacity-90'>@ Creator Research</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Ex Python Intern</div>
                  <div className='text-sm mt-0 opacity-90'>@ IAM</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div>Google AI/ML, IBM Data Engineering</div>
                  <div className='mt-0'>&amp;</div>
                  <div>Deloitte Data Analytics certifications</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between max-w-[430px] m-auto py-4'>
            {/* unified icon container size */}
            <a href='https://www.linkedin.com/in/divyam-chandak/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href='https://github.com/Divyam1202' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <FaGithub size={20} />
              </div>
            </a>
            <a href='https://huggingface.co/DSCdev' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <Image src={hugging} width={20} height={20} alt='huggingface' />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <a href="https://www.hackerrank.com/profile/chandakdivyam" target="_blank" rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M541.9 192C527.4 167 349.5 64 320.5 64C291.5 64 113.6 166.8 99.2 192C84.8 217.2 84.7 422.8 99.2 448C113.7 473.2 291.6 576 320.5 576C349.4 576 527.3 473.1 541.8 448C556.3 422.9 556.3 217 541.8 192zM380.5 478.2C376.5 478.2 339.6 442.4 342.5 439.5C343.4 438.6 348.8 438 360 437.7C360 411.5 360.6 369.1 360.9 351.4C360.9 349.4 360.5 348 360.5 345.6L280.6 345.6C280.6 352.7 280.1 381.8 282 418.5C282.2 423 280.4 424.5 276.3 424.4C266.2 424.4 256 424.3 245.9 424.3C241.8 424.3 240 422.8 240.2 418.2C241.1 384.8 243.2 334.2 240 205.5L240 202.3C230.3 201.9 223.6 201.3 222.7 200.5C219.8 197.6 257.2 161.8 261.2 161.8C265.2 161.8 302.4 197.6 299.5 200.5C298.6 201.4 291.6 202 282.7 202.3L282.7 205.5C280.3 231.3 280.7 285.1 280.1 310.9L360.4 310.9C360.4 306.3 360.8 276.2 359.2 227.3C359.1 223.9 360.2 222.1 363.4 222.1C374.5 222 385.6 222 396.6 222C400.1 222 401.2 223.7 401.1 227.4C397.4 418.7 400.4 405.3 400.4 437.7C409.3 438.1 417.2 438.7 418.1 439.5C421 442.4 384.5 478.2 380.5 478.2L380.5 478.2z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;



