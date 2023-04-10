import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./header.module.css";
import {
    tokenContractAddress,
} from "../../const/contractAddresses";
import {
    useAddress,
    useContract,
    useTokenBalance,
} from "@thirdweb-dev/react";
import Image from "next/image";

export default function Header() {
    const address = useAddress();
    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);


    const [ethPrice, setEthPrice] = useState(" ");
    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
        setShowText(true);
    };

    const handleMouseLeave = () => {
        setShowText(false);
    };
    useEffect(() => {
        const getEthPrice = async () => {
            const response = await axios.get(`https://app.puppetscoin.com/getethprice`, {});
            setEthPrice(response.data.usdPrice);
        };

        // Executa a função a primeira vez
        getEthPrice();

        // Executa a função a cada 10 minutos
        const interval = setInterval(() => {
            getEthPrice();
        }, 10 * 60 * 1000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={styles.navLeft}>
            <section className={styles.navMiddle}>
                <Image src="/logo.png"
                    alt="Puppets Logo"
                    width={25}
                    height={25} />

                <div
                    className={styles.objeto}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <section className={styles.link}>
                        ${" "}
                        <span className={styles.blueText}>{(Number(ethPrice) * 1000000000).toFixed(4).toLocaleString()} </span>
                    </section>
                    {showText && (
                        <div className={styles.texto}>
                            ~1 Billion de Puppets
                        </div>
                    )}
                </div>
            </section>

            {address ? (
                <section className={styles.navMiddle} >
                    <section>
                        Balance: ${" "}
                        <span className={styles.blueText}>{(new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(Number(tokenBalance?.displayValue) * Number(ethPrice) * 1000))}</span>

                    </section>
                </section>
            ) : (
                <section className={styles.link}>
                    Balance: $ 0
                    <span className={styles.blueText}></span>
                </section>
            )}

        </div>

    );



}