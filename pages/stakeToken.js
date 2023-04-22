import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";
import Image from "next/image";
import styles from "/styles/StakeTokenMoralis.module.css";
import { useState, useEffect } from "react";
import axios from "axios";


const stakingContractAddress = "0x1c858295C0fEEbb372e2E6589CBc26D9D5DC52b7";

export default function Home() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState(0);


  // Initialize all the contracts
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress
  );

  // Get contract data from staking contract
  const { data: rewardTokenAddress } = useContractRead(staking, "rewardToken");
  const { data: stakingTokenAddress } = useContractRead(
    staking,
    "stakingToken"
  );

  // Initialize token contracts
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(stakingTokenAddress, "token");
  const { contract: rewardToken, isLoading: isRewardTokenLoading } =
    useContract(rewardTokenAddress, "token");

  // Token balances
  const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } =
    useTokenBalance(stakingToken, address);
  const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } =
    useTokenBalance(rewardToken, address);

  // Get staking data
  const {
    data: stakeInfo,
    refetch: refetchStakingInfo,
    isLoading: isStakeInfoLoading,
  } = useContractRead(staking, "getStakeInfo", address || "0");

  useEffect(() => {
    setInterval(() => {
      refetchData();
    }, 10000);
  }, []);

  const refetchData = () => {
    refetchRewardTokenBalance();
    refetchStakingTokenBalance();
    refetchStakingInfo();
  };
  const initialValue = 0;

  /** Lógica do segundo input */
  const [retirar, setRetirar] = useState(stakeInfo && parseFloat(ethers.utils.formatEther(stakeInfo[0].toString())) || 0);
  const [novoRetirar, setNovoRetirar] = useState(0);

  useEffect(() => {
    setRetirar(stakeInfo && parseFloat(ethers.utils.formatEther(stakeInfo[0].toString())) || 0);
  }, [stakeInfo && parseFloat(ethers.utils.formatEther(stakeInfo[0].toString()))]);

  const handlePorcentagemRetirar = (porcentagem) => {
    const novoRetirar = retirar * porcentagem / 100;
    setNovoRetirar(novoRetirar);
    setAmountToWithdraw(novoRetirar.toFixed(2));

  };

  /** Lógica do primeiro input */
  const [valor, setValor] = useState(parseFloat(stakingTokenBalance?.displayValue) || 0);
  const [novoValor, setNovoValor] = useState(0);

  useEffect(() => {
    setValor(parseFloat(stakingTokenBalance?.displayValue) || 0);
  }, [stakingTokenBalance?.displayValue]);


  const handlePorcentagem = (porcentagem) => {
    const novoValor = valor * porcentagem / 100;
    setNovoValor(novoValor);
    setAmountToStake(novoValor.toFixed(2));

  };

 
    const [stakingBalance, setStakingBalance] = useState(0);
  
    useEffect(() => {
      async function fetchStakingBalance() {
        try {
          const response = await axios.get('https://app.puppetscoin.com/stakingbalance');
          setStakingBalance(response.data.stakingBalance);
        } catch (e) {
          console.log(`Something went wrong: ${e}`);
        }
      }
  
      fetchStakingBalance();
    }, []);

    const [ethPrice, setEthPrice] = useState(" ");
    useEffect(() => {
      const getEthPrice = async () => {
          const response = await axios.get(`https://app.puppetscoin.com/getethprice`, {});
          setEthPrice(response.data.usdPrice);
      };

      // Executa a função a primeira vez
      getEthPrice();

      
  }, []);


  return (
    <div className={styles.resp}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.topo}>

              <div className={styles.heroBackground}>
                <div className={styles.heroBackgroundInner}>
                  <Image
                    src="/hero-gradient.png"
                    width={1390}
                    height={1390}
                    alt="Background gradient from red to blue"
                    quality={100}
                    className={styles.gradient}
                  />
                </div>
              </div>
              <div className={styles.heroImage}>
                <Image
                  src="/stake.png"
                  width={600}
                  height={600}
                  alt="Hero asset, NFT marketplace"
                  quality={100}
                  className={styles.heroAsset}
                />
              </div>


              <div className={styles.topo1}>

                <main className={styles.main}>
                  
                  <h1 className={styles.title}>Puppets staking app!</h1>
                  <a className={styles.total}>
                    <p>Total Puppets Staked: <span className={styles.Balance}>{parseFloat(stakingBalance/ 10 ** 18).toFixed(2)}</span></p>
                      <p>Balance Total: $ <span className={styles.blue}>{parseFloat(ethPrice*stakingBalance/ 10 ** 18).toFixed(2)}</span></p>
                    </a>
                  <a className={styles.card}>
                    <p>{valor.toFixed(2)} PUPPETS</p>
                    <span>~${(valor * ethPrice).toFixed(4)}</span>
                  </a>
                  <div>
                    <div className={styles.porcentagem}>
                      <button className={styles.porcent} onClick={() => handlePorcentagem(25)}>25%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagem(50)}>50%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagem(75)}>75%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagem(100)}>100%</button>
                    </div>

                    <div className={styles.stakeContainer}>
                      <input
                        className={styles.textbox}
                        type="number"
                        value={amountToStake}
                        onChange={(e) => setAmountToStake(e.target.value)}
                        placeholder={novoValor.toFixed(2)}
                      />
                      <Web3Button
                        className={styles.button}
                        contractAddress={stakingContractAddress}
                        action={async (contract) => {
                          await stakingToken.setAllowance(
                            stakingContractAddress,
                            amountToStake
                          );
                          await contract.call(
                            "stake",
                            ethers.utils.parseEther(amountToStake)
                          );
                          alert("Tokens staked successfully!");
                        }}
                      >
                        Stake!
                      </Web3Button>
                    </div>
                  </div>
                  <h2>Staked amount</h2>
                  <a className={styles.card}>
                    <p>{Number(retirar).toFixed(2)} PUPPETS</p> 
                    <span>~$ {(Number(retirar)*ethPrice).toFixed(4)}</span>
                  </a>
                  <div>
                    <div className={styles.porcentagem}>
                      <button className={styles.porcent} onClick={() => handlePorcentagemRetirar(25)}>25%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagemRetirar(50)}>50%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagemRetirar(75)}>75%</button>
                      <button className={styles.porcent} onClick={() => handlePorcentagemRetirar(100)}>100%</button>
                    </div>
                    <div className={styles.stakeContainer}>
                      <input
                        className={styles.textbox}
                        type="number"
                        value={amountToWithdraw}
                        onChange={(e) => setAmountToWithdraw(e.target.value)}
                        placeholder={novoRetirar.toFixed(2)}
                      />

                      <Web3Button
                        className={styles.button}
                        contractAddress={stakingContractAddress}
                        action={async (contract) => {
                          await contract.call("withdraw",
                            ethers.utils.parseEther(amountToWithdraw)
                          );
                          alert("Tokens unstaked successfully!");
                        }}
                      >
                        Unstake!
                      </Web3Button>
                    </div>
                  </div>
                  <h2>Current reward</h2>
                  <a className={styles.card}>
                    <p>
                      {stakeInfo && parseFloat(ethers.utils.formatEther(stakeInfo[1].toString())).toFixed(2)} PUPPETS
                    </p>
                    <span>~$ {stakeInfo && (parseFloat(ethers.utils.formatEther(stakeInfo[1].toString()))*ethPrice).toFixed(4)}</span>
                  </a>

                  <div className={styles.grid}>
                    <Web3Button
                      className={styles.button}
                      contractAddress={stakingContractAddress}
                      action={async (contract) => {
                        await contract.call("claimRewards");
                        alert("Rewards claimed successfully!");
                     }}
                    >
                      Claim rewards!
                    </Web3Button>
                  </div>
                </main>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
