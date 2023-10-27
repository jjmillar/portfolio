import Image from 'next/image'
import Github from '@/components/icons/github'
import Linkedin from '@/components/icons/linkedin'
import Instagram from '@/components/icons/instagram'
import styles from '@/app/page.module.scss'

export default function PersonalCard () {
  return (
    <div className={styles.personalCard}>
      <div className={styles.personalInfo}>
        <Image
          src='/seiya.jpg'
          height={100}
          width={100}
          alt='personal photo'
          className={styles.profilePic}
        />
        <div className={styles.info}>
          <h1>Julián Jesús Millar Vollaire</h1>
          <h2>Desarrollador MERN</h2>
        </div>
        <div className={styles.iconsWrapper}>
          <a href='https://github.com/jjmillar' target='blank'>
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/juli%C3%A1n-millar-vollaire/'
            target='blank'
          >
            <Linkedin />
          </a>
          <a href='https://www.instagram.com/muramasa_bjj/' target='blank'>
            <Instagram />
          </a>
        </div>
        <button>asd</button>
      </div>
    </div>
  )
}
