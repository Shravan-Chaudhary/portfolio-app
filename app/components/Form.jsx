import React from 'react'

function Form() {
  return (
    // Form Container
    <div className='max-w-xl h-full flex flex-col p-3 px-4'>
      <form className='flex flex-col space-y-4'>
        {/* Name Input */}
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='name'
            className='text-xl sm:text-2xl text-light-white'
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='John Doe'
            className='bg-light-white border border-footer-color rounded-md p-2'
          />
        </div>

        {/* Email Input */}
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='email'
            className=' text-xl sm:text-2xl text-light-white'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='johndoe@gmail.com'
            className='bg-light-white border border-footer-color rounded-md p-2'
          ></input>
        </div>

        {/* Message Input */}
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='message'
            className='text-xl sm:text-2xl text-light-white'
          >
            Message
          </label>
          <textarea
            name='message'
            id='message'
            rows='4'
            placeholder='Hi, I would like to work with you.....'
            className='bg-light-white border border-footer-color rounded-md p-2'
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form
