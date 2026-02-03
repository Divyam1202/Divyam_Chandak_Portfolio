import Image from 'next/image'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl,description,click,icon}) => {

  const handleClick = () => {
    window.open(projectUrl, '_blank');
  };

  return (
    <div onClick={handleClick} className='group cursor-pointer'>
      <div className='relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
        {/* Image Container */}
        <div className='relative h-48 w-full overflow-hidden bg-gray-200'>
          <Image 
            className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300' 
            src={backgroundImg} 
            alt={title} 
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300'></div>
        </div>
        
        {/* Content Container */}
        <div className='p-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ff9100] transition-colors'>{title}</h3>
          <p className='text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed'>{description}</p>
          
          {/* Button */}
          <div className='flex items-center justify-between'>
            <span className='inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#ff9100] to-[#ffb24d] text-white text-xs font-semibold rounded-lg group-hover:shadow-lg transition-shadow'>
              {click}
              <svg className='w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem