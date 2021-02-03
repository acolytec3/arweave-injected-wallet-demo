import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import { JWKInterface } from 'arweave/web/lib/wallet'

export type globalState = {
    wallet: JWKInterface,
    balance: number;
}

const initialState = {
    wallet: {} as JWKInterface,
    balance: 0
}
const reducer = (state: globalState, action: any): globalState => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'ADD_WALLET': {
            return { ...state, wallet: action.payload.wallet }
        };
        case 'UPDATE_BALANCE': {
            return { ...state, balance: action.payload.balance }
        }

        default: return state
    }
}

//@ts-ignore
const store = createStore<globalState, null, null, null>(reducer, initialState!)

wrapStore(store);

