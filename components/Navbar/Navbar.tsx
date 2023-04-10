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
          <button className={styles.hamburger} onClick={handleSidebar}>
            {sidebarOpen ? (
              <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
            <ul>
                <Link href="/" className={styles.sider} >
                🏠 Home
                </Link>
                <Link href="/stakeToken" className={styles.sider} >
                🪙  Stake Token
                </Link>
                <Link href="/stakeNFT" className={styles.sider} >
                🖼  Stake NFT
                </Link>
                
                <Link href="/mint" className={styles.sider}>
                🖼 Mint NFT
                </Link>

                <Link href="/buy" className={styles.sider}>
                🛒 Market BUY
                </Link>    

                 <Link href="/sell" className={styles.sider}>
                🛒 Market SELL
                 </Link>               
            </ul>
          </div>
          {/****************************************************************************** */}
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={68}
              height={68}
              alt="Puppets Coin logo"
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
                  <Link href="/stakeNFT" className={styles.link}>
                    🖼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NFT    &nbsp;&nbsp;
                  </Link>
                  <Link href="/stakeToken" className={styles.link}>
                    🪙&nbsp;&nbsp;&nbsp;&nbsp;Token
                  </Link>
                </div>
              )}
            </div>
            <Link href="/mint" className={styles.link}>
              🖼 Mint
            </Link>
            <div
              className={styles.link}
              onMouseEnter={handleMarketMouseEnter}
              onMouseLeave={handleMarketMouseLeave}
            >🛒 Market
              {showMarketSubMenu && (
                <div className={styles.submenu}>
                  <Link href="/buy" className={styles.link}>
                    🖼&nbsp;&nbsp;&nbsp;&nbsp;  Buy  &nbsp;&nbsp;
                  </Link>
                  <Link href="/sell" className={styles.link}>
                    🪙&nbsp;&nbsp;&nbsp;&nbsp;  Sell &nbsp;&nbsp;
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