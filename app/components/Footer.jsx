import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='h-20 relative text-center bottom-0'>
      <div className='max-w-full mx-auto pt-20'>
        <p className='text-sm font-semibold text-footer-color'>
          &copy; {year} Shravan Chaudhary. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
