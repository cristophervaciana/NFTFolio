import { Request, Response, NextFunction } from "express";
import axios, { Axios, AxiosResponse } from "axios";
import { BigNumber } from "ethers";
import { StringLiteralLike } from "typescript";

const API_KEY = "7N3RERZUH87SM2KX7Y15GVID9QQWPJVVQW";

interface Transaction{
    hash: String;
    type: Number;
    accessList: null;
    blockHash: String;
    blockNumber: Number;
    transactionIndex: Number;
    confirmations: Number;
    from: String;
    gasPrice: BigNumber;
    gasLimit: BigNumber;
    to: String;
    value: BigNumber;
    nonce: Number;
    data: String;
    creates: null;
    chainId: Number;
    timestamp: Number;
}
interface Transactions {
    status: Number;
    message: String;
    result:Array<Transaction>;

}
interface NFT{
    blockNumber: Number;
    timeStamp: Number;
    hash: String;
    nonce: Number;
    blockHash: String;
    from: String;
    contractAddress: String;
    to: String;
    tokenID: Number;
    tokenName: String;
    tokenSymbol: String;
    tokenDecimal: Number;
    transactionIndex: Number;
    gas: Number;
    gasPrice: Number;
    gasUsed: Number;
    cumulativeGasUsed: Number;
    input: String;
    confirmations: Number;
}
interface NFTs {
    status: Number;
    message: String;
    result:Array<NFT>;
}

const getERC721 = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  let wallet: string = req.params.wallet;

  const API_URL = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${wallet}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`;
  let result: AxiosResponse = await axios.get(API_URL);
  let posts:NFTs  = result.data;
  return res.status(200).json({
    message: posts.result
  });
};

const getBalance = async (req: Request, res: Response, next: NextFunction) => {
  let wallet: string = req.params.wallet;

  const API_URL = `https://api.etherscan.io/api?module=account&action=balance&address=${wallet}&tag=latest&apikey=${API_KEY}`;
  let result: AxiosResponse = await axios.get(API_URL);
  let posts = result.data;
  return res.status(200).json({
    message: posts.result
  });
};


const getTransactions = async (req:Request, res: Response , next: NextFunction) =>{
    let wallet =  req.params.wallet;

    const API_URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${wallet}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`
    let result: AxiosResponse = await axios.get(API_URL);
    let posts:Transactions = result.data;
    return res.status(200).json({
        message:posts.result
    })
};

export default { getERC721,getBalance, getTransactions};
