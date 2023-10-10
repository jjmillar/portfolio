import Image from 'next/image'
import Navbar from '@/components/Navbar'

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
        <div className={styles.personalCard}>
          <div className={styles.personalInfo}>
            <Image
              src='/seiya.jpg'
              height={100}
              width={100}
              alt='personal photo'
              className={styles.profilePic}
            />
            <div className={styles.iconsWrapper}>
              <a href='https://github.com/jjmillar' target='blank'>
                <ion-icon name='logo-github' />
              </a>
              <a href='https://www.linkedin.com/in/juli%C3%A1n-millar-vollaire/' target='blank'>
                <ion-icon name='logo-linkedin' />
              </a>
              <a href='https://www.instagram.com/muramasa_bjj/' target='blank'>
                <ion-icon name='logo-instagram' />
              </a>
            </div>
            <button>asd</button>
          </div>
        </div>
        {children}
        <Navbar />
      </body>
      <script
        type='module'
        src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        async
      />
      <script
        noModule
        src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        async
      />
    </html>
  )
}
