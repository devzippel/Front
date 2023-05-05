import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import React, { Component } from 'react';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faDiscord, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCoins, faCopy } from '@fortawesome/free-solid-svg-icons';




export default function Footer() {

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

        <div>
            <div className="row justify-content-center">

                <div>
                    <div>

                        
                        <div className={styles.linha}>
                            <a className={styles.linha} href="https://twitter.com/PuppetsCoin" target="_blank">
                                <FontAwesomeIcon icon={faTwitter}  />
                            </a>
                            <a className={styles.linha} href="https://www.instagram.com/puppetsarts/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />                                
                            </a>
                            <a className={styles.linha} href="https://discord.gg/vr2q4DUcZN"
                                target="_blank">
                                <FontAwesomeIcon icon={faDiscord} size="1x" />                               
                            </a>
                            <a className={styles.linha} href="https://t.me/PuppetsCoin" target="_blank">
                                <FontAwesomeIcon icon={faTelegram} size="1x" />
                            </a>
                            <a className={styles.linha} href="https://www.facebook.com/PuppetsArtsCoin" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            </a>
                        </div>

                        <ul className={styles.listInline}>
                            <li className={styles.listInline}><a href="https://puppetsarts.medium.com/"
                                target="_blank">Medium</a></li>
                            <li className={styles.listInline}><a href="https://wiki.puppetscoin.com/" target="_blank">Whitepaper</a></li>                            
                        </ul>
                        <div className={styles.quadro}> 0xdA2c0C...9E5eCb7Efb7 
                        <div onClick={handleCopyClick} style={{ cursor: 'pointer', margin: '4px' }}>
                             <FontAwesomeIcon icon={faCopy} />
                        </div>
                            {isCopied && <div>Copied!</div>}
                        </div>

                        <div className={styles.email}>marketing@puppetscoin.com</div>

                    </div>


                    <div id="scroll-to-top" className="scroll-to-top">
                        <a href="#header" className="smooth-anchor">
                            <i className="fa-solid fa-arrow-up"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}
