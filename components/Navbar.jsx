import styles from '@/app/page.module.scss'
import Image from 'next/image'

export default function Navbar () {
  return (
    <div className={styles.navbar}>
      <Image src='/home.svg' height={100} width={100} alt='home' className={styles.icon} />
      <Image src='/user.svg' height={100} width={100} alt='user' className={styles.icon} />
      <Image src='/school.svg' height={100} width={100} alt='school' className={styles.icon} />
      <Image src='/briefcase.svg' height={100} width={100} alt='briefcase' className={styles.icon} />
      <Image src='/mail.svg' height={100} width={100} alt='mail' className={styles.icon} />
    </div>
  )
}
