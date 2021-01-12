import { useState } from 'react';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <p className={styles.title}>Michael Chen</p>
        </div>
      </Link>
      <nav className={styles.navbar}>
        <Link href="/"><p className={styles.navLink}>Home</p></Link>
        <Link href="/music">
          <p className={styles.navLink}><FontAwesomeIcon icon={faMusic} />  Music</p>
        </Link>
        {/* <Link href="/about"><p className={styles.navLink}>About</p></Link> */}
        <Link href="/contact"><p className={styles.navLink}>Contact</p></Link>
      </nav>

    </header>
  );
}
