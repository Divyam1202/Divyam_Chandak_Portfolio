import React from 'react';
import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
  return (
    <div id='newsletter' className='w-full text-center py-10'>
      <div className='max-w-[1240px] mx-auto px-2 py-10'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>Newsletter</p>
        <h2 className='py-4 pb-0 mb-0'>ProductivityPro</h2>
      </div>
      <div className={styles.iframeWrapper}>
        <iframe
          src='https://divyamchandak.substack.com/embed'
          title='ProductivityPro newsletter signup'
          width='100%'
          height='320'
          style={{ border: '0px solid #EEE', background: 'white' }}
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  );
};

export default Newsletter;
