import Image from 'next/image';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl, description, click, badge }) => {
  return (
    <a
      href={projectUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59f0c5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#081427] rounded-[1.4rem] transition-transform duration-300'
      aria-label={`${title} - ${click}`}
    >
      <article className='quest-card overflow-hidden h-full transition-all duration-300'>
        <div className='relative h-60 w-full overflow-hidden'>
          <Image
            className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
            src={backgroundImg}
            alt={title}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#07111f] via-[rgba(7,17,31,0.2)] to-transparent'></div>
          <div className='absolute top-4 left-4'>
            <span className='hud-chip'>{badge}</span>
          </div>
        </div>

        <div className='p-6 flex flex-col justify-between h-[calc(100%-15rem)]'>
          <div>
            <div className='flex items-center justify-between gap-4 mb-3'>
              <h3 className='text-2xl font-heading text-white'>{title}</h3>
              <span className='text-xs uppercase tracking-[0.2em] text-[#59f0c5]'>Quest Ready</span>
            </div>
            <p className='terminal-line'>{description}</p>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <span className='pixel-button'>{click}</span>
            <span className='text-sm uppercase tracking-[0.18em] text-[#95a8c7]'>Reward: Experience</span>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectItem;
