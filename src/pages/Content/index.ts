import { Store } from 'webext-redux';
import Arweave from 'arweave';
import Transaction, { Tag } from 'arweave/node/lib/transaction';
import crypto from 'arweave/web/lib/crypto/crypto-interface';
const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
});

window.addEventListener('message', async (event) => {
    // Only accept messages from the same frame
    if (event.source !== window) {
        return;
    }
    if (event.origin !== window.origin) {
        return;
    }
    if (event.data.hasOwnProperty('transaction')) {
        console.log('heres the txn', event.data);
        let store = new Store();
        await store.ready();
        let state = store.getState();
        let tx = await arweave.createTransaction(
            {
                data: event.data.transaction.data ?? undefined,
                target: event.data.transaction.target ?? undefined,
                quantity: event.data.transaction.quantity ?? undefined,
            },
            state.wallet
        );
        console.log(event.data.transaction);
        event.data.transaction.tags.forEach((tag: any) => {
            let newTag = new Tag(tag.name, tag.value);
            let key = newTag.get('name', { decode: true, string: true });
            let value = newTag.get('value', { decode: true, string: true });
            tx.addTag(key, value);
        });
        tx.addTag('App-Name', 'Injected Wallet 0.1');
        await arweave.transactions.sign(tx, state.wallet);
        console.log('signed transaction is:', tx);
        let res = await arweave.transactions.post(tx);
        console.log('transaction submission status', res);
    }
});

chrome.runtime.onMessage.addListener(async (res: any) => {
    switch (res.action) {
        case 'open.wallet':
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'application/json';
            fileInput.addEventListener('change', getFile);
            fileInput.onload = function () {
                //@ts-ignore
                this.remove();
            };
            document.head.appendChild(fileInput);
            fileInput.click();
    }
});

const getFile = async (evt: any) => {
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = async function (event) {
        if (evt.target.files[0].type === 'application/json') {
            try {
                let walletObject = JSON.parse(event!.target!.result as string);
                let store = new Store();
                await store.ready();
                await store.dispatch({
                    type: 'ADD_WALLET',
                    payload: { wallet: walletObject },
                });
                injectWallet();
            } catch (err) {
                console.log(err);
            }
        }
    };
    if (evt.target.files && evt.target.files.length > 0)
        reader.readAsText(evt.target.files[0]);
};

const injectWallet = async () => {
    //@ts-ignore
    window.crypt = crypto;
    let store = new Store();
    await store.ready();
    let state = store.getState();
    let injectedWallet = `window.injectedWallet = {
        publicKey: { e: "${state.wallet.e}", n: "${state.wallet.n}" },
        sign: function (transaction) {
            window.postMessage({ transaction: transaction })
        }} `;
    console.log(injectedWallet);
    var s = document.createElement('script');
    s.textContent = injectedWallet;
    s.onload = function () {
        //@ts-ignore
        this.remove();
    };
    document.head.appendChild(s);
};
export { };
