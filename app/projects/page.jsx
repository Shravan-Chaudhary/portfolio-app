import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Projects() {
  return (
    // Full Page Container
    <div className='flex flex-col max-w-xl mx-auto pt-24 h-full justify-center space-y-8 items-center bg-nav-color dark:bg-dark-bg'>
      {/* Projects Heading Container */}
      <div className='w-fit backdrop-blur-lg mx-auto text-light-white drop-shadow-lg h-fit px-8 py-2 sm:px-12 text-center text-2xl opacity-95 space-y-2 border-b border-footer-color'>
        <h2 className='text-4xl font-semibold text-dark-bg dark:text-light-white'>
          Projects
        </h2>
      </div>

      {/* Cards Container */}
      <div className=' max-w-xl flex flex-col space-y-4 items-center px-2 mx-auto pb-52'>
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Projects
