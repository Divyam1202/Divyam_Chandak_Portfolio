import React from 'react';
import Image from 'next/image'
import qaimage from '../public/assets/QABERT.png'
import maskimage from '../public/assets/masked.png'
import script from '../public/assets/AI.png'
import try_image from '../public/assets/try.png'
import modelimage from '../public/assets/blocks.png'
import translate_img from '../public/assets/translation.png'
import image_seg from '../public/assets/images-removebg-preview.png'
import yolo from '../public/assets/yolo.png'

const ModelCard = ({ title, description, icon, links }) => {
  return (
    <div className="p-0 shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg">
      <div className="p-6">
        <div className="flex flex-col h-full">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <Image src={icon} height="32px" width="32px" alt="icon" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#ff9100] to-[#ffb24d] text-white text-xs font-semibold rounded-lg hover:shadow-md transition-shadow">
                {link.label}
                <Image src={try_image} height="12px" width="12px" alt="link" style={{marginLeft: '0.25rem'}} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Models = () => {
  const models = [
    { title: 'Swin Transformer', description: 'Replicate the Swin Transformer architecture for semantic segmentation. Delivers strong results across computer vision tasks and can be adapted for medical imaging.', icon: image_seg, links: [{ label: 'Blog', url: 'https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051' }] },
    { title: 'YOLOv9', description: 'Implementation of a multi-head YOLOv9 model for clothes detection and instance segmentation. Trained on DeepFashion dataset.', icon: yolo, links: [{ label: 'Blog', url: 'https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652' }] },
    { title: 'HingFlow', description: 'An English→Hindi translation model built using fine-tuning techniques for scalable neural machine translation.', icon: translate_img, links: [{ label: 'Try Model', url: 'https://huggingface.co/DSCdev/HingFlow' }, { label: 'Tutorial', url: 'https://divyamchandak.substack.com/p/hingflow-building-your-own-english' }] },
    { title: 'ScriptForge', description: 'A family of base models for generating video and YouTube scripts. Helps creators automate script production.', icon: script, links: [{ label: 'Try Models', url: 'https://huggingface.co/DSCdev/Script_GPT' }, { label: 'Docs', url: 'https://github.com/DSCdev/ScriptForge' }] },
    { title: 'QABERT', description: 'Compact question-answering model trained on SQuAD dataset. Lightweight option for extractive QA tasks.', icon: qaimage, links: [{ label: 'Try Model', url: 'https://huggingface.co/DSCdev/QABERT-small' }] },
    { title: 'HingMaskedLM', description: 'Masked language model trained on Hinglish text for code-mixed language understanding.', icon: maskimage, links: [{ label: 'Try Model', url: 'https://huggingface.co/DSCdev/HingMaskedLM' }] }
  ];

  return (
    <>
      <div id='Models' className='w-full h-full mb-[150px]' style={{backgroundColor:"#f8f9fa"}}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-2 py-20'>
          <p className='text-[#ff9100] font-semibold tracking-widest uppercase'>Open Source</p>
          <h2 className='py-4 text-4xl md:text-5xl font-bold flex items-center gap-3'><Image src={modelimage} height="40px" width="40px" alt="/" /> Models </h2>
          <p className='text-gray-600 text-base leading-relaxed max-w-3xl'>I focus on deep learning across language and vision modalities. I enjoy implementing research ideas and publishing open-source models that bridge research and production.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {models.map((model, idx) => (
              <ModelCard key={idx} {...model} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Models;


