import Head from 'next/head';

import MusicProjects from '../components/MusicProjects';

export default function Music() {
  return (
    <div>
      <Head><title>Michael Chen - Musical Projects</title><link rel="icon" href="/favicon.ico" /></Head>
      <MusicProjects />
    </div>
  );
}
