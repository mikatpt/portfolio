/* eslint-disable react/prop-types */
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import NavBar from '../components/NavBar';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A portfolio website with engineering and musical projects" />
        <meta name="title" property="og:title" content="Portfolio" />
        <meta property="og:type" content="Website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:description" content="A portfolio website with engineering and musical projects" />
        <meta name="author" content="Michael Chen" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
