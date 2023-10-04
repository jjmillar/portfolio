import './globals.scss'
import styles from './page.module.scss'
import Image from 'next/image'

export const metadata = {
  title: 'JJ Portfolio',
  description: 'Julián Millar Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className={styles.personalCard}>
          <div className={styles.personalInfo}>
            <Image
              src='/heffer.jpeg'
              height={100}
              width={100}
              alt='personal photo'
            />
            <p>some text</p>
            <p>another text</p>
            <button>asd</button>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
