import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
return (
    <footer className="">
    <div className={styles.container}>
        <div className="row justify-content-center">
            <div>
                
                <div>
                    
                    <a className="" href="index.html">
                        <Image src="/logo.png" alt=""/>
                    </a>
                    
                    <div >

                        <a className="twitter" href="https://twitter.com/PuppetsArts" target="_blank">
                            <i className="icon-social-twitter"></i>
                            <i className="icon-social-twitter"></i>
                        </a>
                        <a className="linkedin" href="https://www.instagram.com/puppetsarts/" target="_blank">
                            <i className="icon-social-instagram"></i>
                            <i className="icon-social-instagram"></i>
                        </a>
                        <a className="linkedin" href="https://t.me/PuppetsArtsCoin" target="_blank">
                            <i className="icon-paper-plane"></i>
                            <i className="icon-paper-plane"></i>
                        </a>
                        <a className="facebook" href="https://www.facebook.com/PuppetsArtsCoin" target="_blank">
                            <i className="icon-social-facebook"></i>
                            <i className="icon-social-facebook"></i>
                        </a>

                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a
                                href="https://app.unicrypt.network/amm/pancake-v2/pair/0xA78BcC11Fae66b81cA65868DFb5e673A22277433"
                                target="_blank">Liquidity Lock</a></li>
                        <li className="list-inline-item"><a href="https://puppetsarts.medium.com/"
                                target="_blank">Medium</a></li>
                        <li className="list-inline-item"><a
                                href="https://puppets-arts-coin.gitbook.io/puppets-arts/"
                                target="_blank">Whitepaper</a></li>
                        <li className="list-inline-item"><a href="https://opensea.io/collection/puppetsarts"
                                target="_blank">OpenSea</a></li>
                        <li className="list-inline-item"><a href="https://tofunft.com/collection/puppets-arts/items"
                                target="_blank">TofuNFT</a></li>

                    </ul>
                    
                    <div className="copyright-area py-2">contato@puppetsarts.com</div>
                    
                    <div className="copyright-area py-4">&copy;2023 Puppets Arts, All Rights Reserved</div>
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
)
}
