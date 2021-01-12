import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <main>
      <section className={styles.welcome}>
        <h1>Michael Chen</h1>
        <h2>selected works <br />of software engineering</h2>
      </section>
      <section className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.container}>
          <div className={styles.tile}>
            <h2>TypeTwo <span><i>a typing app built to track typing speed</i></span></h2>
            <a href="https://typetwo.vercel.app" target="_blank" rel="noreferrer">
              <img className={styles.thumbnail} src="/typetwo.png" alt="" />
            </a>
            <p>NextJS | React Hooks | PostgreSQL | D3 | EC2</p>
          </div>

          <div className={styles.tile}>
            <h2>Homents<span><i>a front-end recreation of a popular real estate site</i></span></h2>
            <a href="http://52.90.133.187:3000/" target="_blank" rel="noreferrer">
              <img id="personal-site" className={styles.thumbnail} src="/homents.png" alt="a trumpet" />
            </a>
            <p>NextJS | React Hooks | PostgreSQL | D3 | EC2</p>

          </div>
          <div className={styles.tile}>
            <h2>CryptoCurrency Tracker<span><i>a simple 30 day currency tracker</i></span></h2>
            <a href="http://52.90.133.187:3005/" target="_blank" rel="noreferrer">
              <img className={styles.thumbnail} id="image" src="/crypto.png" alt="" />
            </a>
            <p>React | Express | D3 | Redis</p>
          </div>
        </div>
      </section>
    </main>
  );
}
