import React from 'react';
import Image from 'next/image'
import script from '../public/assets/VisualAudioAI.png'
import modelimage from '../public/assets/PATENT.png'

const Patents = () => {
    return(
        <>
        <div id='Patents' className='w-full h-full mb-[150px]' style={{backgroundColor:"#ffff"}}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-[#ff9100]'></p>
            <h2 className='py-4'><Image src={modelimage} height="30px" width="30px" alt="/" /> Patents</h2>
            <p>Yes I am a Patent Holder ! A Showcase of my Patented Solutions</p>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-10 pt-4'>
            
            {/* Image to Audio */}
            <div className="p-0 shadow-xl bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">Real-Time Multimodal Video Narration Platform for Visually Impaired People</h3>
            <Image src={script} height="50px" width="50px" alt="/" />
            </div>
            <p>Indian Patent | Published 2023</p>
            <p>The solution is designed to assist blind individuals in gaining awareness of their surroundings by providing auditory access to real-time video information.</p><br></br>
            <p><b>Authors</b> - Mr.Divyam Chandak Dixit, Dr.Pradnya Dixit</p>
            </div>
            </div>
            </div>

            {/* Real-time Video Narration Platform */}
            <div className="p-0 shadow-xl bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">Assistance Platform for Visually Impaired Person using Image Captioning</h3>
            <Image src={script} height="50px" width="50px" alt="/" />
            </div>
            <p>Indian Patent | Published 2023</p>
            <p>Our solution can help visually impaired people access and experience the world around them by providing them with information and descriptions of the Images.</p><br></br>
            <p><b>Authors</b> - Mr.Divyam Chandak Dixit , Dr.Parikshit Mahalle , Dr.Pradnya Dixit , Mr.Yashwant Ingle</p>
            </div>
            </div>
            </div>

            </div>
        </div>
        </div>
        </>
    );
};

export default Patents;
