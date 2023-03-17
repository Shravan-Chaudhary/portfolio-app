import Image from 'next/image'
import stars from './assests/Stars.svg'
import astro from './assests/Astronaut.svg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col-reverse h-screen sm:flex-row justify-around '>
      <div className='flex flex-col h-1/2 text-center p-5 sm:w-1/2'>
        <h2 className='text-5xl mt-20'>{`Hi, I'm Shravan`}</h2>
      </div>

      <div className=' flex h-1/4 items-center sm:flex-col sm:w-1/2 '>
        <div className='flex mx-auto items-center'>
          <Image
            src={astro}
            alt='astro'
            height={250}
            width={250}
            className=' object-contain pt-24 astro sm:pt-40 h-72 sm:h-fit'
          />
        </div>
        <Image
          src={stars}
          alt='stars'
          height={500}
          width={500}
          className='absolute object-contain top-20 z-[-5] min-h-100 sm:pl-5 sm:top-32'
        />
      </div>
    </div>
  )
}
