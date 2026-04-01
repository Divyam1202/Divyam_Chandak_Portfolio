import React from 'react';
import Image from 'next/image';
import qaimage from '../public/assets/QABERT.png';
import maskimage from '../public/assets/masked.png';
import script from '../public/assets/AI.png';
import tryImage from '../public/assets/try.png';
import modelimage from '../public/assets/blocks.png';
import translateImg from '../public/assets/translation.png';
import imageSeg from '../public/assets/images-removebg-preview.png';
import yolo from '../public/assets/yolo.png';

const modelCards = [
  {
    title: 'Swin Transformer',
    image: imageSeg,
    description: 'A Swin Transformer implementation for semantic segmentation, with a focus on understanding hierarchical vision transformers in practical workflows.',
    primaryLabel: 'Read Build Log',
    primaryHref: 'https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051',
  },
  {
    title: 'YOLOv9',
    image: yolo,
    description: 'A multi-head YOLOv9 system for clothing detection and instance segmentation, trained on DeepFashion and evaluated with COCO metrics.',
    primaryLabel: 'Read Build Log',
    primaryHref: 'https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652',
  },
  {
    title: 'HingFlow',
    image: translateImg,
    description: 'An English to Hindi translation model shaped for scalable neural machine translation experiments.',
    primaryLabel: 'Try Model',
    primaryHref: 'https://huggingface.co/DSCdev/HingFlow',
    secondaryLabel: 'Build Your Own',
    secondaryHref: 'https://divyamchandak.substack.com/p/hingflow-building-your-own-english',
  },
  {
    title: 'ScriptForge',
    image: script,
    description: 'A family of base models for generating video and YouTube scripts for creator workflows and rapid ideation.',
    primaryLabel: 'Try Models',
    primaryHref: 'https://huggingface.co/DSCdev/Script_GPT',
    secondaryLabel: 'Docs',
    secondaryHref: 'https://github.com/DSCdev/ScriptForge',
  },
  {
    title: 'QABERT',
    image: qaimage,
    description: 'A compact extractive question-answering model trained on SQuAD to explore lightweight QA systems.',
    primaryLabel: 'Try Model',
    primaryHref: 'https://huggingface.co/DSCdev/QABERT-small',
  },
  {
    title: 'HingMaskedLM',
    image: maskimage,
    description: 'A masked language model trained on Hinglish to improve understanding of code-mixed language inputs.',
    primaryLabel: 'Try Model',
    primaryHref: 'https://huggingface.co/DSCdev/HingMaskedLM',
  },
];

const Models = () => {
  return (
    <section id='Models' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] mx-auto game-panel p-6 md:p-8'>
        <div className='flex items-center gap-3'>
          <Image src={modelimage} height={34} width={34} alt='Blocks icon' />
          <div>
            <p className='section-kicker'>Skill Tree</p>
            <h2 className='mt-2'>Open Source Models</h2>
          </div>
        </div>
        <p className='terminal-line mt-4 max-w-3xl'>
          These are the unlocks that sit closest to research and experimentation: model replicas, fine-tuned systems, and hands-on explorations of language and vision problems.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {modelCards.map((model) => (
            <article key={model.title} className='game-panel-soft p-5 flex flex-col'>
              <div className='flex items-center justify-between gap-4 mb-4'>
                <h3 className='text-2xl font-heading'>{model.title}</h3>
                <Image src={model.image} height={28} width={28} alt={`${model.title} icon`} />
              </div>
              <p className='terminal-line flex-1'>{model.description}</p>
              <div className='flex flex-wrap gap-3 mt-6'>
                <a href={model.primaryHref} target='_blank' rel='noreferrer' className='pixel-button'>
                  {model.primaryLabel}
                  <Image src={tryImage} height={15} width={15} alt='' />
                </a>
                {model.secondaryHref ? (
                  <a href={model.secondaryHref} target='_blank' rel='noreferrer' className='pixel-button secondary'>
                    {model.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
