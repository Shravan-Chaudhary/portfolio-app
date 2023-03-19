function Button({ children }) {
  return (
    <button className='rounded-md bg-teal py-2 px-8 font-semibold text-dark-bg hover:bg-dark-teal'>
      {children}
    </button>
  )
}

export default Button
