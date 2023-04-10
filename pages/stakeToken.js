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

const stakingContractAddress = "0xaee1bd008d26fA53e26216fd96784C2544cd05AE";

export default function Home() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);

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

                <div className={styles.stakeContainer}>
                  <input
                    className={styles.textbox}
                    type="number"
                    value={amountToStake}
                    onChange={(e) => setAmountToStake(e.target.value)}
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
                <h2>Staked amount</h2>
                <a className={styles.card}>
                  <p>
                    {stakeInfo && ethers.utils.formatEther(stakeInfo[0].toString())}
                  </p>
                </a>
                <div className={styles.stakeContainer}>
                  <input
                    className={styles.textbox}
                    type="number"
                    value={amountToStake}
                    onChange={(e) => setAmountToStake(e.target.value)}
                  />

                  <Web3Button
                    className={styles.button}
                    contractAddress={stakingContractAddress}
                    action={async (contract) => {
                      await contract.call("withdraw",
                        ethers.utils.parseEther(amountToStake)
                      );
                      alert("Tokens unstaked successfully!");
                    }}
                  >
                    Unstake!
                  </Web3Button>

                </div>
                <h2>Current reward</h2>
                <a className={styles.card}>
                  <p>
                    {stakeInfo && ethers.utils.formatEther(stakeInfo[1].toString())}
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
