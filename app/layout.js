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
      </body>
      <script
        type='module'
        src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        async
      />
      <script
        nomodule
        src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        async
      />
    </html>
  )
}
