import 'tailwindcss/tailwind.css'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <meta name='author' content='CLG' />
        <meta name='description' content='Esta página esta diseñada con fines educativos, el propósito es realizar el diseño de una página web sobre una idea de negocio ficticia' />
        <title>COFFEA</title>
      </head>
      <body className='my-0 mx-auto min-h-screen'>
        <Header />
        <main className='min-h-screen min-w-screen lg:pl-44 lg:pr-44 md:pl-36 md:pr-36 sm:pl-24 sm:pr-24 pl-10 pr-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
