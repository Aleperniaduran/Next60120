import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MY CODER APP',
  description: 'CODER NEXT APP CURSO 60120',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
