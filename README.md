# Proof-of-concept Injectable Arweave Wallet Provider

## Motivation

The Arweave ecosystem is currently inherently insecure for users since the only way to interact with Dapps is to provide your private key to each dapp for every interaction and trust that the dapp isn't going to do something malicious with your funds. This browser extension is a proof of concept for an injectable wallet interface similar to Ethereum's model of injectable wallet providers that popular Web3 wallets like [Metamask](https://metamask.io/) and the various Web3 mobile wallets provide. As this is just a proof of concept, it doesn't deal with any of the niceties of wallet management but is evidence that this is a workable approach that should be more fully explored by the Arweave ecosystem.

## Installing

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Run `npm install` to install the dependencies.
4. Run `npm start`
5. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
6. Pin the extension to your browser extensions list in browser

## Using the extension in the demo app

1. Run `npm run-demo-app`
2. Navigate to localhost:3001
3. Click on the extension's browser icon and then the "Load Wallet" button in the popup.
4. Now, click on the "connect wallet" button
5. Enter any appropriate data for your transaction
6. Click "Submit transaction" and monitor the console logs to see your transaction post

## Wallet API

This extension injects an interface into every page that can be intereacted with as follows:

`window.injectedWallet.publicKey` - this returns the public key in JWK format for the Arweave wallet stored by the extension
and as such can be used in `arweave-js` anywhere a JWK is required with the exception that you cannot sign transactions with it.

```js
// Get the injected wallet's address
const address = await arweave.wallets.jwkToAddress(window.injectedWallet.publicKey)

// Create a transaction
const txn = await arweave.createTransaction({ data: Buffer.from('my magical message','utf8'), window.injectedWallet.publicKey})
```

`window.injectedWallet.sign(transaction)` - this method takes a `Transaction` objected created by `arweave.createTransaction.sign`, signs it, and then posts to the blockchain. No status codes or transaction IDs are returned by this method so it's up to the dapp to detect the transaction
