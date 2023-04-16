import 'tailwindcss/tailwind.css'

import { Header } from '@/components/Header'
// import { Footer } from '@/components/Footer'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <meta name='author' content='CLG' />
        <meta name='description' content='Esta página esta diseñada con fines educativos, el propósito es realizar el diseño de una página web sobre una idea de negocio ficticia' />
        <title>COFFEA</title>
      </head>
      <body>
        <Header />
        <main className='min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
