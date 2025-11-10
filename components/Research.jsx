import React from 'react'

const Research = () => {
    return(
        <>
        <div id='blogs' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
            <div className='max-w-[1240px] mx-auto px-2 py-10'>
                <p className='text-xl tracking-widest uppercase text-[#ff9100]'>Writing & Tutorials</p>
                <h2 className='py-4 pb-0 mb-0'>Blogs</h2>
            </div>

            <div className='max-w-[1240px] mx-auto px-2 py-4'>
                <div className='mb-8'>
                    <h3 className='text-xl font-semibold'>Swin Transformers for Semantic Segmentation — Part 1</h3>
                    <p className='text-sm text-muted mb-2'>An introductory guide and implementation notes for adapting Swin Transformers to semantic segmentation tasks.</p>
                    <a href="https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051" target="_blank" rel="noreferrer" className='text-blue-600 hover:underline'>Read on Medium</a>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-semibold'>Understanding Multi-Headed YOLOv9 for Detection & Segmentation</h3>
                    <p className='text-sm text-muted mb-2'>A deep dive into a multi-headed YOLOv9 variant for instance segmentation and detection tasks.</p>
                    <a href="https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652" target="_blank" rel="noreferrer" className='text-blue-600 hover:underline'>Read on Medium</a>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-semibold'>HingFlow — Building Your Own English→Hindi Translation Model</h3>
                    <p className='text-sm text-muted mb-2'>A walkthrough for creating HingFlow, including training and deployment notes.</p>
                    <a href="https://divyamchandak.substack.com/p/hingflow-building-your-own-english" target="_blank" rel="noreferrer" className='text-blue-600 hover:underline'>Read on Substack</a>
                </div>

                <p className='text-sm text-muted mt-6'>Want more blogs added here? Tell me which posts or an RSS/source, and I will add them with excerpts and dates.</p>
            </div>

        </div>
        </>
    )
}

export default Research