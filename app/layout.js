import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Shravan | Web Developer',
  description: 'Personal Portfolio App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='bg-body-color'>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
