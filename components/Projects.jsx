import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import translationimg from '../public/assets/projects/translation.png'
import imagecaption from '../public/assets/projects/image_captioning.jpeg'
import colorextraction from '../public/assets/projects/material_you.png'
import emotion from '../public/assets/projects/emotion.jpg'
import llama from '../public/assets/projects/llama.png'
import clip from '../public/assets/projects/clip.png'
import tweet from '../public/assets/projects/tweet.gif'
import ProjectItem from './ProjectItem';
import script from '../public/assets/projects/Script.jpg';
import EchoSense from '../public/assets/projects/pic2audio.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full' style={{backgroundColor:"#f8f9fa"}}>
      <div className='max-w-[1240px] mx-auto px-2 py-20'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] font-semibold'>
          Portfolio
        </p>
        <h2 className='py-4 text-4xl md:text-5xl font-bold'>What I&apos;ve Built</h2>
        <p className='text-gray-600 max-w-2xl mb-12'>Cutting-edge AI and ML projects spanning computer vision, NLP, and deep learning. Each project demonstrates real-world applications and innovative solutions.</p>
        <div className='grid md:grid-cols-2 gap-6'>
        <ProjectItem
            title='CLIP'
            backgroundImg={clip}
            projectUrl='https://github.com/DSCdev/OpenAI-CLIP'
            description="OpenAI has open-sourced code related to the CLIP model, but it is complicated to understand.
            I prefer to implement it based on the paper. Additionally, I found a helpful tutorial inspired by the
            CLIP model on Keras code examples, which assisted me in replicating the code in PyTorch."
            click="Github !"
            icon={<FaGithub />}
            />
        <ProjectItem
            title='YouTube Llama'
            backgroundImg={llama}
            projectUrl='https://github.com/DSCdev/YouTube-Llama'
            description="A question-answering chatbot for any YouTube video using Local Llama2 & Retrival Augmented Generation."
            click="Github !"
            icon={<FaGithub />}
            />
        <ProjectItem
            title='EchoSense'
            backgroundImg={EchoSense}
            projectUrl='https://huggingface.co/spaces/DSCdev/EchoSense'
            description="EchoSense is Implementation of our Patent Asstive platform for Visually Impared Person.EchoSense is a multimodality model that aims to generates Audio descriptions by looking at any given Image."
            click="Try Now !"
            icon={<FaGithub />}
            />
        <ProjectItem
            title='Scriptify'
            backgroundImg={script}
            projectUrl='https://huggingface.co/spaces/DSCdev/Scriptify'
            description="Scriptify is a Language model demo which I have built on top ScriptForge models, It allows users to generate youtube scripts."
            click="Try Now !"
            icon={<FaGithub />}
            />
          <ProjectItem
            title='Hinglish Translation'
            backgroundImg={translationimg}
            projectUrl='https://github.com/DSCdev/Neurohack'
            description='A Translation model which is built using TensorFlow in 24hr.The model follows the Transformer Architecture and is built from scratch to translate English sentences to Hinglish, model provides an accuracy of 94%.'
            click=" GitHub "
            icon={<FaGithub />}
            />
          <ProjectItem
            title='Image Captioning'
            backgroundImg={imagecaption}
            projectUrl='https://huggingface.co/spaces/DSCdev/Image-Caption'
            description='A Multimodality model for Image Captioning. The model is built from scratch using the a Vision & Language Transoformer.The dataset used to train is Conceptual Captions by Google.'
            click=" Try Now ! "
            />
            <ProjectItem
            title='Material You'
            backgroundImg={colorextraction}
            projectUrl='https://huggingface.co/spaces/DSCdev/MaterialYou'
            description='This Project is an attempt to understand and recreate Googles latest update in Color-Extraction called as Material You. It will provide you with color-palette to use on your website , brand as per the main image on the website or brand.'
            click=" Try Now ! "
            />

            {/* <ProjectItem
            title='Aerial Segmentation'
            backgroundImg={plants}
            projectUrl='https://github.com/DSCdev/Aerial-Segmentation-Models'
            description='The Project aims to segment Aerial Images. The main aim of the repo was to learn Semantic Segmentation.'
            click=" GitHub "
            /> */}

            <ProjectItem
            title='Emotion Recognition'
            backgroundImg={emotion}
            projectUrl='https://github.com/DSCdev/Emotion-Recognition'
            description='The Emotion Recognition App is a real-time application that utilizes machine learning to detect and recognize human emotions from a webcam feed. The application uses a pre-trained deep learning model to classify facial expressions into seven different emotions: Angry, Disgusted, Fearful, Happy, Neutral, Sad, and Surprised. This project demonstrates the integration of computer vision and machine learning for emotion analysis.'
            click=" Try Now ! "
            />

            <ProjectItem
            title='Image Generation'
            backgroundImg={tweet}
            projectUrl='https://github.com/DSCdev/Image-Generation'
            description='"Image Generation from Scratch" repository! This project is dedicated to building image generation models from scratch using PyTorch. In this repository, youll find both GANs (Generative Adversarial Networks) and Diffusion models implemented from the ground up.'
            click=" GitHub "
            />

        </div>
      </div>
    </div>
  );
};

export default Projects;

