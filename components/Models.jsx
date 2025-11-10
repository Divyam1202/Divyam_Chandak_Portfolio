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
const Models = () => {
    return(
        <>
        <div id='Models' className='w-full h-full mb-[150px]' style={{backgroundColor:"#ffff"}}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-[#ff9100]'></p>
            <h2 className='py-4'><Image src={modelimage} height="30px" width="30px" alt="/" /> Open Source Models </h2>
            <p>I am generally interested in the area of Deep learning. More specifically in language and vision modalities. I enjoy implementing research ideas, sometimes incorporating them into practical applications, and communicating my implementation details through open source models.</p>
            <br/><br/>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Swin Transformer */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">Swin Transformer</h3>
            <Image src={image_seg} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">Replicate the Swin Transformer architecture for semantic segmentation. The Swin Transformer ("Hierarchical Vision Transformer using Shifted Windows") delivers strong results across computer vision tasks and can be adapted for medical imaging and segmentation.</p>
                <h4 className="p-1" style={{textAlign: "center",width:"fit-content"}}><a href="https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051" target="_blank" rel="noreferrer">Blog<Image src={try_image} height="15px" width="15px" alt="/"/></a></h4>
            </div>
            </div>
            </div>
            {/* YOLOv9 */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">YOLOv9</h3>
            <Image src={yolo} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">Implementation of a multi-head YOLOv9 model for clothes detection and instance segmentation. Trained on the DeepFashion dataset and evaluated with MS COCO metrics.</p>
                <h4 className="p-1" style={{textAlign: "center",width:"fit-content"}}><a href="https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652" target="_blank" rel="noreferrer">Blog<Image src={try_image} height="15px" width="15px" alt="/"/></a></h4>
            </div>
            </div>
            </div>
            {/* HingFlow */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">HingFlow</h3>
            <Image src={translate_img} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">An English→Hindi translation model built using fine-tuning techniques for scalable neural machine translation.</p>
                <h4 className="p-1" style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/DSCdev/HingFlow" target="_blank" rel="noreferrer">Try Model <Image src={try_image} height="15px" width="15px" alt="/"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://divyamchandak.substack.com/p/hingflow-building-your-own-english" target="_blank" rel="noreferrer">Build your own <Image src={try_image} height="15px" width="15px" alt="/"/></a></h4>
            </div>
            </div>
            </div>
            {/* ScriptForge / Script_GPT */}
            <div className="p-0 shadow-xl bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">ScriptForge</h3>
            <Image src={script} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">ScriptForge is a family of base models for generating video and YouTube scripts. They help creators prototype content and automate script production.</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/DSCdev/Script_GPT" target="_blank" rel="noreferrer">Try Models <Image src={try_image} height="15px" width="15px" alt="/" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/DSCdev/ScriptForge" target="_blank" rel="noreferrer">Documentation<Image src={try_image} height="15px" width="15px" alt="/" /></a></h4>
            </div>
            </div>
            </div>
            {/* QABERT*/}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="p-1 text-xl">QABERT</h3>
                <Image src={qaimage} height="25px" width="25px" alt="/" />
                </div>
                <p className="p-1 text-sm">QA-BERT is a compact question-answering model trained on the SQuAD dataset. It provides a lightweight option for extractive QA tasks.</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/DSCdev/QABERT-small" target="_blank" rel="noreferrer">Try Model <Image src={try_image} height="15px" width="15px" alt="/" /></a></h4>
            </div>
            </div>
            </div>
            {/* HingMaskedLM */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">HingMaskedLM</h3>
            <Image src={maskimage} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">Hinglish MaskedLM is a masked language model custom-trained on Hinglish (mixed Hindi+English) text to improve language understanding for code-mixed inputs.</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/DSCdev/HingMaskedLM" target="_blank" rel="noreferrer">Try Model <Image src={try_image} height="15px" width="15px" alt="/"/></a></h4>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Models;


