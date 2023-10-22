import Navbar from '@/components/navbar'
import PersonalCard from '@/components/personal-card'

import './globals.scss'

export const metadata = {
  title: 'JJ Portfolio',
  description: 'Julián Millar Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <PersonalCard />
        {children}
        <Navbar />
      </body>
    </html>
  )
}
