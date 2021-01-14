import styles from '../styles/Projects.module.css';

const background = 'linear-gradient(30deg, rgb(0, 89, 81) 0%, rgb(0, 75, 104) 100%)';

export default function Projects() {
  return (
    <main>
      <section className={styles.welcome} style={{ backgroundImage: background }}>
        <h1>Michael Chen</h1>
        <h2>selected musical works</h2>
      </section>
      <section className={styles.projects}>
        <h1>Musical Projects</h1>
        <div className={styles.container}>
          <div className={styles.tile}>
            <h2>Prélude à Suite Bergamasque</h2>
            <span className={styles.d}><b><i>claude debussy; arr. chen</i></b></span>
            <br />
            <audio controls="controls">
              <track kind="captions" />
              <source src="https://dl.dropbox.com/s/uwobef6h0p0jmnv/01%20Pr%C3%A9lude%20%C3%A0%20Suite%20Bergamasque.mp3" />
              <source src="http://docs.google.com/uc?export=open&id=1508seWbmY7eLtR4AVMyeJbPHCa9vT7mS" />
            </audio>
          </div>

          <div className={styles.tile}>
            <h2>Presentation of the Rose</h2>
            <span className={styles.d}><b><i>richard strauss; arr. chen</i></b></span>
            <p>Conducted by Ben Manis, feat. Michael Chen and Jon Kaplan</p>
            <br />
            <audio controls="controls">
              <track kind="captions" />
              <source src="http://docs.google.com/uc?export=open&id=1wVsSD8wgdTzUW1nE915myAM5xHT6FUEv" type="audio/mp3" />
            </audio>
          </div>

          <div className={styles.tile}>
            <h2>Shostakovich String Quartet 3</h2>
            <span className={styles.d}><b><i>for five brass instruments; arr.chen</i></b></span>
            <div className={styles.videowrapper}>

              <iframe title="shostakovich" width="100%" height="100%" src="https://www.youtube.com/embed/iFNL3Me1adw" frameBorder="0" allowFullScreen />
            </div>
          </div>

          <div className={styles.tile}>
            <h2>Jukebox Eolian</h2>
            <span className={styles.d}><b><i>a public art piece in seven installments</i></b></span>
            <div className={styles.videowrapper}>
              <iframe title="eolian" width="100%" height="100%" src="https://www.youtube.com/embed/QoSX9bOo0rM" frameBorder="0" allowFullScreen />
            </div>
          </div>

          <div className={styles.tile}>

            <div className={styles.videowrapper}>
              <iframe title="eolian-cont." width="100%" height="100%" src="https://www.youtube.com/embed/ihZJZqe9Z9Y" frameBorder="0" allowFullScreen />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
