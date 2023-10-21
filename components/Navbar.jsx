import styles from '@/app/page.module.scss'
import Home from '@/components/icons/home'
import User from './icons/user'
import School from './icons/school'
import Briefcase from './icons/briefcase'
import Mail from './icons/mail'

export default function Navbar () {
  return (
    <navbar className={styles.navbar}>
      <Home />
      <User />
      <School />
      <Briefcase />
      <Mail />
    </navbar>
  )
}
