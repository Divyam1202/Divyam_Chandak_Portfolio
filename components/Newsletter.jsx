import React from 'react';
import '../styles/Newsletter.module.css';

const MyComponent = () => {
  return (
    <>
    <div id='newsletter' className='w-full h-auto text-center bg-gradient-to-b from-white to-[#f8f9fa] py-20'>
    <div className='max-w-[1240px] mx-auto px-2 pb-12'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] font-semibold'>Newsletter</p>
        <h2 className='py-4 text-4xl md:text-5xl font-bold'>Stay Updated</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>Subscribe to my newsletter for updates on AI/ML, open-source projects, and technical insights.</p>
    </div>
      <div className="iframeWrapper max-w-2xl mx-auto px-2">
        <iframe
          src="https://divyamchandak.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: '0px solid #EEE', background: 'white', borderRadius: '0.5rem' }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default MyComponent;


