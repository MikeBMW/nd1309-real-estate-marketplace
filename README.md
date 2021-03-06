# Real Estate Marketplace

> In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. 
> 
> Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase. Let's get started!

## Token

Name: IRealEstateToken<br>
Symbol: IRET<br>
Token Address: [0x4d1282a6b4B88ea1f74B783cF87e64557E4e62fa](https://rinkeby.etherscan.io/token/0x4d1282a6b4B88ea1f74B783cF87e64557E4e62fa)


## OpenSea

Original Owner: [0xb43eadc52571fd08291fa783aea561187d2c544d](https://rinkeby.opensea.io/accounts/0xb43eadc52571fd08291fa783aea561187d2c544d)<br>
Buyer of 5 Listings: [0x61c49cce1ac913552a67da45f61a4a8249d34a0a](https://rinkeby.opensea.io/accounts/0x61c49cce1ac913552a67da45f61a4a8249d34a0a)<br>

Buy Transaction: [0x0add1e2510300b2332cbd820181f18110c5092b73ee80cf104e3d63def82c0f1](https://rinkeby.etherscan.io/tx/0x0add1e2510300b2332cbd820181f18110c5092b73ee80cf104e3d63def82c0f1)


## Contracts

[SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0x4d1282a6b4B88ea1f74B783cF87e64557E4e62fa)<br>
[Verifier Contract](https://rinkeby.etherscan.io/address/0xd3A913F4C6dF9f7c466C7871601A81799b0afcF5)<br>
[IRealEstateToken Contract](https://rinkeby.etherscan.io/address/0x04CAeA9B8c6c3403bF0fAB713977e397f7736e5E)


```bash

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x92221d102973fdb163f040fa4246ff27266bd2911f6a091ffee37d9427e00d28
   > Blocks: 0            Seconds: 9
   > contract address:    0xd3A913F4C6dF9f7c466C7871601A81799b0afcF5
   > block number:        5020680
   > block timestamp:     1567448876
   > account:             0xb43eAdc52571fD08291FA783AEa561187d2C544D
   > balance:             16.3779415619999999
   > gas used:            189339
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00378678 ETH


   Replacing 'IRealEstateToken'
   ----------------------------
   > transaction hash:    0x0fe66a08505b8352d44837248791193bb7782eb46fe36449b84b1cae4672ea6f
   > Blocks: 0            Seconds: 9
   > contract address:    0x04CAeA9B8c6c3403bF0fAB713977e397f7736e5E
   > block number:        5020681
   > block timestamp:     1567448891
   > account:             0xb43eAdc52571fD08291FA783AEa561187d2C544D
   > balance:             16.3020665819999999
   > gas used:            3793749
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07587498 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xb7b7e9e16c59ee9f56fdf1e2fbe4a00f6346afa26a75de53654d4c386e8f2058
   > Blocks: 0            Seconds: 5
   > contract address:    0x4d1282a6b4B88ea1f74B783cF87e64557E4e62fa
   > block number:        5020682
   > block timestamp:     1567448906
   > account:             0xb43eAdc52571fD08291FA783AEa561187d2C544D
   > balance:             16.2119819219999999
   > gas used:            4504233
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09008466 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.16974642 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.17541242 ETH


```

## dApp

I created a simple dApp to mint tokens, which can be viewed in the `dapp` directory.


## Testing

1. `cd eth-contracts` directory
1. Run `truffle compile && truffle migrate --reset`
1. run `truffle test`

Contract artifacts including ABI can be found in `eth-contracts/build/contracts`

## Versions

### Truffle

```bash
Truffle v5.0.31 (core: 5.0.31)
Solidity - 0.5.1 (solc-js)
Node v10.16.0
Web3.js v1.2.1
```

### Docker

```bash
Client: Docker Engine - Community
 Version:           19.03.1
 API version:       1.40
 Go version:        go1.12.5
 Git commit:        74b1e89
 Built:             Thu Jul 25 21:18:17 2019
 OS/Arch:           darwin/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.1
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.5
  Git commit:       74b1e89
  Built:            Thu Jul 25 21:17:52 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.6
  GitCommit:        894b81a4b802e4eb2a91d1ce216b8817763c29fb
 runc:
  Version:          1.0.0-rc8
  GitCommit:        425e105d5a03fabd737a126ad93d62a9eeede87f
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
  ```
  
