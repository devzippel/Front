import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import  "../const/contractAddresses";
import "../styles/globals.css";
import '../global-styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faFire } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee, faFire)
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (    
    <ThirdwebProvider activeChain="binance">
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
  />
     <Head>
        <title>Puppets Coin</title>
        <meta name="description" content="PUPPETS." />
        <meta property="og:title" content="Puppets Coin" />
        <meta property="og:description" content="PUPPETS." />
        <meta property="og:image" content="https://puppetscoin.com/thumbnail.png" />
      </Head>
      {/* Render the navigation menu above each component */}
      
      
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
      <Navbar />
      </ThirdwebProvider>
  );

}

export default MyApp;
