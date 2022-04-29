import React, { useState } from "react";
import { ReactComponent as MetamaskLogo } from "../Assets/metamask_logo.svg";
import { ReactComponent as EthLogo } from "../Assets/ether_logo.svg";
import Main from "./Main";

const Navbar: React.FC = () => {
  const [userWallet, setUserWallet] = useState("null");
  const [connectBtnText, setConnectBtnText] = useState("Connect Wallet");
  const [connectUser, setConnectUser] = useState(false);

  const accountChangeHandler= () =>{
    setConnectUser(false);
    setConnectBtnText("Connect Wallet");
  }

  const closeSession = () =>{
    accountChangeHandler();
    (window as any).ethereum.removeListener('accountsChanged', accountChangeHandler);
   // (window as any).location.reload();
  }
  const connectWallet = async () => {
    try {
      if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
        var request = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserWallet(request[0]);
        setConnectBtnText(
          `${request[0].substring(0, 5)}...${request[0].substring(
            request[0].length - 5
          )}`
        );
        setConnectUser(true);
      } else {
        alert("Please install metamask first");
      }
    } catch (e) {
      console.error(e);
    }
  };

  if(connectUser){
    (window as any).ethereum.on("accountsChanged",accountChangeHandler);
  }


  return (
    <>
      <header>
        <nav className="bg-gray-700 pt-2 md:pt-1 pb-1 px-1  mt-0 h-auto fixed w-full z-20 top-0">
          <div className="flex flex-wrap-items-center">
            <div className="flex flex-shrik md:w-1/3 justify-center md:justify-start text white mt-3">
              <a href="/" aria-label="Home">
                <span className="text-xl pl-2 text-white">
                  <EthLogo className=" pl-4 pb-2 inline w-10 h-10 fill-white" />

                  <h1 className="inline pl-4 pt-4">NFTFolio</h1>
                </span>
              </a>
            </div>
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2 m-3">
              <span className="relative w-full">
                <input
                  aria-label="search"
                  type="search"
                  id="search"
                  placeholder="Search"
                  className="w-full bg-gray-800 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded-md py-2 px-2 pl-10 appearance-none leading-normal"
                />
                <div className="absolute search-icon top-3 left-3">
                  <svg
                    className="fill-current pointer-events-none text-white w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </span>
            </div>
            <div className="flex w-full pt-2 content-center mb-3 justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <div className="relative inline-block">
                    <button
                      onClick={connectWallet}
                      className="drop-button text-white py-1 px-2 border-2 border-gray-500 rounded-xl"
                    >
                      {" "}
                      {connectBtnText}{" "}
                      <MetamaskLogo className="h-8 w-8 inline py-2" />
                    </button>
                  </div>
                </li>

                {connectUser ? (
                  <li className="flex-1 md:flex-none md:mr-3">
                    <div className="relative inline-block">
                      <button  className="drop-button text-white py-1 px-2 border-2 border-gray-500 rounded-xl" onClick={closeSession}>
                        <svg
                          className="h-8 w-8 inline py-2 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {connectUser ? <Main walletAddress={userWallet} /> : null}
    </>
  );
};

export default Navbar;
