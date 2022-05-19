
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

export {NFT,NFTs}