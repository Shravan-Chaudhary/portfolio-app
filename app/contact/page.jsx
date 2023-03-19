import Form from '../components/Form'

function Contact() {
  return (
    // Page Container
    <div className='max-w-xl mx-auto mt-24 h-full flex flex-col space-y-8'>
      {/* Heading Contact Container */}
      <div className='w-fit backdrop-blur-lg mx-auto text-light-white drop-shadow-lg h-fit px-6 py-2 sm:px-12 text-center text-2xl opacity-95 space-y-2 border-b border-footer-color'>
        <h2 className='text-4xl font-semibold'>Contact</h2>
      </div>

      {/* Contact Form Container*/}
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Contact
