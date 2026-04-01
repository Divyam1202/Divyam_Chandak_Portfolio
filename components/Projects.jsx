import React from 'react';
import translationimg from '../public/assets/projects/translation.png';
import imagecaption from '../public/assets/projects/image_captioning.jpeg';
import colorextraction from '../public/assets/projects/material_you.png';
import emotion from '../public/assets/projects/emotion.jpg';
import llama from '../public/assets/projects/llama.png';
import clip from '../public/assets/projects/clip.png';
import tweet from '../public/assets/projects/tweet.gif';
import ProjectItem from './ProjectItem';
import script from '../public/assets/projects/Script.jpg';
import EchoSense from '../public/assets/projects/pic2audio.jpg';

const projects = [
  {
    title: 'CLIP',
    backgroundImg: clip,
    projectUrl: 'https://github.com/DSCdev/OpenAI-CLIP',
    description: 'A paper-first CLIP reimplementation in PyTorch, designed to make the original architecture easier to learn, inspect, and extend.',
    click: 'Launch Repo',
    badge: 'Boss Fight',
  },
  {
    title: 'YouTube Llama',
    backgroundImg: llama,
    projectUrl: 'https://github.com/DSCdev/YouTube-Llama',
    description: 'A retrieval-augmented local Llama system that turns any YouTube video into an interactive question-answering experience.',
    click: 'Launch Repo',
    badge: 'NLP Quest',
  },
  {
    title: 'EchoSense',
    backgroundImg: EchoSense,
    projectUrl: 'https://huggingface.co/spaces/DSCdev/EchoSense',
    description: 'A multimodal assistive platform that generates audio descriptions from images for visually impaired users.',
    click: 'Play Demo',
    badge: 'Patent Drop',
  },
  {
    title: 'Scriptify',
    backgroundImg: script,
    projectUrl: 'https://huggingface.co/spaces/DSCdev/Scriptify',
    description: 'A script generation demo built on top of ScriptForge models for creators who want fast YouTube content ideation.',
    click: 'Play Demo',
    badge: 'Creator Tool',
  },
  {
    title: 'Hinglish Translation',
    backgroundImg: translationimg,
    projectUrl: 'https://github.com/DSCdev/Neurohack',
    description: 'A TensorFlow transformer built in 24 hours to translate English into Hinglish with strong benchmark accuracy.',
    click: 'Launch Repo',
    badge: 'Speedrun',
  },
  {
    title: 'Image Captioning',
    backgroundImg: imagecaption,
    projectUrl: 'https://huggingface.co/spaces/DSCdev/Image-Caption',
    description: 'A multimodal captioning system trained from scratch on Conceptual Captions to generate natural image descriptions.',
    click: 'Play Demo',
    badge: 'Vision Quest',
  },
  {
    title: 'Material You',
    backgroundImg: colorextraction,
    projectUrl: 'https://huggingface.co/spaces/DSCdev/MaterialYou',
    description: 'A color extraction experiment inspired by Google Material You, designed to generate brand-aware palettes from imagery.',
    click: 'Play Demo',
    badge: 'Design Lab',
  },
  {
    title: 'Emotion Recognition',
    backgroundImg: emotion,
    projectUrl: 'https://github.com/DSCdev/Emotion-Recognition',
    description: 'A real-time webcam-powered emotion recognition system that maps facial expressions to seven emotional states.',
    click: 'Launch Repo',
    badge: 'Realtime AI',
  },
  {
    title: 'Image Generation',
    backgroundImg: tweet,
    projectUrl: 'https://github.com/DSCdev/Image-Generation',
    description: 'A scratch-built playground for GANs and diffusion models, focused on learning generative systems from the ground up.',
    click: 'Launch Repo',
    badge: 'Sandbox Mode',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='game-panel p-6 md:p-8'>
          <p className='section-kicker'>Quest Log</p>
          <h2 className='py-4 text-5xl md:text-6xl font-black'>Unlocked Missions</h2>
          <p className='terminal-line max-w-2xl'>A portfolio built like a campaign map: each quest demonstrates a different class of AI system, from production tooling to multimodal demos and research-inspired implementations.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 mt-10'>
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
