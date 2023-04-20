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
import { useEffect, useState } from "react";
import styles from "/styles/StakeToken.module.css";

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
                <h1 className={styles.title}>Welcome to staking app!</h1>

                <p className={styles.description}>
                  Stake certain amount and get reward tokens back!
                </p>
                <a className={styles.card}>
                  <p>{valor.toFixed(2)} PUPPETS</p>
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
                    placeholder= {novoValor.toFixed(2)}
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
                    placeholder= {novoRetirar.toFixed(2)}
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

