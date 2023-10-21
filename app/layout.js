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
                <Image
                  src='/github.svg'
                  height={100}
                  width={100}
                  alt='personal photo'
                  className={styles.icon}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/juli%C3%A1n-millar-vollaire/'
                target='blank'
              >
                <Image
                  src='/linkedin.svg'
                  height={100}
                  width={100}
                  alt='personal photo'
                  className={styles.icon}
                />
              </a>
              <a href='https://www.instagram.com/muramasa_bjj/' target='blank'>
                <Image
                  src='/instagram.svg'
                  height={100}
                  width={100}
                  alt='personal photo'
                />
              </a>
            </div>
            <button>asd</button>
          </div>
        </div>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
