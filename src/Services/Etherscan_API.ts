import React from 'react'
import { ethers } from "ethers";
const Etherscan_API = () => {



    
}


const getBalance = async (walletAddress:string) => {
    try {
      fetch(`/wallet/balance/${walletAddress}`).then(
        response => response.json()
      ).then(
        data =>{
          return ethers.utils.formatEther(data.message);
        }
      )
    } catch (e) {
      console.error(e);
    }
  };
export default {Etherscan_API,getBalance}