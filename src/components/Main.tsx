import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Card from "./Card";
const Main: React.FC<{ walletAddress: string }> = ({ walletAddress }) => {
  const [balance, setBalance] = useState("");
  //   const [transactions, setTransactions] = useState(0);
  //   const [faildTxs, setFailedTxs] = useState(0);
  //   const [approvedTxs, setApprovedTxs] = useState(0);
  //   const [collections, setCollections] = useState(0);
  //   const [nfts, setNfts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Get the network from the provider installed in the pc
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );

        //Request the balance in the wallet
        const balance = await provider.getBalance(walletAddress);
        const balanceInEth = ethers.utils.formatEther(balance);
        setBalance(balanceInEth);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  });

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <nav aria-label="alternative nav">
          <div className="bg-gray-700 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
              <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                  >
                    <i className="fas fa-tasks pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      Overview
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                  >
                    <i className="fa fa-envelope pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      Collections
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2  border-gray-800 hover:border-blue-600"
                  >
                    <i className="fas fa-chart-area pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                      History
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <div
            id="main"
            className="main-content flex-1 w-11/12 pt-3 bg-gray-100 md:mt-2 pb-24 md:pb-5 rounded-xl"
          >
            <div className="bg-gray-700 pt-3">
              <div className=" bg-gray-500 rounded-t-xl p-4 shadow text-2xl text-white">
                <h1 className="font-bold pl-2">Overview</h1>
              </div>
            </div>

            <div className="flex flex-wrap pr-4">
              <Card
                card_colors="from-green-200 to-green-100 border-b-4 border-green-600"
                underline_color="bg-green-600"
                card_text="ETH Avaliable"
                value={balance.substring(0, 6)}
              />
              <Card
                card_colors="from-pink-200 to-pink-100 border-b-4 border-pink-500"
                underline_color="bg-pink-600"
                card_text="Collections"
                value={balance.substring(0, 6)}
              />
              <Card
                card_colors="from-yellow-200 to-yellow-100 border-b-4 border-yellow-600"
                underline_color="bg-yellow-600"
                card_text="NFT"
                value={balance.substring(0, 6)}
              />
              <Card
                card_colors="from-blue-200 to-blue-100 border-b-4 border-blue-500"
                underline_color="bg-blue-600"
                card_text="Total Transactions"
                value={balance.substring(0, 6)}
              />
              <Card
                card_colors="from-indigo-200 to-indigo-100 border-b-4 border-indigo-500"
                underline_color="bg-indigo-600"
                card_text="Approved Transactions"
                value={balance.substring(0, 6)}
              />
              <Card
                card_colors="from-red-200 to-red-100 border-b-4 border-red-500"
                underline_color="bg-red-600"
                card_text="Failed Transactions"
                value={balance.substring(0, 6)}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
