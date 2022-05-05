import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ethers } from "ethers";
import Overview from "./Overview";
import Collections from "./Collections";
import History from "./History";
const Main: React.FC<{ walletAddress: string }> = ({ walletAddress }) => {
  const [balance, setBalance] = useState("");
  const [transactions, setTransactions] = useState<Array<any>>([]);
  const API_KEY = "7N3RERZUH87SM2KX7Y15GVID9QQWPJVVQW";
  const network = "homestead";
  //   const [faildTxs, setFailedTxs] = useState(0);
  //   const [approvedTxs, setApprovedTxs] = useState(0);
  //   const [collections, setCollections] = useState(0);
  //   const [nfts, setNfts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Get the network from the provider for the consult
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );

        //Request the balance in the wallet
        const balance = await provider.getBalance(walletAddress);
        const balanceInEth = ethers.utils.formatEther(balance);
        setBalance(balanceInEth);

        //Provider for the Etherscan API
        let etherscanProvider = new ethers.providers.EtherscanProvider(
          network,
          API_KEY
        );

        const etherscan_txs = await etherscanProvider.getHistory(walletAddress);
        setTransactions(etherscan_txs);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [walletAddress]);

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <nav aria-label="alternative nav">
          <div className="bg-gray-700 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
              <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                  <Link
                    to="/overview"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                  >
                    Overview
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block"></span>
                  </Link>
                </li>

                <li className="mr-3 flex-1">
                  <Link
                    to="/collections"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                  >
                    Collections
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block"></span>
                  </Link>
                </li>

                <li className="mr-3 flex-1">
                  <Link
                    to="/history"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500"
                  >
                    History
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <Routes>
            <Route path="/overview" element={<Overview balance={balance} />} />
            <Route
              path="/collections"
              element={<Collections transactions={transactions} />}
            />
            <Route
              path="/history"
              element={<History transactions={transactions} />}
            />
          </Routes>
        </section>
      </div>
    </main>
  );
};

export default Main;
