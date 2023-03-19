import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

function Card() {
  const style = { color: '#EDEDED' }
  const cartStyle = { color: '#202023' }

  return (
    // Card Container
    <div className=' max-w-xl h-2/6 border border-footer-color opacity-95  space-y-2 rounded-t-md rounded-b-md'>
      {/* Card Heading Container */}
      <div className='flex space-x-3 bg-sunlight text-center p-3 sm:p-6 px-24 sm:px-36 rounded-t-md'>
        <h3 className='text-dark-bg text-2xl font-semibold sm:font-bold'>
          Oh, My Garments!
        </h3>
        <AiOutlineShoppingCart style={cartStyle} className='w-8 h-8' />
      </div>

      {/* Card Below Heading Container */}
      <div className='p-2 px-3 space-y-2 sm:space-y-3'>
        {/*  Paragraph Container */}
        <div className=''>
          <p className='leading-relaxed text-md sm:text-lg'>
            Oh, My Garments! is a full-stack e-commerce store with a firebase
            backend and stripe payment integration.
          </p>
        </div>

        {/* Features and Stack Container */}
        <div className='flex justify-center space-x-6 sm:space-x-10'>
          {/* Features Container */}
          <div className=''>
            <h3 className='font-semibold text-xl sm:text-2xl'>Features</h3>
            {/* <hr className='w-24 h-px bg-footer-color' /> */}
            <ul className='px-4'>
              <li className='list-disc'>Authenticaton</li>
              <li className='list-disc'>Cart</li>
              <li className='list-disc'>Payment Gateway</li>
            </ul>
          </div>

          {/* Vertical Divider Container */}
          <div>
            <hr className='w-px h-24 mt-4 bg-footer-color' />
          </div>

          {/* Tech Stack Container */}
          <div className='flex flex-col space-y-3 justify-center'>
            {/* <h3 className='font-semibold text-xl sm:text-2xl text-center'>
              Stack Used
            </h3> */}
            <div className='flex space-x-3 justify-center pt-3 flex-wrap '>
              <TbBrandJavascript className='w-8 h-8 sm:w-12 sm:h-12' />
              <FaReact className='w-8 h-8 sm:w-12 sm:h-12' />
              <SiFirebase className='w-8 h-8 sm:w-12 sm:h-12' />
              <SiStyledcomponents className='w-8 h-8 sm:w-12 sm:h-12' />
            </div>
          </div>
        </div>

        {/* Buttons Container */}
        <div className='flex flex-row space-x-6 justify-center pt-5'>
          <Link
            href='https://e-clothing-budppga49-shravan-chaudhary.vercel.app/'
            target='_blank'
          >
            <button className='rounded-md bg-teal py-2 px-8 font-semibold text-dark-bg hover:bg-dark-teal'>
              Live
            </button>
          </Link>

          <Link
            href='https://github.com/Shravan-Chaudhary/e-clothing'
            target='_blank'
          >
            <button className='rounded-md bg-teal py-2 px-8 font-semibold text-dark-bg hover:bg-dark-teal'>
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card

{
  /* <SiNextdotjs style={style} className='w-6 h-6' /> */
}
