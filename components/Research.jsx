import React from 'react'

const Research = () => {
  const posts = [
    { id: 1, title: 'Swin Transformers for Semantic Segmentation — Part 1', excerpt: 'An introductory guide and implementation notes for adapting Swin Transformers to semantic segmentation tasks. Includes runnable examples and tips.', url: 'https://medium.com/@DSCdev/swin-transformers-for-semantic-segmentation-part-1-bd85bad7e051' },
    { id: 2, title: 'Understanding Multi-Headed YOLOv9', excerpt: 'A deep dive into a multi-headed YOLOv9 variant for instance segmentation and detection tasks.', url: 'https://medium.com/@DSCdev/understanding-multi-headed-yolo-v9-for-object-detection-and-segmentation-8923ee21b652' },
    { id: 3, title: 'HingFlow — Building Your Own English→Hindi Translation Model', excerpt: 'A walkthrough for creating HingFlow, including training and deployment notes and links to the model on Hugging Face.', url: 'https://divyamchandak.substack.com/p/hingflow-building-your-own-english' },
    { id: 4, title: 'More to come', excerpt: 'I regularly publish tutorials and model write-ups — tell me which sources to show here (Medium, Substack, RSS).', url: '#' },
    { id: 5, title: 'Demo: Large Tile Example', excerpt: 'This demo tile contains a longer excerpt to create a tall rectangle that helps the collage look staggered.', url: '#' },
    { id: 6, title: 'Short Note', excerpt: 'Tiny note.', url: '#' },
    { id: 7, title: 'Case Study', excerpt: 'A mid-length case study excerpt that produces a medium-height tile.', url: '#' }
  ]

  return (
    <div id='blogs' className='w-full h-full' style={{ backgroundColor: '#f8f9fa' }}>
      <div className='max-w-[1240px] mx-auto px-2 py-20'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] font-semibold'>Writing & Tutorials</p>
        <h2 className='py-4 text-4xl md:text-5xl font-bold'>Blogs & Articles</h2>
        <p className='text-gray-600 max-w-2xl mt-4'>Technical deep-dives, implementation guides, and insights on machine learning and AI.</p>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 layout-zigzag'>
          {posts.map(post => (
            <article key={post.id} className='group mb-6 relative p-5 bg-white rounded-xl shadow-lg overflow-visible'>
              <div className='absolute inset-0 pointer-events-none rounded-xl transition-opacity opacity-0 group-hover:opacity-80 overlay-gradient'></div>
              <div className='absolute -left-6 top-6'>
                <div className='w-12 h-12 rounded-full bg-[#709dff] flex items-center justify-center text-white font-semibold ring-4 ring-white'>{post.title.split(' ').slice(0,2).map(w => w[0]).join('')}</div>
              </div>
              <h3 className='text-xl font-semibold pl-10'>{post.title}</h3>
              <p className='text-sm text-muted mt-2 pl-10'>{post.excerpt}</p>
              <a href={post.url} target='_blank' rel='noreferrer' className='inline-block mt-4 pl-10 text-blue-600 hover:underline'>Read</a>
            </article>
          ))}
        </div>

        <p className='text-sm text-muted mt-6'>Want more blogs added here? Tell me which posts or an RSS/source, and I will add them with excerpts and dates.</p>
      </div>
    </div>
  )
}

export default Research