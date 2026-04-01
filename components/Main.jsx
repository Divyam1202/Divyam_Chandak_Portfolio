import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import hugging from '../public/assets/huggingface.png';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const quickStats = [
  { label: 'Level', value: '08' },
  { label: 'Models', value: '06' },
  { label: 'Quests', value: '09' },
  { label: 'Certs', value: '05' },
];

const Main = () => {
  const viewportRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const list = viewport.querySelector('.scroll-list');
    if (!list) return;

    const items = Array.from(list.children || []);
    const total = items.length || 0;
    const uniqueCount = Math.max(1, Math.ceil(total / 2));

    let rafId = null;
    let lastTs = 0;
    let offset = 0;

    const secondsPerItem = 2.5;

    const startAnimation = () => {
      list.style.animation = 'none';

      const heights = [];
      for (let i = 0; i < uniqueCount; i++) {
        const el = items[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        heights.push(Math.ceil(rect.height));
      }

      const cumulative = [];
      for (let i = 0; i < heights.length; i++) {
        cumulative[i] = (cumulative[i - 1] || 0) + heights[i];
      }

      const listHalfHeight = list.scrollHeight / 2;
      const avgItemHeight = heights.length ? Math.round(heights.reduce((a, b) => a + b, 0) / heights.length) : 32;
      const pxPerSec = Math.max(10, avgItemHeight / secondsPerItem);

      if (heights[0]) {
        viewport.style.transition = 'height 180ms linear';
        viewport.style.height = `${heights[0]}px`;
      }

      lastTs = performance.now();
      let lastIndex = -1;

      const step = (ts) => {
        const delta = ts - lastTs;
        lastTs = ts;
        offset += (pxPerSec * delta) / 1000;

        if (offset >= listHalfHeight) offset -= listHalfHeight;
        list.style.transform = `translate3d(0, -${offset}px, 0)`;

        const pos = offset % listHalfHeight;
        let idx = 0;
        while (idx < cumulative.length && pos >= cumulative[idx]) idx++;
        if (idx !== lastIndex) {
          lastIndex = idx;
          const targetHeight = heights[idx] || avgItemHeight;
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

    const init = () => {
      setTimeout(startAnimation, 120);
    };

    init();

    const handleResize = () => {
      stopAnimation();
      setTimeout(startAnimation, 80);
    };

    const handleLoad = () => {
      stopAnimation();
      setTimeout(startAnimation, 80);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <section id='home' className='w-full min-h-screen px-3 pt-10 pb-16 flex items-center'>
      <div className='max-w-[1240px] mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center'>
        <div className='game-panel p-6 md:p-10 pulse-glow'>
          <div className='flex flex-wrap gap-3 mb-6'>
            <span className='hud-chip'>Player One: Divyam</span>
            <span className='hud-chip'>Build Type: ML Engineer</span>
            <span className='hud-chip'>Status: Active Questing</span>
          </div>

          <p className='section-kicker mb-3'>Mission Control</p>
          <h1 className='py-2 font-name text-5xl md:text-7xl font-black leading-tight'>
            Divyam Chandak
          </h1>
          <p className='terminal-line max-w-2xl mt-5'>
            Powering up intelligent systems with computer vision, language models, and production-ready ML pipelines.
            This portfolio now plays like a quest log: every section is a completed mission, unlocked skill tree, or active build.
          </p>

          <div className='mt-6'>
            <div className='flex items-center justify-between text-sm font-semibold mb-2'>
              <span className='muted-text'>XP Progress</span>
              <span className='accent-text'>92 / 100</span>
            </div>
            <div className='xp-track'>
              <div className='xp-fill' style={{ width: '92%' }}></div>
            </div>
          </div>

          <div className='max-w-[560px] mt-6'>
            <div className='scroll-viewport' ref={viewportRef}>
              <div className='scroll-list'>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Machine Learning Engineer</div>
                  <div className='text-sm mt-0 opacity-80'>SmartQR Technologies</div>
                </div>
                <div className='scroll-item'>Quest Skill: Computer Vision + TensorFlow + OpenCV</div>
                <div className='scroll-item'>Quest Reward: Scalable ML data pipelines</div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Previous Class: MERN Stack Intern</div>
                  <div className='text-sm mt-0 opacity-80'>Creator Research</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Previous Class: Python Developer</div>
                  <div className='text-sm mt-0 opacity-80'>Integrated Active Monitoring</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div>Unlocked: Google AI/ML + IBM Data Engineering</div>
                  <div className='text-sm opacity-80'>and Deloitte analytics certifications</div>
                </div>

                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Machine Learning Engineer</div>
                  <div className='text-sm mt-0 opacity-80'>SmartQR Technologies</div>
                </div>
                <div className='scroll-item'>Quest Skill: Computer Vision + TensorFlow + OpenCV</div>
                <div className='scroll-item'>Quest Reward: Scalable ML data pipelines</div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Previous Class: MERN Stack Intern</div>
                  <div className='text-sm mt-0 opacity-80'>Creator Research</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div className='text-lg font-semibold'>Previous Class: Python Developer</div>
                  <div className='text-sm mt-0 opacity-80'>Integrated Active Monitoring</div>
                </div>
                <div className='scroll-item flex flex-col items-center text-center leading-tight'>
                  <div>Unlocked: Google AI/ML + IBM Data Engineering</div>
                  <div className='text-sm opacity-80'>and Deloitte analytics certifications</div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-4 mt-8'>
            <Link href='/#projects'>
              <a className='pixel-button'>Open Quest Log</a>
            </Link>
            <Link href='/#contact'>
              <a className='pixel-button secondary'>Invite To Mission</a>
            </Link>
          </div>

          <div className='flex items-center gap-4 md:gap-5 max-w-[430px] mt-8'>
            <a href='https://www.linkedin.com/in/divyam-chandak/' target='_blank' rel='noreferrer' aria-label='Open LinkedIn profile'>
              <div className='rounded-2xl border border-[rgba(89,240,197,0.25)] bg-[rgba(12,24,44,0.85)] shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href='https://github.com/Divyam1202' target='_blank' rel='noreferrer' aria-label='Open GitHub profile'>
              <div className='rounded-2xl border border-[rgba(89,240,197,0.25)] bg-[rgba(12,24,44,0.85)] shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={20} />
              </div>
            </a>
            <a href='https://huggingface.co/DSCdev' target='_blank' rel='noreferrer' aria-label='Open Hugging Face profile'>
              <div className='rounded-2xl border border-[rgba(89,240,197,0.25)] bg-[rgba(12,24,44,0.85)] shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300'>
                <Image src={hugging} width={20} height={20} alt='Hugging Face' />
              </div>
            </a>
            <Link href='/#contact'>
              <a aria-label='Jump to contact section'>
                <div className='rounded-2xl border border-[rgba(89,240,197,0.25)] bg-[rgba(12,24,44,0.85)] shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail size={20} />
                </div>
              </a>
            </Link>
            <a href='https://www.hackerrank.com/profile/chandakdivyam' target='_blank' rel='noreferrer' aria-label='Open HackerRank profile'>
              <div className='rounded-2xl border border-[rgba(89,240,197,0.25)] bg-[rgba(12,24,44,0.85)] shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' width='20' height='20' fill='currentColor' aria-hidden='true'>
                  <path d='M541.9 192C527.4 167 349.5 64 320.5 64C291.5 64 113.6 166.8 99.2 192C84.8 217.2 84.7 422.8 99.2 448C113.7 473.2 291.6 576 320.5 576C349.4 576 527.3 473.1 541.8 448C556.3 422.9 556.3 217 541.8 192zM380.5 478.2C376.5 478.2 339.6 442.4 342.5 439.5C343.4 438.6 348.8 438 360 437.7C360 411.5 360.6 369.1 360.9 351.4C360.9 349.4 360.5 348 360.5 345.6L280.6 345.6C280.6 352.7 280.1 381.8 282 418.5C282.2 423 280.4 424.5 276.3 424.4C266.2 424.4 256 424.3 245.9 424.3C241.8 424.3 240 422.8 240.2 418.2C241.1 384.8 243.2 334.2 240 205.5L240 202.3C230.3 201.9 223.6 201.3 222.7 200.5C219.8 197.6 257.2 161.8 261.2 161.8C265.2 161.8 302.4 197.6 299.5 200.5C298.6 201.4 291.6 202 282.7 202.3L282.7 205.5C280.3 231.3 280.7 285.1 280.1 310.9L360.4 310.9C360.4 306.3 360.8 276.2 359.2 227.3C359.1 223.9 360.2 222.1 363.4 222.1C374.5 222 385.6 222 396.6 222C400.1 222 401.2 223.7 401.1 227.4C397.4 418.7 400.4 405.3 400.4 437.7C409.3 438.1 417.2 438.7 418.1 439.5C421 442.4 384.5 478.2 380.5 478.2L380.5 478.2z' />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className='grid gap-4'>
          <div className='stat-card float-card'>
            <p className='section-kicker mb-4'>Player Stats</p>
            <div className='grid grid-cols-2 gap-4'>
              {quickStats.map((stat) => (
                <div key={stat.label} className='game-panel-soft p-4'>
                  <div className='text-3xl font-heading font-black text-white'>{stat.value}</div>
                  <div className='text-sm muted-text uppercase tracking-[0.2em] mt-1'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='game-panel-soft p-6'>
            <p className='section-kicker mb-3'>Loadout</p>
            <div className='flex flex-wrap gap-3'>
              <span className='hud-chip'>PyTorch</span>
              <span className='hud-chip'>TensorFlow</span>
              <span className='hud-chip'>OpenCV</span>
              <span className='hud-chip'>Transformers</span>
              <span className='hud-chip'>NLP</span>
              <span className='hud-chip'>Data Pipelines</span>
            </div>
          </div>

          <div className='game-panel-soft p-6'>
            <p className='section-kicker mb-3'>Current Objective</p>
            <p className='terminal-line'>
              Build useful AI systems that feel research-grade under the hood and production-ready in the wild.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
