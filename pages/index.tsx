import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faDiscord, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { faCoins, faCopy } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";
/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */


const Home: NextPage = () => {

  const [isCopied, setIsCopied] = useState(false);
  const address = '0xdA2c0CDf7d764F8C587380CAdF7129E5eCb7Efb7';

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);

      // Reset the button state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
  return (
   
    <div className={styles.container}>
       <div>
        <Head>
           <meta property="og:image" content="https://puppetscoin.com/thumbnail.png" />
        </Head>
      </div>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.topo}>

            <div className={styles.topo1}>
              <h1>Puppets Coin</h1>
              <hr className={`${styles.divider} ${styles.spacerTop}`} />
              <p className={styles.blueText}>Puppets Coin is a revolutionary token created to add value to our NFTs and provide a source of passive income for its holders.</p>
              <p>
                <Link className={styles.heroCta}
                  href="https://pancakeswap.finance/swap?outputCurrency=0xdA2c0CDf7d764F8C587380CAdF7129E5eCb7Efb7" 
                  target="_blank">
                  Buy Puppets
                </Link>
                <Link
                  className={styles.secondaryCta1}
                  href="https://tofunft.com/collection/puppets-arts/items"
                  target="_blank"
                >
                  Buy NFTs
                </Link>
              </p>
              <p className={styles.blueText}>
                Supported exchanges to buy Puppets Coin.
              </p>
              <Link
                className={styles.widthButton}
                href="https://www.finexbox.com/Home/Orders/market/pair/PUPPETS-USDT.html"
                target="_blank">
                <Image
                  src="/finexbox.png"
                  width={102}
                  height={20}
                  alt="Hero asset, NFT marketplace"

                />
              </Link>
              <Link
                className={styles.widthButton}
                href="https://tokpie.com/view_exchange/puppets-bnb/"
                target="_blank">
                <Image
                  src="/tokpie_logo.png"
                  width={90}
                  height={16}
                  alt="Hero asset, NFT marketplace"

                />
              </Link>
            </div>
            <div className={styles.heroBackground}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
            <div className={styles.heroAssetFrame}>
              <Image
                src="/astro.png"
                width={305}
                height={320}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
            </div>
          </div>

          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Token, NFT, Stake and Market
                </span>
                <hr className={`${styles.divider} ${styles.spacerTop}`} />
              </h1>

              <p className={styles.heroSubtitle}>
                A project that uses tokens and NFTs to generate passive income for its holders. The token has five different ways to burn its supply.
              </p>

            </div>
          </div>
        </div>

      </div>
      <div className={styles.heroCtaContainer}>
        <div>
          <Image
            src="/purple.png"
            width={1200}
            height={360}
            alt="Hero asset, NFT marketplace"
            quality={100}
            className={styles.purple}
          />
        </div>
      </div>
      <div className={styles.heroBodyContainer}>
        <div className={styles.heroBody}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleGradient}>
              NFTs Puppets Arts
            </span>
          </h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.topo}>

            <div className={styles.topo1}>
              <h1>Puppets Coin</h1>

              <p className={styles.blueText}>Five ways to burn.</p>
              <hr className={`${styles.divider} ${styles.spacerTop}`} />
              <p >
                &nbsp;&nbsp;
                🔥 Buy back Token
              </p>
              <p>

                &nbsp;&nbsp;
                🔥 10% of NFT sales
              </p>
              <p>

                &nbsp;&nbsp;
                🔥 1% of NFT market fees
              </p>
              <p>
                &nbsp;&nbsp;
                🔥 1% of NFT resale fees
              </p>
              <p>
                &nbsp;&nbsp;
                🔥 Manual burning
              </p>
            </div>
            <div className={styles.heroBackground}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
            <div className={styles.heroAssetFrame}>
              <Image
                src="/futuristic.png"
                width={305}
                height={320}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
            </div>
          </div>
        </div>
      </div>



      <h3 className={styles.titulo}>Find us On</h3>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      <div className={styles.bloco}>

        <div className={styles.exchange}>
          <Link href="https://www.finexbox.com/Home/Orders/market/pair/PUPPETS-USDT.html" >
            <Image
              src="/finexbox.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}

            />
          </Link>
        </div>


        <div className={styles.exchange}>
          <Link href="https://pancakeswap.finance/swap?outputCurrency=0xdA2c0CDf7d764F8C587380CAdF7129E5eCb7Efb7" target="_blank">
            <Image
              src="/PancakeSwap.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}
            />
          </Link>
        </div>

        <div className={styles.exchange}>
          <Link href="https://poocoin.app/tokens/0xda2c0cdf7d764f8c587380cadf7129e5ecb7efb7" target="_blank">
            <Image
              src="/poocoin.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div className={styles.bloco}>

        <div className={styles.exchange}>
          <Link href="https://tokpie.com/view_exchange/puppets-bnb/" >
            <Image
              src="/tokpie_logo.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}

            />
          </Link>
        </div>


        <div className={styles.exchange}>
          <Link href="https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut&utm_source=telegram&utm_medium=tgbot&utm_campaign=PUPPETS" target="_blank">
            <Image
              src="/BoggedFinance.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}
            />
          </Link>
        </div>

        <div className={styles.exchange}>
          <Link href="" >
            <Image
              src="/CoinGecko.png"
              width={200}
              height={40}
              alt="Find"
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div>

        <div className={styles.container}>
          <div className={styles.heroBackgroundD}>
            <Image
              src="/hero-gradient.png"
              width={1390}
              height={1390}
              alt="Background gradient from red to blue"
              quality={100}
              className={styles.gradient}
            />
          </div>

          <div className={styles.parent}>

            <div className={styles.text} >
              <h1>Long run</h1>
              <p className={styles.blueText}>Puppets is a forward-looking project that is focused on achieving sustainable long-term growth. As we continue to develop and improve our offerings, we anticipate that the value of Puppets will appreciate over time. While this journey may be lengthy, we are confident that our efforts will result in significant benefits for all stakeholders involved.</p>
            </div>


            <div className={styles.heroAssetFrame1}>
              <Image
                src="/Crypto.png"
                width={360}
                height={640}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.crypto}
              />
            </div>

            <div className={styles.text}>
              <h1>Reliance</h1>
              <p className={styles.blueText}>In the cryptocurrency market, trust is the foundation upon which all successful projects are built. Puppets was born with the mission of developing a community-driven token that can be traded with confidence, free from the fear of scams or rug pulls. Our commitment to transparency and accountability is at the core of our project, and we believe that it will help us build lasting trust and credibility among our users.</p>
            </div>

          </div>


          <div className={styles.parent}>

            <div className={styles.textdois} >
              <h3 className={styles.h3}>3% bulback Token</h3>
              <p className={styles.blueText}>
                {`A percentage of fees are added on liquidity. Our token has a buyback function. Every time it is traded, this repurchase occurs and a percentage is burned by decreasing the token's circulating supply. This function makes the Puppets Coin Token extremely Hyperdeflationary.`}</p>
            </div>
            <div className={styles.textdois}>
              <h3 className={styles.h3}>3% Stake Pool</h3>
              <p className={styles.blueText}>3% of our fees are added to our Stacke pool.
                1% for Puppets Coin Token pool.
                1% for NFT one Puppets Arts pool.
                1% this tax is used for project buy back or burn.</p>
            </div>

            <div className={styles.textdois}>
              <h3 className={styles.h3}>3% Marketing & Development</h3>

              <p className={styles.blueText}>We need to ensure that Puppets gets the proper exposure it needs to create a thriving community. This fee is used solely for new listing development and marketing purposes.</p>
            </div>

          </div>
          <div className={styles.copy}>
            <div className={styles.button1}>
              <Link className={styles.secondaryCta}
                href="/boxNFT"
                target="_blank"
              >
                BUY PUPPETS&nbsp;&nbsp; <FontAwesomeIcon icon={faCoins} />
              </Link>
              <div className={styles.quadro}> {address}
                <div onClick={handleCopyClick} style={{ cursor: 'pointer', margin: '3px' }}>
                  <FontAwesomeIcon icon={faCopy} />
                </div>
                {isCopied && <div>Copied!</div>}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.heroCtaContainer}>
        <div>
          <Image
            src="/roadmap.png"
            width={1200}
            height={675}
            alt="Hero asset, NFT marketplace"
            quality={100}
            className={styles.roadmap}
          />
        </div>
      </div>
      
      <div className={styles.parent}>

            <div className={styles.text} >
              <h1>Stake NFT</h1>
              <p className={styles.blueText}>You can buy Puppets Arts NFTs and bet on our Stake platform. Where you can earn passive income every day, while the staking period of your NFTs lasts, you can continue staking.</p>
            </div>


            <div className={styles.heroAssetFrame1}>
              <Image
                src="/collection.png"
                width={440}
                height={440}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.porco}
              />
            </div>

            <div className={styles.text}>
              <h1>Stake Token</h1>
              <p className={styles.blueText}>You can stake your Puppets Coin tokens on our Stake Token platform. Our platform is the ideal place where you can earn passive income every day, just keep your tokens in Stake.</p>
            </div>

          </div>{/*********************************************************************************************************************************************************** */}

      <footer className="">
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div>
              <div>

                <Link className="" href="/">
                  <Image src="/logo.png"
                    width={200}
                    height={200}
                    alt="Logo" />
                </Link>

                <div className={styles.listInline}>

                  <a className={styles.listInline} href="https://twitter.com/PuppetsCoin" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </a>
                  <a className={styles.listInline} href="https://www.instagram.com/puppetscoin/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </a>
                  <a className={styles.listInline} href="https://discord.gg/vr2q4DUcZN" 
                  target="_blank">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </a>
                  <a className={styles.listInline} href="https://t.me/PuppetsCoin" target="_blank">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </a>
                  <a className={styles.listInline} href="https://www.facebook.com/PuppetsArtsCoin" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>

                </div>
                <ul className={styles.listInline}>
                  <li className={styles.listInline}><a
                    href="https://wiki.puppetscoin.com"
                    target="_blank">Whitepaper</a></li>
                  <li className={styles.listInline}><a 
                    href="https://opensea.io/collection/puppetsarts"
                    target="_blank">OpenSea</a></li>
                  <li className={styles.listInline}><a href="https://tofunft.com/collection/puppets-arts/items"
                    target="_blank">TofuNFT</a></li>

                </ul>

                <div className={styles.listInline}>marketing@puppetscoin.com</div>

                <div className={styles.listInline}>2023 Puppets Arts, All Rights Reserved</div>
              </div>


              <div id="scroll-to-top" className="scroll-to-top">
                <a href="#header" className="smooth-anchor">
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>




  );
};

export default Home;
