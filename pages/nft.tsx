import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/nft.Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Choose which network you want to mint your NFT PUPPETS FUNNY</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mintBNB`)}
        >
          {/* Mint a new NFT */}
          <Image src="/binance.png" alt="token" width={70} height={70} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT BNB</h2>
          <p className={styles.selectBoxDescription}>
          Mint an NFT Puppets Funny from the Binance Network that makes it possible to put in Staking to receive Puppets coin reward token
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mintETH`)}
        >
          {/* Staking an NFT */}
          <Image src="/ethereum.png" alt="ETH" width={36} height={70} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT ETH</h2>
          <p className={styles.selectBoxDescription}>
          Mint an NFT Puppets Funny from the Ethereun Network <b>THIS NFT DOES NOT PARTICIPATE IN STAKING</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
