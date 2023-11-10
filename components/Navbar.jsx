import styles from '@/app/page.module.scss'
import Home from './icons/home'
import User from './icons/user'
import School from './icons/school'
import Briefcase from './icons/briefcase'
import Mail from './icons/mail'
import Link from 'next/link'

export default function Navbar () {
  return (
    <navbar className={styles.navbar}>
      <Link href='/'><Home /></Link>
      <Link href='/user'><User /></Link>
      <Link href='/school'><School /></Link>
      <Link href='/briefcase'><Briefcase /></Link>
      <Link href='/mail'><Mail /></Link>
    </navbar>
  )
}
