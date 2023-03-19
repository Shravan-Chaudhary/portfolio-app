import Button from '../components/Button'

function About() {
  return (
    // This is the main container for the about page
    <div className='flex flex-col max-w-xl mx-auto mt-24 h-full justify-center space-y-8 items-center'>
      {/* Heading Container */}
      <div className='w-fit backdrop-blur-lg mx-auto text-light-white drop-shadow-lg h-fit px-6 py-2 sm:px-12 text-center text-2xl opacity-95 space-y-2 border-b border-footer-color'>
        <h2 className='text-4xl font-semibold'>About</h2>
      </div>
      {/* Paragraph Container */}
      <div className='flex text-justify p-3 px-4 space-y-4'>
        <p className='text-lg sm:text-xl text-light-white leading-7'>
          Hi there! My name is Shravan and I am a full-stack web developer. I
          have a passion for building seamless and fast web applications using
          the latest technologies such as{' '}
          <span className='text-pink'>React</span> and{' '}
          <span className='text-pink'>Next JS</span> .
          <br />
          <br />
          My journey as a web developer began in 2022, and since then, I have
          been constantly learning and improving my skills to keep up with the
          ever-evolving world of web development.
          <br />
          As a developer, I am constantly striving to create beautiful,
          functional, and user-friendly web applications and to the highest
          standard of quality.
          <br />
          <br />
          Apart from web development, I enjoy playing first-person shooter games
          and participating in various sports activities.
        </p>
      </div>
      {/* Button Container */}
      <div className='flex justify-center'>
        <Button>Home</Button>
      </div>
    </div>
  )
}

export default About
