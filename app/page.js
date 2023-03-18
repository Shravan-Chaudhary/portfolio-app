import Image from 'next/image'
import stars from './assests/Stars.svg'
import astro from './assests/Astronaut.svg'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Divider from './components/Divider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-xl mx-auto mt-16 h-full flex flex-col'>
      <div className='h-1/4 px-4 mt-14 items-center'>
        <Image
          src={astro}
          alt='astro'
          height='auto'
          width='auto'
          priority
          className=' object-contain astro h-32 sm:h-40 drop-shadow-lg'
        />
      </div>

      <div className='h-3/4 mt-8 sm:mt-10 px-4 items-center space-y-8'>
        <div>
          <div className='w-fit backdrop-blur-lg mx-auto  text-light-white drop-shadow-lg h-fit px-10 py-3 sm:px-20 text-center text-2xl rounded-md opacity-95 space-y-2 border border-gray-200'>
            <h2 className='text-4xl sm:text-5xl'>{`Hi, I'm Shravan`}</h2>
            <p className='text-sm sm:text-xl'>
              (Full Stack Web Developer)
            </p>{' '}
          </div>
        </div>

        <div className='text-center sm:max-w-sm  mx-auto'>
          <p className='text-lg sm:mt-5 sm:text-xl '>
            Hello and welcome to my portfolio website! My name is Shravan and I
            am a web developer with a passion for creating useful Web
            Applications.
          </p>
        </div>
        {/* Skills, Projects Buttons Container */}
        <div className='flex px-5 justify-evenly mt-5'>
          <div className='py-3'>
            <Link href='/skills'>
              <button className='rounded-md bg-teal py-2 px-8 font-semibold text-dark-bg hover:bg-dark-teal duration-200'>
                Skills
              </button>
            </Link>
          </div>
          <div className='py-3'>
            <Link href='/projects'>
              <button className='rounded-md bg-teal py-2 px-8 font-semibold text-dark-bg hover:bg-dark-teal'>
                Projects
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div>
          <Divider />
        </div>

        {/* Social container */}
        <div className='flex  justify-center space-x-5 mb-10'>
          <div className='relative w-10 h-10 sm:w-14 sm:h-14'>
            <Link href='https://github.com/Shravan-Chaudhary' target='_blank'>
              <Image
                src='/github-logo.svg'
                alt='github-logo'
                priority={true}
                fill
              />
            </Link>
          </div>

          <div className='relative w-10 h-10 sm:w-14 sm:h-14'>
            <Link
              href='https://www.linkedin.com/in/shravan-chaudhary-224805262/'
              target='_blank'
            >
              <Image
                src='/linkedin-logo.svg'
                alt='linkedin-logo'
                priority={true}
                fill
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
