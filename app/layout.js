import PersonalCard from '@/components/personal-card'
import Navbar from '@/components/navbar'
import './globals.scss'
import styles from './page.module.scss'

export const metadata = {
  title: 'JJ Portfolio',
  description: 'Julián Millar Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <PersonalCard />
        <div className={styles.showingCard}>{children}</div>

        <Navbar />
      </body>
    </html>
  )
}
