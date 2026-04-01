import React from 'react';
import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
  return (
    <section id='newsletter' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] mx-auto game-panel p-6 md:p-8'>
        <p className='section-kicker'>Guild Broadcast</p>
        <h2 className='py-4 pb-0 mb-0'>ProductivityPro</h2>
        <p className='terminal-line mt-4 max-w-2xl'>
          Join the broadcast feed for AI notes, practical experiments, and new quest unlocks as they ship.
        </p>
        <div className={`${styles.iframeWrapper} mt-8`}>
          <iframe
            src='https://divyamchandak.substack.com/embed'
            title='ProductivityPro newsletter signup'
            width='100%'
            height='320'
            style={{ border: '0px solid #EEE', background: 'white', borderRadius: '18px' }}
            frameBorder='0'
            scrolling='no'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
