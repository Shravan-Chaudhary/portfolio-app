import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className=' h-28  text-center  bg-body-color dark:bg-dark-bg'>
      <div className='max-w-full mx-auto pt-20'>
        <p className='text-sm font-semibold text-footer-color mx-auto'>
          &copy; {year} Shravan Chaudhary. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
