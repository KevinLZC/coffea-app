import '../styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>COFFEA</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
