import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Contact.module.css';

import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head><title>Contact</title></Head>
      <section className={styles.contact}>
        <h1>Contact Me</h1>
        <div>
          <a className={styles.link} href="https://github.com/mikatpt" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
          <a className={styles.link} href="mailto:mikatpt@gmail.com"><FontAwesomeIcon icon={faAt} /> Send Email</a>
          <a className={styles.link} href="https://www.linkedin.com/in/mikatpt/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </div>
        <Footer />
      </section>
    </>
  );
}
