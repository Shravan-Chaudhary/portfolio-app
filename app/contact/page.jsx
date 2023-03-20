import Form from '../components/Form'

function Contact() {
  return (
    // Page Container
    <div className='max-w-xl mx-auto pt-24 pb-80 h-full flex flex-col space-y-8 bg-body-color dark:bg-dark-bg'>
      {/* Heading Contact Container */}
      <div className='w-fit backdrop-blur-lg mx-auto text-light-white drop-shadow-lg h-fit px-6 py-2 sm:px-12 text-center text-2xl opacity-95 space-y-2 border-b border-footer-color'>
        <h2 className='text-4xl font-semibold text-dark-bg dark:text-light-white'>
          Contact
        </h2>
      </div>

      {/* Contact Form Container*/}
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Contact
