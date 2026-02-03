import Image from 'next/image'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl,description,click,icon}) => {

  const handleClick = () => {
    window.open(projectUrl, '_blank');
  };

  return (
    <div onClick={handleClick} className='group cursor-pointer'>
      <div className='relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full'>
        {/* Image Container */}
        <div className='relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300'>
          <Image 
            className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' 
            src={backgroundImg} 
            alt={title} 
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
        </div>
        
        {/* Content Container */}
        <div className='p-6 flex flex-col h-full justify-between'>
          <div>
            <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff9100] transition-colors duration-300'>{title}</h3>
            <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
          </div>
          
          {/* Button */}
          <div className='flex items-center justify-between pt-4'>
            <span className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#ff9100] to-[#ffb24d] text-white text-sm font-bold rounded-lg group-hover:shadow-lg transition-all duration-300 hover:scale-105'>
              {click}
              <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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