
import styles from './Navbar.module.css';
import { ActiveLink } from "./ActiveLink";


export const Navbar = () => {
  return (
    <nav className={styles.menu_container}>
        <ActiveLink text="Home" href="/"></ActiveLink>
        <ActiveLink text="About" href="/about"></ActiveLink>
        <ActiveLink text="Contact" href="/contact"></ActiveLink>
    </nav>
  )
}
