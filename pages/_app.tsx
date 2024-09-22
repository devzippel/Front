import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../const/contractAddresses";
import "../styles/globals.css";
import "../global-styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faFire } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { useRouter } from 'next/router';
library.add(fab, faCoffee, faFire);



// Definir um tipo personalizado para os valores válidos de activeChain
type ValidChain = "binance" | "ethereum";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  let activeChain: ValidChain = "binance"; // Valor padrão

   // Verificar a página atual e definir a rede correspondente
   if (pathname === '/mintETH' || pathname === '/nfteth') {
    activeChain = "ethereum";
  } else if (pathname === '/mintBNB' || pathname === '/nftbnb') {
    activeChain = "binance";
  }

  return (
    <>
      <ThirdwebProvider 
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID} 
      activeChain = {activeChain} 
        dAppMeta={{
        name: "Puppets Coin",
        description: "Token, Stake, NFT",
        logoUrl: "https://puppetscoin.com/logow.png",
        url: "https://puppetscoin.com/",
        isDarkMode: true        
      }}>
        <Navbar />
        <Component {...pageProps} />
      </ThirdwebProvider>
     

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
        <meta name="description" content="PUPPETS." />
        <meta property="og:title" content="Puppets Coin" />
        <meta property="og:description" content="PUPPETS." />
        <meta
          property="og:image"
          content="https://puppetscoin.com/thumbnail.png"
        />
        <meta property="og:url" content="https://puppetscoin.com" />
        <meta property="og:type" content="https://puppetscoin.com" />
      </Head>
    </>
  );
}

export default MyApp;
