import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accountAddress: '',
    babbuBalance: 0,
    bnbBalance: 0,
    busdBalance: 0,
    nftIdArray: <any[]>[],
    babbuNftDataArray: <any[]>[],
}

export const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        getAccountAddress: (state, action) => {
            state.accountAddress = action.payload
        },
        getBabbuBalance: (state, action) => {
            state.babbuBalance = action.payload
        },
        getBalanceBNB: (state, action) => {
            state.bnbBalance = action.payload
        },
        getBalanceBUSD: (state, action) => {
            state.busdBalance = action.payload
        },
        pushToNftIdArray: (state, action) => {
            // console.log(action.payload, 'action payload');

            const theOne = state.nftIdArray.find(e => e == action.payload)
            const index = state.nftIdArray.indexOf(theOne);
            if (index == -1) {
                state.nftIdArray.push(action.payload)
            }
        },
        getNftArray: (state, action) => {
            state.babbuNftDataArray = action.payload
        },
        pushNftToArray: (state, action) => {
            const theOne = state.babbuNftDataArray.find(e => e._id == action.payload._id)
            const index = state.babbuNftDataArray.indexOf(theOne);
            if (index == -1) {
                state.babbuNftDataArray.push(action.payload)
            }
        },
        removeNftFromArray: (state, action) => {
            const theOne = state.babbuNftDataArray.find(e => e._id == action.payload._id)
            const index = state.babbuNftDataArray.indexOf(theOne);
            if (index > -1) {
                state.babbuNftDataArray.splice(index, 1);
            }
        },
        addHashRateToNftData: (state, action) => {
            const theOne = state.babbuNftDataArray.find(e => e._id == action.payload[0])
            const index = state.babbuNftDataArray.indexOf(theOne);
            if (index > -1) {
                state.babbuNftDataArray[index].hashRate = action.payload[1];
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { getAccountAddress, getBabbuBalance, getBalanceBNB, getBalanceBUSD, pushToNftIdArray, pushNftToArray, removeNftFromArray, addHashRateToNftData, getNftArray } = connectionSlice.actions

export default connectionSlice.reducer