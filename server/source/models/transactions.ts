import { BigNumber } from "ethers";

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

export {Transaction,Transactions}