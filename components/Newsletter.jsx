import React from 'react';
import '../styles/Newsletter.module.css';

const MyComponent = () => {
  return (
    <>
    <div id='home' className='w-full h-500 text-center'>
    <div className='max-w-[1240px] mx-auto px-2 py-10'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>NewsLetter</p>
        <h2 className='py-4 pb-0 mb-0'>ProductivityPro</h2>
    </div>
      <div className="iframeWrapper">
        <iframe
          src="https://Divyam Chandakdixit.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: '0px solid #EEE', background: 'white' }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default MyComponent;

