import styles from '@/app/page.module.scss'

export default function Navbar () {
  return (
    <div className={styles.navbar}>
      <ion-icon name='home' />
      <ion-icon name='person' />
      <ion-icon name='school' />
      <ion-icon name='briefcase' />
      <ion-icon name='mail' />
    </div>
  )
}
