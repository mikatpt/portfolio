import styles from '../styles/Projects.module.css';

const background = 'linear-gradient(30deg, rgb(153, 114, 1) 0%, rgb(242, 193, 0) 100%)';

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
            <h2>Prélude à Suite Bergamasque<span><i>claude debussy; arr. chen</i></span></h2>
            <audio controls="controls">
              <track kind="captions" />
              <source src="http://docs.google.com/uc?export=open&id=14woaVrNhTcFC_CMhcfg7ygzxmp4eeEi1" />
            </audio>
          </div>

          <div className={styles.tile}>
            <h2>Presentation of the Rose<span><i>richard strauss; arr. chen</i></span></h2>
            <p>Conducted by Ben Manis, feat. Michael Chen and Jon Kaplan</p>
            <br />
            <audio controls="controls">
              <track kind="captions" />
              <source src="http://docs.google.com/uc?export=open&id=1wVsSD8wgdTzUW1nE915myAM5xHT6FUEv" />
            </audio>
            <br /><br />
          </div>

          <div className={styles.tile} style={{ minHeight: '80vh' }}>
            <h2>Shostakovich String Quartet No.3<span><i>for five brass instruments</i></span></h2>
            <div className={styles.videowrapper}>

              <iframe title="shostakovich" width="100%" height="100%" src="https://www.youtube.com/embed/iFNL3Me1adw" frameBorder="0" allowFullScreen />
            </div>
          </div>

          <div className={styles.tile} style={{ minHeight: '80vh' }}>
            <h2>Jukebox Eolian<span><i>a public art piece in seven installments</i></span></h2>
            <div className={styles.videowrapper}>
              <iframe title="eolian" width="100%" height="100%" src="https://www.youtube.com/embed/QoSX9bOo0rM" frameBorder="0" allowFullScreen />
            </div>
          </div>

          <div className={styles.tile} style={{ minHeight: '80vh' }}>

            <div className={styles.videowrapper}>
              <iframe title="eolian-cont." width="100%" height="100%" src="https://www.youtube.com/embed/ihZJZqe9Z9Y" frameBorder="0" allowFullScreen />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
