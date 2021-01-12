import Head from 'next/head';

import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head><title>Michael Chen - Portfolio</title><link rel="icon" href="/favicon.ico" /></Head>
      <Projects />
    </div>
  );
}
