import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Header from "../Header/header";
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../Footer/Footer";



/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();
  const [showStakeSubMenu, setShowStakeSubMenu] = useState(false);
  const [showMarketSubMenu, setShowMarketSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleStakeMouseEnter = () => {
    setShowStakeSubMenu(true);
  };

  const handleStakeMouseLeave = () => {
    setShowStakeSubMenu(false);
  };

  const handleMarketMouseEnter = () => {
    setShowMarketSubMenu(true);
  };

  const handleMarketMouseLeave = () => {
    setShowMarketSubMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuClass = showMenu ? styles.showMenu : '';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          {/***********Menu sidebar******************************************************************* */}
          <div className={styles.hamburger} onClick={handleSidebar}>
            {sidebarOpen ? (
              <FontAwesomeIcon icon={faTimes} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="3x" />
            )}
          </div>
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
            <ul>
                <Link href="/" className={styles.sider} onClick={handleSidebar}>
                🏠 Home
                </Link>
                <Link href="/stakeToken" className={styles.sider} onClick={handleSidebar}>
                🪙  Stake Token
                </Link>
                <Link href="/stakeNFT" className={styles.sider} onClick={handleSidebar}>
                🖼  Stake NFT 
                </Link>
                
                <Link href="" className={styles.sider} onClick={handleSidebar}>
                🎁  Mint NFT 
                </Link>

                <Link href="/nftbnb" className={styles.sider} onClick={handleSidebar}>
                <Image src="/binance.png"
                    alt="Puppets Logo"
                    width={20}
                    height={20} />   
                    &nbsp;MyNFTBNB 
                </Link>    

                 <Link href="/nfteth" className={styles.sider} onClick={handleSidebar}>
                 <Image src="/ETH.png"
                    alt="Puppets Logo"
                    width={13}
                    height={21} /> 
                    &nbsp; MyNFTETH 
                 </Link>               
            </ul>
            <div>
              <Footer/>
            </div>
          </div>
          
          {/****************************************************************************** */}
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={250}
              height={50}
              alt="Puppets Coin logo"
              className={styles.logonavgrande}
            />
            <Image
              src="/logocel.png"
              width={50}
              height={50}
              alt="Puppets Coin logo"
              className={styles.logonav}
            />
          </Link>
        </div>
        <div className={`${styles.navRight} ${menuClass}`}>
          <div className={styles.menu}>
            <Link href="/" className={styles.link} >
              🏠 Home
            </Link>
            <div
              className={styles.link}
              onMouseEnter={handleStakeMouseEnter}
              onMouseLeave={handleStakeMouseLeave}
            > 🪙 Stake
              {showStakeSubMenu && (
                <div className={styles.submenu}>
                  <Link href="/stakeToken" className={styles.link}>
                  &nbsp;🪙&nbsp;Stake Token 
                  </Link>
                  <Link href="/stakeNFT" className={styles.link}>
                 🖼 &nbsp;Stake NFT 
                  </Link>
                </div>
              )}
            </div>
           <Link href="/nft" className={styles.link}>
            🎁 Mint 
              </Link>
            <div
              className={styles.link}
              onMouseEnter={handleMarketMouseEnter}
              onMouseLeave={handleMarketMouseLeave}
            > 🖼 MyNFT
              {showMarketSubMenu && (
                <div className={styles.submenu}>
                  <Link href="/nftbnb" className={styles.link}>
                  <Image src="/binance.png"
                    alt="Puppets Logo"
                    width={16}
                    height={16} />
                    &nbsp; MyNFT BNB
                  </Link>
                  <Link href="/nfteth" className={styles.link}>
                  <Image src="/ETH.png"
                    alt="Puppets Logo"
                    width={11}
                    height={18} /> 
                    &nbsp; MyNFT ETH 
                  </Link>
                </div>
              )}
            </div>
            <div>
              <Header />
            </div>
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet className={styles.btn}/>
          </div>
        </div>
      </nav>
      
    </div>
  );
}