import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Footer from './Footer';

export default function Contact() {
  return (
    <section id="contact-me">
      <h1>Contact Me</h1>
      <div id="contact-container">
        <a className="contact-link" id="profile-link" href="https://github.com/mikatpt" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
        <a className="contact-link" id="email-link" href="mailto:mikatpt@gmail.com"><FontAwesomeIcon icon={faAt} /> Send Email</a>
        <a className="contact-link" id="facebook-link" href="https://www.linkedin.com/in/mikatpt/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
      </div>
      <Footer />
    </section>
  );
}
