import React from 'react';

const posts = [
  {
    title: 'Swin Transformers for Semantic Segmentation - Part 1',
    summary: 'Implementation notes and practical guidance for adapting Swin Transformers to segmentation-heavy computer vision tasks.',
    href: 'https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051',
    label: 'Dev Log',
  },
  {
    title: 'Understanding Multi-Headed YOLOv9 for Detection & Segmentation',
    summary: 'A breakdown of a multi-headed YOLOv9 variant used for detection and instance segmentation workflows.',
    href: 'https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652',
    label: 'Patch Notes',
  },
  {
    title: 'HingFlow - Building Your Own English to Hindi Translation Model',
    summary: 'A walkthrough of the HingFlow translation project, including training decisions and deployment lessons.',
    href: 'https://divyamchandak.substack.com/p/hingflow-building-your-own-english',
    label: 'Strategy Guide',
  },
];

const Research = () => {
  return (
    <section id='blogs' className='w-full px-3 py-16'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='game-panel p-6 md:p-8'>
          <p className='section-kicker'>Lore Archive</p>
          <h2 className='py-4 pb-0 mb-0'>Build Logs and Strategy Guides</h2>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mt-10'>
          {posts.map((post) => (
            <article key={post.title} className='game-panel-soft p-6 h-full'>
              <span className='hud-chip mb-4'>{post.label}</span>
              <h3 className='text-xl font-heading mt-4'>{post.title}</h3>
              <p className='terminal-line mt-4'>{post.summary}</p>
              <a href={post.href} target='_blank' rel='noreferrer' className='inline-flex mt-6 text-[#59f0c5] font-semibold uppercase tracking-[0.16em] hover:text-[#ff8a2a]'>
                Read Entry
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
